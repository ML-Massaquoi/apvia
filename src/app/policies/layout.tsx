import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policies | Quality, Health & Safety, Environmental",
  description:
    "APVIA Ltd corporate policies — quality management, health and safety, environmental protection, data protection, equality, and anti-bribery.",
  openGraph: {
    title: "Policies | Quality, Health & Safety, Environmental",
    description: "APVIA Ltd corporate policies — quality, H&S, environmental, data protection.",
    url: "https://www.apvia-sl.com/policies",
  },
};

export default function PoliciesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
