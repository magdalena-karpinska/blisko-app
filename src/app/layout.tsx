import type { Metadata } from "next";
import { lexend } from "./ui/fonts";
import "./globals.css";
import { Header } from "./ui/header";
import { Container } from "./ui";
import Footer from "./ui/footer";

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
        className={`${lexend.className} antialiased min-h-screen flex flex-col`}
      >
        <main className="flex-1 flex flex-col items-center">
          <Header />
          <Container>{children}</Container>
          <Footer />
        </main>
      </body>
    </html>
  );
}
