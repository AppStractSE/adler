import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import InitializeTheme from "@/components/InitializeTheme";
import { DMSans } from "@/util/fonts";
import { Metadata, Viewport } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://dev.tc-elservice.se"),
  title: {
    template: "%s | TC Elservice",
    default: "Vi har lösningen | TC Elservice",
  },
  openGraph: {
    title: "TC Elservice",
    description: "Vi har lösningen",
    url: "/",
    siteName: "TC Elservice",
    images: [
      {
        url: "/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "TC Elservice - Vi har lösningen",
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@",
    title: "TC Elservice",
    images: [
      {
        url: "/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "TC Elservice - Vi har lösningen",
      },
    ],
    description: "Vi har lösningen",
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
