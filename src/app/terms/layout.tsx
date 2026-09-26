import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | APVIA Ltd",
  description:
    "APVIA Ltd terms and conditions — legal framework for using our website and services.",
  openGraph: {
    title: "Terms & Conditions | APVIA Ltd",
    description: "APVIA Ltd terms and conditions for website and services.",
    url: "https://www.apvia-sl.com/terms",
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
