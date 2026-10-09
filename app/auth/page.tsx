import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { AuthPanel } from "@/components/auth-panel";
import { Brand } from "@/components/brand";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in or create an Applied Commerce Zimbabwe account.",
};

export default function AuthPage() {
  return <div className="auth-page">
    <header className="auth-header">
      <Brand subtitle="Zimbabwe learning platform" />
      <span className="auth-secure-label"><ShieldCheck aria-hidden="true" /> Secure sign-in</span>
    </header>
    <main className="auth-entry" aria-label="Sign in or create an account">
      <AuthPanel />
    </main>
    <footer className="auth-footer">
      <span>Applied Commerce Zimbabwe</span>
      <span>Learning · Action · Evidence · Opportunity</span>
    </footer>
  </div>;
}
