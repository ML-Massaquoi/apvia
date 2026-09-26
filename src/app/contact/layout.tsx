import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact APVIA Ltd | Get in Touch | Freetown, Sierra Leone",
  description:
    "Contact APVIA Ltd for investment enquiries, partnerships, and business opportunities. Located at 91 Fort Street, Freetown, Sierra Leone. Phone: +232 73 88 66 22.",
  openGraph: {
    title: "Contact APVIA Ltd | Get in Touch | Freetown, Sierra Leone",
    description:
      "Contact APVIA Ltd for investment enquiries, partnerships, and business opportunities.",
    url: "https://www.apvia-sl.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
