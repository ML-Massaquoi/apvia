import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Mining, Agriculture, Construction & Logistics",
  description:
    "APVIA Ltd provides integrated investment solutions across Sierra Leone and West Africa — mining, agriculture, construction, logistics, and trade services.",
  openGraph: {
    title: "Services | Mining, Agriculture, Construction & Logistics",
    description:
      "APVIA Ltd provides integrated investment solutions across Sierra Leone and West Africa.",
    url: "https://www.apvia-sl.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
