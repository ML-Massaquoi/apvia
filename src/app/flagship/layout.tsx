import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flagship Projects | Sierra Leone's $10B+ Development Portfolio",
  description:
    "Explore 30+ flagship projects in Sierra Leone — Lungi Bridge, solar power plants, fishing port, mining operations, and more. $10B+ investment portfolio across 6 sectors.",
  openGraph: {
    title: "Flagship Projects | Sierra Leone's $10B+ Development Portfolio",
    description:
      "Explore 30+ flagship projects in Sierra Leone — $10B+ investment portfolio across infrastructure, energy, agriculture, mining, and tourism.",
    url: "https://www.apvia-sl.com/flagship",
  },
};

export default function FlagshipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
