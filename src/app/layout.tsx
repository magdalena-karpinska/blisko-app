import type { Metadata } from "next";

import { lexend, Header, Container, Footer } from "./ui";
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
    <html lang="en" h-full>
      <body
        className={`${lexend.className} antialiased h-full flex flex-col overflow-hidden`}
      >
        <Header />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
