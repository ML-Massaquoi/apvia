import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | APVIA Ltd Leadership & Talent",
  description:
    "Meet the team behind APVIA Ltd — our leadership, talent philosophy, career development programmes, and commitment to diversity and excellence.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Our Team | APVIA Ltd Leadership & Talent",
    description:
      "Meet the team behind APVIA Ltd — our leadership, talent philosophy, and commitment to excellence.",
    url: "https://www.apvia-sl.com/team",
  },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
