import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FormMap } from "@/components/form-map";
import { zimbabweOLevelPlan } from "@/lib/zimbabwe";

export async function generateMetadata({params}:{params:Promise<{form:string}>}):Promise<Metadata>{
  const {form:raw}=await params;
  const form=Number(raw);
  const plan=zimbabweOLevelPlan.find(item=>item.form===form);
  if(!plan) return {title:"Applied Commerce Zimbabwe"};
  return {title:`Form ${form} · ${plan.title}`};
}

export default async function ZimbabweFormPage({params}:{params:Promise<{form:string}>}){
  const {form:raw}=await params;
  const form=Number(raw);
  if(![1,2,3,4].includes(form)) notFound();
  return <FormMap form={form}/>;
}
