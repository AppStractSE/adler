import { content } from "@/data/content";
import { socials } from "@/data/socials";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerlinks = [
    // { name: "Tidigare projekt", href: "/projekt" },
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
            <div className="flex flex-col gap-2">
              <Link
                className="whitespace-pre-line text-lg font-light hover:text-cyan-500 md:text-lg"
                href="https://www.google.com/maps/place/Menuettv%C3%A4gen+2,+711+35+Lindesberg/@59.6101962,15.2085963,17z/data=!3m1!4b1!4m6!3m5!1s0x465c4c00a46db49d:0xf74edb0b14e827de!8m2!3d59.6101935!4d15.2111712!16s%2Fg%2F11c4ymwmlq?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                {`Menuettvägen 2\n711 35 Lindesberg`}
              </Link>
              <Link
                className="text-lg font-light hover:text-cyan-500 md:text-lg"
                href={`tel:${content.company.phone}`}
              >
                {content.company.phone}
              </Link>
              <Link
                className="text-lg font-light hover:text-cyan-500 md:text-lg"
                href={`mailto:${content.company.email}`}
              >
                {content.company.email}
              </Link>
            </div>
          </div>
          <div className="flex min-w-fit flex-col gap-8">
            <h5 className="text-base">Följ oss</h5>
            <div className="flex flex-col gap-2">
              {socials.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
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
            priority
            quality={100}
            className="!relative fill-white text-background"
            fill
            alt="Logo"
            src="/logo_white.png"
          />
        </Link>
        <hr className="border-background/25" />
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <p className="text-xs font-medium text-background/50">
            © {currentYear} {content.company.name}. All rights reserved.
          </p>
          <a
            href="https://www.appstract.se"
            target="_blank"
            className="text-xs font-medium text-background/50 hover:underline"
          >
            Web design by Appstract
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
