import type { ContentBlock, UnitContent, UnitSummary } from "./types";

export type ZimbabweBlockOverride =
  | {index:number; kind:"text"; text:string}
  | {index:number; kind:"table"; rows:string[][]}
  | {index:number; kind:"remove"};

export type ZimbabweUnitOverride = {
  title?: string;
  label?: string;
  blocks?: ZimbabweBlockOverride[];
};

/**
 * Zimbabwe localisation is deliberately explicit and unit-scoped.
 *
 * Do not use this table for bulk country-name or currency replacement.
 * Every entry should represent an editorially reviewed Zimbabwe adaptation.
 * Source unit IDs remain unchanged so learner evidence and provenance survive.
 */
export const zimbabweContentOverrides: Record<string,ZimbabweUnitOverride> = {};

function applyBlockOverrides(blocks:ContentBlock[],overrides:ZimbabweBlockOverride[]=[]):ContentBlock[]{
  if(!overrides.length) return blocks;
  const byIndex=new Map(overrides.map(item=>[item.index,item]));
  return blocks.flatMap((block,index)=>{
    const override=byIndex.get(index);
    if(!override) return [block];
    if(override.kind==="remove") return [];

    if(override.kind==="text"){
      if(block.kind!=="text") throw new Error(`Zimbabwe override expects text block at index ${index}.`);
      return [{...block,text:override.text}];
    }

    if(block.kind!=="table") throw new Error(`Zimbabwe override expects table block at index ${index}.`);
    return [{...block,rows:override.rows}];
  });
}

export function applyZimbabweUnitOverlay(unit:UnitContent):UnitContent{
  const override=zimbabweContentOverrides[unit.id];
  if(!override) return unit;
  return {
    ...unit,
    title:override.title ?? unit.title,
    label:override.label ?? unit.label,
    blocks:applyBlockOverrides(unit.blocks,override.blocks),
  };
}

export function applyZimbabweSummaryOverlay<T extends UnitSummary>(unit:T):T{
  const override=zimbabweContentOverrides[unit.id];
  if(!override) return unit;
  return {
    ...unit,
    title:override.title ?? unit.title,
    label:override.label ?? unit.label,
  };
}
