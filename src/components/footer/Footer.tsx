import { content } from "@/data/content";
import { socials } from "@/data/socials";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerlinks = [
    // { name: "Tidigare projekt", href: "/projekt" },
    { name: "Om Adler Byggservice", href: "/om-oss" },
    { name: "Våra tjänster", href: "/vara-tjanster" },
    { name: "Räkna ut rotavdrag", href: "/rotavdrag" },
    { name: "Offertförfrågan", href: "/offertforfragan" },
  ];
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary text-background">
      <div className="max-page-width flex flex-col gap-8 px-4 pb-8 pt-32 md:gap-16">
        <div className="flex flex-wrap items-start gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <Link href="/" className="relative block h-auto w-32 md:w-64">
              <Image
                priority
                quality={100}
                className="!relative fill-white text-background"
                fill
                alt="Logo"
                src="/logo.svg"
              />
            </Link>
            <h4 className="text-base italic">
              Er lokala byggpartner i Skaraborg
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                className="text-lg font-light opacity-75 hover:opacity-100 md:text-lg"
                href={`tel:${content.company.phone}`}
              >
                {content.company.phone}
              </Link>
              <Link
                className="text-lg font-light opacity-75 hover:opacity-100 md:text-lg"
                href={`mailto:${content.company.email}`}
              >
                {content.company.email}
              </Link>
            </div>
          </div>
          <div className="flex min-w-fit flex-col gap-8">
            <h5 className="text-base">Snabblänkar</h5>
            <div className="flex flex-col gap-4">
              {footerlinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex w-fit items-center gap-2 text-lg font-light opacity-75 hover:opacity-100 md:text-2xl"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex min-w-fit flex-col gap-8">
            <h5 className="text-base">Tjänster</h5>
            <div className="flex flex-col gap-4">
              {content.services.map((link) => (
                <Link
                  key={link.id}
                  href={`vara-tjanster/${link.id}`}
                  className="flex w-fit items-center gap-2 text-lg font-light opacity-75 hover:opacity-100 md:text-2xl"
                >
                  {link.title}
                </Link>
              ))}
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
                  className="flex w-fit items-center gap-2 text-lg font-light opacity-75 hover:opacity-100 md:text-2xl"
                >
                  <ArrowUpRight size={24} />
                  {social.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
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
