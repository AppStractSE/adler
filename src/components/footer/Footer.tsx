import { content } from "@/data/content";
import { socials } from "@/data/socials";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerlinks = [
    { name: "Tidigare projekt", href: "/projekt" },
    { name: "Om TC Elservice", href: "/om-oss" },
    { name: "Våra tjänster", href: "/vara-tjanster" },
    { name: "Räkna ut rotavdrag", href: "/rotavdrag" },
    { name: "Offertförfrågan", href: "/offertforfragan" },
  ];
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary text-background">
      <div className="max-page-width flex flex-col gap-8 px-4 pb-8 pt-32 md:gap-16">
        <div className="flex flex-wrap gap-12 md:gap-24">
          <div className="flex min-w-fit flex-col gap-8">
            <h5 className="text-base">Snabblänkar</h5>
            <div className="flex flex-col gap-4">
              {footerlinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex w-fit items-center gap-2 text-lg font-light hover:text-cyan-500 md:text-3xl"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex min-w-fit flex-col gap-8">
            <h5 className="text-base">Kontakt</h5>
            <div className="flex flex-col">
              <div className="text-lg font-light md:text-lg">
                Menuettvägen 2
              </div>
              <div className="text-lg font-light md:text-lg">
                711 35 Lindesberg
              </div>
              <div className="text-lg font-light md:text-lg">
                {content.company.phone}
              </div>
              <div className="text-lg font-light md:text-lg">
                {content.company.email}
              </div>
            </div>
          </div>
          <div className="flex min-w-fit flex-col gap-8">
            <h5 className="text-base">Följ oss</h5>
            <div className="flex flex-col gap-2">
              {socials.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  className="flex w-fit items-center gap-2 text-lg font-light hover:text-cyan-500 md:text-lg"
                >
                  <ArrowUpRight size={16} />
                  {social.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Link href="/" className="relative mt-12 block h-auto w-32 md:w-64">
          <Image
            quality={100}
            className="!relative fill-white text-background"
            fill
            alt="Logo"
            src="/logo_white.png"
          />
        </Link>
        <hr className="border-background/25" />
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <p className="text-xs font-semibold text-background/50">
            © {currentYear} {content.company.name}. All rights reserved.
          </p>
          <a
            href="https://www.appstract.se"
            target="_blank"
            className="text-xs font-semibold text-background/50 hover:underline"
          >
            Web design by Appstract
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
