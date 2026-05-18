import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://neato-slt-announcement.vercel.app";
const title = "Neato — A Note From Anthony & Spencer";
const description =
  "Introducing the formal Senior Leadership Team, announcing key promotions, and a look at what's next.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: "/brand/neato-icon.svg",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Neato",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Neato Senior Leadership Team announcement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
