import type { Metadata } from "next";
import "./globals.css";
import "./personalisation.css";
import { AppShell } from "@/components/app-shell";
import { AuthProvider } from "@/lib/auth-context";
import { LearningPersistenceBridge } from "@/components/learning-persistence-bridge";
import { PersonalisationProvider } from "@/components/personalisation-provider";

export const metadata: Metadata = {
  title: { default: "Applied Commerce Zimbabwe", template: "%s · Applied Commerce Zimbabwe" },
  description: "Applied Commerce Zimbabwe — practical financial capability, enterprise and life-readiness learning for secondary school."
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body><AuthProvider><LearningPersistenceBridge/><PersonalisationProvider><AppShell>{children}</AppShell></PersonalisationProvider></AuthProvider></body></html>;
}
