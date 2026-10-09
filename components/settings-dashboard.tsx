"use client";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowLeft, Check, RotateCcw } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { AuthPanel } from "@/components/auth-panel";
import { useLearningStore } from "@/lib/learning-store";
import { defaultZimbabweFormForSourceGrade } from "@/lib/zimbabwe-curriculum";
import { DEFAULT_PERSONALISATION, type Personalisation } from "@/lib/personalisation";
import { usePersonalisation } from "@/components/personalisation-provider";
const appearanceOptions: Array<{value:Personalisation["appearance"];label:string}> = [{value:"system",label:"Use device setting"},{value:"light",label:"Light"},{value:"warm",label:"Warm"},{value:"dark",label:"Dark"}];
const accentOptions: Array<{value:Personalisation["accent"];label:string}> = [{value:"commerce",label:"Commerce"},{value:"blue",label:"Blue"},{value:"amber",label:"Amber"},{value:"sage",label:"Sage"}];
const textOptions: Array<{value:Personalisation["textSize"];label:string}> = [{value:"small",label:"Small"},{value:"standard",label:"Standard"},{value:"large",label:"Large"},{value:"extra_large",label:"Extra large"}];
const widthOptions: Array<{value:Personalisation["readingWidth"];label:string}> = [{value:"narrow",label:"Narrow"},{value:"standard",label:"Standard"},{value:"wide",label:"Wide"}];
export function SettingsDashboard(){
 const {user}=useAuth(); const {state,setProfile}=useLearningStore();
 const {personalisation,loading,saving,error,message,update,reload}=usePersonalisation();
 const [name,setName]=useState(state.profile?.displayName??"");
 const [form,setForm]=useState<number>(state.profile?.form??state.activeForm??defaultZimbabweFormForSourceGrade(state.activeGrade));
 const [profileMessage,setProfileMessage]=useState("");
 function saveProfile(event:FormEvent<HTMLFormElement>){event.preventDefault();setProfile({displayName:name.trim(),form:form as 1|2|3|4});setProfileMessage("Profile saved on this device. Learning-record sync will be enabled in the persistence milestone.");}
 return <div className="settings-page">
  <header className="settings-header"><Link className="settings-back" href="/"><ArrowLeft/> Back to learning</Link><p className="eyebrow">Account settings</p><h1>Make learning feel like yours.</h1><p className="settings-intro">Personalise the Zimbabwe learning experience. Appearance and reading preferences never change curriculum content or account permissions.</p></header>
  <section className="settings-layout"><nav className="settings-nav" aria-label="Settings sections"><a href="#profile">Profile</a><a href="#appearance">Appearance</a><a href="#reading">Reading</a><a href="#account">Account</a></nav>
   <div className="settings-content">
    <section id="profile" className="settings-section"><h2>Learner profile</h2><p>Choose the name and Form used in the learner workspace.</p><form className="settings-form" onSubmit={saveProfile}><label>Preferred name<input maxLength={80} value={name} onChange={e=>setName(e.target.value)} placeholder="Add your name"/></label><label>Current Form<select value={form} onChange={e=>setForm(Number(e.target.value))}>{[1,2,3,4].map(n=><option key={n} value={n}>Form {n}{n===4?" · Launch Year":""}</option>)}</select></label><button type="submit">Save profile</button>{profileMessage&&<p role="status">{profileMessage}</p>}</form></section>
    <section id="appearance" className="settings-section"><h2>Appearance</h2><p>Use a light, warm or dark surface, or follow the device preference.</p><PreferenceGroup label="Colour mode" options={appearanceOptions} value={personalisation.appearance} disabled={loading||saving} onChange={value=>void update({appearance:value})}/><PreferenceGroup label="Accent colour" options={accentOptions} value={personalisation.accent} disabled={loading||saving} onChange={value=>void update({accent:value})}/></section>
    <section id="reading" className="settings-section"><h2>Reading experience</h2><p>Adjust text size and content width for comfortable reading.</p><PreferenceGroup label="Text size" options={textOptions} value={personalisation.textSize} disabled={loading||saving} onChange={value=>void update({textSize:value})}/><PreferenceGroup label="Reading width" options={widthOptions} value={personalisation.readingWidth} disabled={loading||saving} onChange={value=>void update({readingWidth:value})}/><button type="button" className="settings-reset" onClick={()=>void update(DEFAULT_PERSONALISATION)} disabled={loading||saving}><RotateCcw/> Reset preferences</button>{error&&<p role="alert" className="settings-error">{error} <button type="button" onClick={()=>void reload()}>Retry</button></p>}{message&&<p role="status" className="settings-success"><Check/> {message}</p>}</section>
    <section id="account" className="settings-section"><h2>Account access</h2><p>{user ? "Signed in as " + user.email + "." : "Sign in to sync preferences with an account."} Staff access is assigned separately and cannot be self-selected here.</p>{user?<AuthPanel compact/>:<Link className="settings-account-link" href="/auth">Sign in or create an account</Link>}</section>
   </div>
  </section>
 </div>;
}
function PreferenceGroup<T extends string>({label,options,value,disabled,onChange}:{label:string;options:Array<{value:T;label:string}>;value:T;disabled:boolean;onChange:(value:T)=>void}){
 return <fieldset className="settings-choice-group" disabled={disabled}><legend>{label}</legend><div>{options.map(option=><button key={option.value} type="button" aria-pressed={value===option.value} className={value===option.value?"selected":""} onClick={()=>onChange(option.value)}>{option.label}</button>)}</div></fieldset>;
}
