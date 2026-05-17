import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neato SLT Announcement",
  description:
    "Neato Senior Leadership Team announcement deck for May 18, 2026.",
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
