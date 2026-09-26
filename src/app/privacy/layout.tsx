import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | APVIA Ltd Data Protection",
  description:
    "APVIA Ltd privacy policy — how we collect, use, and protect your personal data. GDPR-compliant data handling practices.",
  openGraph: {
    title: "Privacy Policy | APVIA Ltd Data Protection",
    description: "APVIA Ltd privacy policy — how we collect, use, and protect your personal data.",
    url: "https://www.apvia-sl.com/privacy",
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
