import Main from "@/components/Main";
import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.scss";

export const metadata: Metadata = {
  title: "TC ELSERVICE Örebro - Vi har lösningen!",
  description:
    "Upptäck Örebros egna TC ELSERVICE, en personligt driven elektrikerverksamhet med rikstäckande service. Med en passion för kvalitet, snabbhet och tillförlitlighet, erbjuder vi skräddarsydda eltjänster för både hem och företag över hela Sverige. Oavsett ditt behov – från små reparationer till stora projekt – är vår flexibilitet och expertis din garanti för ett professionellt resultat. Kontakta oss för en lösning som lyser upp din vardag.",
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://tc-elelservice.se",
    siteName: "TC ELSERVICE",
  },
  alternates: {
    canonical: "https://tc-elservice.se",
  },
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
