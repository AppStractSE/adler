import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import InitializeTheme from "@/components/InitializeTheme";
import { DMSans } from "@/util/fonts";
import { Metadata, Viewport } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://dev.adlersbyggservice.se"),
  title: {
    template: "%s | Adler Byggservice",
    default: "Alltid med kvalitet i fokus | Adler Byggservice",
  },
  openGraph: {
    title: "Adler Byggservice",
    description: "Alltid med kvalitet i fokus",
    url: "/",
    siteName: "Adler Byggservice",
    images: [
      {
        url: "/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "Adler Byggservice - Alltid med kvalitet i fokus",
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@",
    title: "Adler Byggservice",
    images: [
      {
        url: "/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "Adler Byggservice - Alltid med kvalitet i fokus",
      },
    ],
    description: "Alltid med kvalitet i fokus",
  },
  robots: "max-image-preview:large",
};

export const viewport: Viewport = {
  themeColor: "#fdfbf5",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${DMSans.className} bg-background text-primary antialiased`}
      >
        <InitializeTheme />
        <Toaster />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
