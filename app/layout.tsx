import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/app-shell";

export const metadata: Metadata = {
  title: { default: "Applied Commerce Zimbabwe", template: "%s · Applied Commerce Zimbabwe" },
  description: "Applied Commerce Zimbabwe — practical financial capability, enterprise and life-readiness learning for secondary school."
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body><AppShell>{children}</AppShell></body></html>;
}
