from __future__ import annotations
from docx import Document
from docx.text.paragraph import Paragraph
from docx.table import Table
from pathlib import Path
import base64, gzip, json, re, shutil, sys
from language_accessibility import adapt_text, audit_summary, is_internal_editorial_note, reset_audit_counts

SOURCE_DIR = Path(sys.argv[1]) if len(sys.argv) > 1 else Path('/mnt/data')
OUT = Path(sys.argv[2]) if len(sys.argv) > 2 else Path('public/curriculum')

# Grade 9 Term 2 lessons 23–34 were restored in the canonical repository as a
# runtime patch after the original DOCX omitted them. Preserve that authoritative
# patch across curriculum rebuilds until the source manuscript itself contains
# the restored lessons.
preserved_grade9_patch = None
if OUT.exists():
    try:
        existing_index = json.loads((OUT/'index.json').read_text(encoding='utf-8'))
        grade9_meta = next((g for g in existing_index.get('grades', []) if g.get('grade') == 9), None)
        patch_meta = next((p for p in (grade9_meta or {}).get('patches', []) if p.get('term') == 2), None)
        if patch_meta:
            part_text = {}
            for part in patch_meta.get('parts', []):
                part_path = OUT/part
                if not part_path.exists():
                    raise FileNotFoundError(part)
                part_text[part] = part_path.read_text(encoding='ascii')
            encoded = ''.join(part_text[p] for p in patch_meta['parts'])
            patch_payload = json.loads(gzip.decompress(base64.b64decode(encoded)).decode('utf-8'))
            preserved_grade9_patch = {
                'meta': patch_meta,
                'parts': part_text,
                'payload': patch_payload,
            }
    except (FileNotFoundError, StopIteration, KeyError, ValueError, OSError, json.JSONDecodeError):
        preserved_grade9_patch = None
    shutil.rmtree(OUT)

OUT.mkdir(parents=True, exist_ok=True)

def clean(text: str) -> str:
    return ' '.join(text.replace('\xa0',' ').split()).strip()

def upper_ratio(text: str) -> float:
    letters=[c for c in text if c.isalpha()]
    return sum(c.isupper() for c in letters)/len(letters) if letters else 0

def lesson_heading(text: str):
    m=re.match(r'^LESSON(?:S)?\s+([0-9]+)(?:[-–—]([0-9]+))?\s*:\s*(.+)$', text)
    if not m: return None
    title=m.group(3).strip()
    if len(text)>220 or upper_ratio(title)<.82: return None
    return int(m.group(1)), int(m.group(2) or m.group(1)), title

def block_type(text: str, style: str) -> str:
    u=text.upper()
    if style.startswith('List'): return 'list'
    if text.startswith('✍️') or u.startswith('ACTIVITY '): return 'activity'
    if text.startswith('💭'): return 'reflection'
    if text.startswith('✅'): return 'checkpoint'
    if text.startswith('📂'): return 'portfolio'
    if text.startswith('📘'): return 'story'
    if text.startswith(('🔍','💡','🔬')): return 'learning'
    if text.startswith('⬜') or re.fullmatch(r'THINKING EQUATION', u): return 'equation'
    if u in {'LEARNING OUTCOMES','KEY VOCABULARY','DEEPENING INSIGHT','HOW TO USE THIS BOOK','YOUR TENSION/EXPERIMENT LOG'}: return 'section'
    if len(text)<=100 and upper_ratio(text)>.9: return 'section'
    return 'paragraph'

def serialize(item, grade: int):
    if isinstance(item, Paragraph):
        raw=clean(item.text)
        if not raw or is_internal_editorial_note(raw): return None
        text=adapt_text(raw, grade)
        if text: return {'kind':'text','type':block_type(text,item.style.name if item.style else ''),'text':text}
    elif isinstance(item, Table):
        rows=[]
        for row in item.rows:
            vals=[]
            for cell in row.cells:
                raw=clean(cell.text)
                vals.append(adapt_text(raw, grade) if raw else '')
            if any(vals): rows.append(vals)
        if rows: return {'kind':'table','type':'table','rows':rows}
    return None

def term_marker(text: str, grade: int):
    m=re.fullmatch(r'Term\s+([1-4])',text,re.I)
    if m: return int(m.group(1))
    m=re.search(rf"Grade\s+{grade}\s+Learner's Book\s+[—-]\s+Term\s+([1-4])",text,re.I)
    return int(m.group(1)) if m else None

def source_note(text: str) -> bool:
    u=text.upper()
    return u.startswith('SITUATION REPORT:') or u.startswith('END OF GRADE ') or u.startswith('END OF PAPER ')

PART_SIZE = 40000
reset_audit_counts()
catalogue={'product':'Applied Commerce Zimbabwe','market':'Zimbabwe','edition':'Zimbabwe','sourceStructure':'Grades 8-12 / four source terms','schoolPlacement':'Forms 1-4 O-Level / three-term target','formatVersion':2,'grades':[]}
compiled_lesson_numbers={}
for path in sorted(SOURCE_DIR.glob('APPLIED COMMERCE Grade *.docx')):
    grade=int(re.search(r'Grade (\d+)',path.name).group(1))
    doc=Document(path)
    items=list(doc.iter_inner_content())
    title=''; book_title=f"Grade {grade} Learner's Book"
    for item in items[:100]:
        if isinstance(item,Paragraph):
            t=clean(item.text)
            if not t: continue
            if not title and t.upper().startswith('APPLIED COMMERCE'): title=t
            if f'Grade {grade}' in t and "Learner's Book" in t: book_title=t

    terms={n:{'term':n,'intro':[],'units':[]} for n in range(1,5)}
    preface=[]; current_term=1; current_unit=None; seen=False; serial=0; assessment_serial=0
    for item in items:
        raw_text=clean(item.text) if isinstance(item, Paragraph) else ''
        if raw_text:
            tm=term_marker(raw_text,grade)
            if tm:
                current_term=tm; current_unit=None
                if seen: continue
            if source_note(raw_text):
                current_unit=None; continue
            exam=re.fullmatch(rf'GRADE\s+{grade}\s+TERM\s+([1-4])\s+MOCK EXAM',raw_text,re.I)
            if exam:
                current_term=int(exam.group(1)); assessment_serial+=1; serial+=1; seen=True
                exam_title=adapt_text(raw_text, grade)
                current_unit={'id':f'g{grade}-t{current_term}-assessment-{assessment_serial}','type':'assessment','grade':grade,'term':current_term,'label':exam_title,'title':exam_title,'blocks':[],'position':len(terms[current_term]['units'])}
                terms[current_term]['units'].append(current_unit); continue
            if re.fullmatch(r'END OF MOCK EXAM\s*[—-].*',raw_text,re.I):
                current_unit=None; continue
            lesson=lesson_heading(raw_text)
            if lesson:
                seen=True; serial+=1; start,end,l_title_raw=lesson
                l_title=adapt_text(l_title_raw, grade)
                current_unit={'id':f'g{grade}-t{current_term}-l{start:02d}-{serial:03d}','type':'lesson','grade':grade,'term':current_term,'label':f'Lesson {start}' if start==end else f'Lessons {start}–{end}','title':l_title,'startLesson':start,'endLesson':end,'blocks':[],'position':len(terms[current_term]['units'])}
                terms[current_term]['units'].append(current_unit); continue
        b=serialize(item, grade)
        if not b: continue
        if current_unit is not None: current_unit['blocks'].append(b)
        elif seen: terms[current_term]['intro'].append(b)
        else: preface.append(b)

    cleaned=[]
    for b in preface:
        if b.get('kind')=='text':
            t=b['text']
            if t==title or t.startswith(f"Grade {grade} Learner's Book") or re.fullmatch(r'Term\s+[1-4]',t,re.I): continue
        cleaned.append(b)
    preface=cleaned

    bundle={'grade':grade,'title':title,'bookTitle':book_title,'sourceFile':path.name,'preface':preface,'terms':[]}
    total_lessons=0; total_assessments=0
    term_catalogue=[]
    for n in range(1,5):
        units=terms[n]['units']
        lesson_units=[u for u in units if u['type']=='lesson']; assessments=[u for u in units if u['type']=='assessment']
        compiled_lesson_numbers[(grade,n)]={u.get('startLesson') for u in lesson_units if isinstance(u.get('startLesson'), int)}
        total_lessons+=len(lesson_units); total_assessments+=len(assessments)
        bundle['terms'].append({'term':n,'intro':terms[n]['intro'],'units':units})
        term_catalogue.append({'term':n,'unitCount':len(lesson_units),'assessmentCount':len(assessments)})
    raw=json.dumps(bundle,ensure_ascii=False,separators=(',',':')).encode('utf-8')
    encoded=base64.b64encode(gzip.compress(raw,9)).decode('ascii')
    parts=[encoded[i:i+PART_SIZE] for i in range(0,len(encoded),PART_SIZE)]
    for i,part in enumerate(parts,1):
        (OUT/f'grade-{grade}.part-{i}.b64').write_text(part,encoding='ascii')
    catalogue['grades'].append({'grade':grade,'title':title,'bookTitle':book_title,'unitCount':total_lessons,'assessmentCount':total_assessments,'bundleParts':len(parts),'terms':term_catalogue})

grade9_meta=next((g for g in catalogue['grades'] if g['grade']==9),None)
grade9_term2=next((t for t in (grade9_meta or {}).get('terms',[]) if t['term']==2),None)
if grade9_meta and grade9_term2 and grade9_term2['unitCount'] < 18:
    if not preserved_grade9_patch:
        raise RuntimeError(
            'Grade 9 Term 2 is incomplete and the canonical lessons 23–34 patch is unavailable. '
            'Restore the source patch before rebuilding the curriculum.'
        )
    patch_units=[
        u for u in preserved_grade9_patch['payload'].get('units',[])
        if u.get('type')=='lesson' and isinstance(u.get('startLesson'),int)
    ]
    existing_numbers=compiled_lesson_numbers.get((9,2),set())
    missing_numbers={u['startLesson'] for u in patch_units if u['startLesson'] not in existing_numbers}
    if missing_numbers:
        for part,text in preserved_grade9_patch['parts'].items():
            (OUT/part).write_text(text,encoding='ascii')
        grade9_meta['patches']=[preserved_grade9_patch['meta']]
        grade9_meta['unitCount']+=len(missing_numbers)
        grade9_term2['unitCount']+=len(missing_numbers)

catalogue['grades'].sort(key=lambda g:g['grade'])
(OUT/'index.json').write_text(json.dumps(catalogue,ensure_ascii=False,separators=(',',':')),encoding='utf-8')
print(json.dumps({'curriculum': {g['grade']:{'lessons':g['unitCount'],'assessments':g['assessmentCount'],'terms':[t['unitCount'] for t in g['terms']]} for g in catalogue['grades']}, 'languageAudit': audit_summary()}, indent=2))