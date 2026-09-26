import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About APVIA Ltd | Our Story, Leadership & Governance",
  description:
    "Learn about APVIA Ltd — Sierra Leone's leading investment company. Our story, board of directors, executive team, governance principles, and strategic vision for West Africa.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About APVIA Ltd | Our Story, Leadership & Governance",
    description:
      "Learn about APVIA Ltd — Sierra Leone's leading investment company. Our story, board of directors, executive team, and governance.",
    url: "https://www.apvia-sl.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
