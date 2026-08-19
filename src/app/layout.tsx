import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://devs.pro"),
  title: "DEVS PRO - AI-Driven Engineering | Python, FinTech & SaaS",
  description: "Ship enterprise-grade software faster. We accelerate Time-to-Market for funded startups, FinTech, and B2B SaaS using advanced AI tools and deep Python expertise.",
  openGraph: {
    title: "DEVS PRO - AI-Driven Engineering | Python, FinTech & SaaS",
    description: "Ship enterprise-grade software faster. We accelerate Time-to-Market for funded startups, FinTech, and B2B SaaS using advanced AI tools and deep Python expertise.",
    url: "https://devs.pro",
    siteName: "DEVS PRO",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DEVS PRO - AI-Driven Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DEVS PRO - AI-Driven Engineering | Python, FinTech & SaaS",
    description: "Ship enterprise-grade software faster. We accelerate Time-to-Market for funded startups, FinTech, and B2B SaaS using advanced AI tools and deep Python expertise.",
    images: ["/og-image.jpg"],
    creator: "@devspro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MZZ44TVG');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MZZ44TVG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
