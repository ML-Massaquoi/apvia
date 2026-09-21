import type { Metadata } from "next";
import FlagshipClient from "./FlagshipClient";

export const metadata: Metadata = {
  title: "Flagship Projects — Sierra Leone Investment Portfolio | APVIA Ltd",
  description:
    "Explore Sierra Leone's $10B+ development portfolio — 30+ flagship projects across infrastructure, energy, agriculture, mining, and tourism. APVIA Ltd connects investors with West Africa's most dynamic economy.",
  keywords: [
    "Sierra Leone investment opportunities",
    "Lungi Bridge project",
    "Sierra Leone infrastructure projects 2026",
    "Sierra Leone energy investment",
    "Feed Salone agriculture",
    "Marampa mines Sierra Leone",
    "Black Johnson fishing port",
    "Sierra Leone mining investment",
    "West Africa development projects",
    "APVIA flagship projects",
  ],
  openGraph: {
    title: "Flagship Projects — Sierra Leone Investment Portfolio | APVIA Ltd",
    description:
      "Sierra Leone's $10B+ development portfolio: 30+ flagship projects across infrastructure, energy, agriculture, mining & tourism. APVIA Ltd — your gateway to West Africa.",
    url: "https://www.apvia-sl.com/flagship",
  },
};

export default function FlagshipPage() {
  return <FlagshipClient />;
}
