import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./personalisation.css";
import "./pwa.css";
import { PwaProvider } from "@/components/pwa-provider";
import { AppShell } from "@/components/app-shell";
import { AuthProvider } from "@/lib/auth-context";
import { LearningPersistenceBridge } from "@/components/learning-persistence-bridge";
import { PersonalisationProvider } from "@/components/personalisation-provider";

export const metadata: Metadata = {
  title: { default: "Applied Commerce Zimbabwe", template: "%s · Applied Commerce Zimbabwe" },
  description: "Applied Commerce Zimbabwe — practical financial capability, enterprise and life-readiness learning for secondary school.",
  applicationName: "Applied Commerce Zimbabwe",
  appleWebApp: { capable: true, title: "AC Zimbabwe", statusBarStyle: "default" },
  icons: { icon: "/pwa/icon-192.png", apple: "/pwa/apple-touch-icon.png" },
};

export const viewport: Viewport = { themeColor: "#17313b", viewportFit: "cover" };

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body><PwaProvider><AuthProvider><LearningPersistenceBridge/><PersonalisationProvider><AppShell>{children}</AppShell></PersonalisationProvider></AuthProvider></PwaProvider></body></html>;
}
