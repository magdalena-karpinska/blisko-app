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
      <body className={`${lexend.className} antialiased h-full`}>
        <div className="flex flex-col min-h-screen max-w-[1100px] mx-auto w-full">
          <Header />
          <Container>{children}</Container>
          <Footer />
        </div>
      </body>
    </html>
  );
}
