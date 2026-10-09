import type { Metadata } from "next";
import { SettingsDashboard } from "@/components/settings-dashboard";
import "./settings.css";
export const metadata: Metadata = { title: "Settings", description: "Personalise the Applied Commerce Zimbabwe learning experience." };
export default function SettingsPage(){ return <SettingsDashboard/>; }
