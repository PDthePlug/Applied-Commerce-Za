import { notFound, redirect } from "next/navigation";
import { defaultZimbabweFormForSourceGrade } from "@/lib/zimbabwe-curriculum";

export default async function LegacySourceGradePage({params}:{params:Promise<{grade:string}>}){
  const {grade:raw}=await params;
  const grade=Number(raw);
  if(![8,9,10,11,12].includes(grade)) notFound();

  // Source-grade routes remain valid only as legacy entry points.
  // Learners always enter the four-year Zimbabwe Form architecture.
  redirect(`/learn/form/${defaultZimbabweFormForSourceGrade(grade)}`);
}
