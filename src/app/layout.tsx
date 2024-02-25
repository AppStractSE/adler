import Navigation from "@/components/navigation/Navigation";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.scss";
import Footer from "@/components/footer/Footer";
import Main from "@/components/Main";

export const metadata: Metadata = {
  title: "TC Elservice",
  description: "TC Elservice - Vi har lösningen!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <body>
        <Navigation />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
