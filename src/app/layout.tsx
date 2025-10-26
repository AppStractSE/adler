import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import InitializeTheme from "@/components/InitializeTheme";
import { DMSans, JosefinSans } from "@/util/fonts";
import { Metadata, Viewport } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.scss";

export const metadata: Metadata = {
  /* ... */
};

export const viewport: Viewport = {
  themeColor: "#fdfbf5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" className={`${DMSans.variable} ${JosefinSans.variable}`}>
      <body className="bg-background text-primary antialiased">
        <InitializeTheme />
        <Toaster />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
