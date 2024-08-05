import type { Metadata } from "next";
import { lexend } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blisko App",
  description: "Not just another social app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
