"use client";

import { ChevronDown, Check, Download, Menu, Share2, Smartphone, WifiOff } from "lucide-react";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

interface InstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

type InstallPlatform = "android" | "ios" | "desktop";

type PwaState = {
  platform: InstallPlatform;
  installed: boolean;
  canInstall: boolean;
  install: () => Promise<void>;
  message: string;
};

const PwaContext = createContext<PwaState | null>(null);

export function PwaProvider({ children }: { children: ReactNode }) {
  const [platform, setPlatform] = useState<InstallPlatform>("android");
  const [prompt, setPrompt] = useState<InstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState(false);
  const [offline, setOffline] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const displayMode = window.matchMedia("(display-mode: standalone)");
    const refreshInstalled = () => setInstalled(displayMode.matches || Boolean((navigator as Navigator & { standalone?: boolean }).standalone));
    const refreshConnection = () => setOffline(!navigator.onLine);
    const capturePrompt = (event: Event) => { event.preventDefault(); setPrompt(event as InstallPromptEvent); };
    const didInstall = () => { setInstalled(true); setPrompt(null); setMessage("Applied Commerce Zimbabwe is installed on this device."); };
    const frame = requestAnimationFrame(() => {
      setPlatform(/iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) ? "ios" : /Android/.test(navigator.userAgent) ? "android" : "desktop");
      refreshInstalled();
      refreshConnection();
    });
    displayMode.addEventListener("change", refreshInstalled);
    window.addEventListener("online", refreshConnection);
    window.addEventListener("offline", refreshConnection);
    window.addEventListener("beforeinstallprompt", capturePrompt);
    window.addEventListener("appinstalled", didInstall);
    if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator && window.isSecureContext) {
      // Registration failures must not interrupt lessons or saving. Installation
      // remains a browser capability; a worker is not used as an auth/data store.
      void navigator.serviceWorker.register("/sw.js", { scope: "/", updateViaCache: "none" }).catch(() => {});
    }
    return () => {
      cancelAnimationFrame(frame);
      displayMode.removeEventListener("change", refreshInstalled);
      window.removeEventListener("online", refreshConnection);
      window.removeEventListener("offline", refreshConnection);
      window.removeEventListener("beforeinstallprompt", capturePrompt);
      window.removeEventListener("appinstalled", didInstall);
    };
  }, []);

  async function install() {
    if (!prompt) return;
    setPrompt(null);
    try {
      await prompt.prompt();
      const choice = await prompt.userChoice;
      setMessage(choice.outcome === "accepted" ? "Follow your browser’s steps to finish installing Applied Commerce Zimbabwe." : "You can install later from your browser’s menu.");
    } catch {
      setMessage("Open your browser’s menu and choose Install app or Add to Home Screen.");
    }
  }

  return <PwaContext.Provider value={{ platform, installed, canInstall: Boolean(prompt), install, message }}>
    {offline ? <div className="pwa-offline-notice" role="status">You’re offline. Keep this lesson open to continue. Answers saved on this device stay here. Account sync and opening pages need a connection.</div> : null}
    {children}
  </PwaContext.Provider>;
}

const platformLabels: Record<InstallPlatform, string> = { android: "Android", ios: "iPhone / iPad", desktop: "Computer" };

function InstallCard() {
  const pwa = useContext(PwaContext);
  const [chosenPlatform, setChosenPlatform] = useState<InstallPlatform | null>(null);
  if (!pwa) return null;
  const platform = chosenPlatform ?? pwa.platform;
  return <div className="pwa-install-card">
    <div className="pwa-install-heading">
      <span className="pwa-app-mark" aria-hidden="true">AC</span>
      <div><p className="pwa-eyebrow">Zimbabwe · On your device</p><h2>A place on your home screen.</h2></div>
    </div>
    <p className="pwa-install-description">Your learning space, one tap away. Open Applied Commerce in its own app window.</p>
    {pwa.canInstall ? <button className="pwa-install-button" type="button" onClick={() => void pwa.install()}><Download aria-hidden="true"/> Install Applied Commerce</button> : <div className="pwa-install-guide">
      <div className="pwa-platforms" role="group" aria-label="Your device">
        {(Object.keys(platformLabels) as InstallPlatform[]).map(value => <button key={value} type="button" aria-pressed={platform === value} onClick={() => setChosenPlatform(value)}>{platformLabels[value]}</button>)}
      </div>
      <ol className="pwa-install-steps" aria-label={`${platformLabels[platform]} installation steps`}>
        <li><span aria-hidden="true">1</span>{platform === "ios" ? <p>Open this site in <strong>Safari</strong>, then tap <Share2 aria-label="Share"/> <strong>Share</strong>.</p> : <p>Open {platform === "android" ? "Chrome" : "Chrome or Edge"} and select the <Menu aria-hidden="true"/> <strong>browser menu</strong>.</p>}</li>
        <li><span aria-hidden="true">2</span><p>Choose <strong>{platform === "ios" ? "Add to Home Screen" : "Install app"}</strong>{platform !== "ios" ? <> or <strong>Add to Home Screen</strong></> : null}, then confirm.</p></li>
      </ol>
    </div>}
    {pwa.message ? <p className="pwa-feedback" role="status">{pwa.message}</p> : null}
    <p className="pwa-install-footnote">A connection is needed to open lessons and sync your work.</p>
  </div>;
}

export function PwaProfileInstall() {
  const pwa = useContext(PwaContext);
  if (!pwa || pwa.installed) return null;
  return <details id="install" className="pwa-profile-install">
    <summary><span className="pwa-summary-icon"><Smartphone aria-hidden="true"/></span><span>Install Applied Commerce<small>Keep your learning close.</small></span><ChevronDown className="pwa-chevron" aria-hidden="true"/></summary>
    <InstallCard/>
  </details>;
}

export function PwaInstallSettings() {
  const pwa = useContext(PwaContext);
  if (!pwa) return null;
  return <>
    {pwa.installed ? <div className="pwa-installed"><Check aria-hidden="true"/><div><h2>You’re all set.</h2><p>Applied Commerce is running as an installed app.</p></div></div> : <InstallCard/>}
    <details className="pwa-connection-details"><summary><WifiOff aria-hidden="true"/> When your connection drops <ChevronDown className="pwa-chevron" aria-hidden="true"/></summary><p>Keep your current lesson open to continue. Work successfully saved on this device stays here, and account sync retries when you reconnect. Opening lessons, sign-in and staff tools need a connection. Installing the app does not download the curriculum.</p></details>
  </>;
}
