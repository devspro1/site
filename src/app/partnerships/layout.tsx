import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud & Infrastructure Partnerships | DEVS PRO",
  description:
    "DEVS PRO partners with cloud, GPU, bare-metal, and developer infrastructure providers to help fintech, B2B SaaS, and AI teams deploy and scale.",
  alternates: {
    canonical: "/partnerships",
  },
  openGraph: {
    title: "Cloud & Infrastructure Partnerships | DEVS PRO",
    description:
      "Qualified infrastructure referrals through architecture audits, migrations, implementation work, and technical guidance.",
    url: "/partnerships",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud & Infrastructure Partnerships | DEVS PRO",
    description:
      "Qualified infrastructure referrals through architecture audits, migrations, implementation work, and technical guidance.",
  },
};

export default function PartnershipsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
