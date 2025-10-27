import { content } from "@/data/content";

export interface DrawerLink {
  href: string;
  label: string;
  externalLink?: boolean;
  image?: string;
  sublinks?: DrawerLink[];
}

const mainLinks: DrawerLink[] = [
  { href: "/", label: "Hem" },
  // { href: "/projekt", label: "Projekt" },
  {
    href: "/vara-tjanster",
    label: "Våra tjänster",
  },
  { href: "/hyr-byggstallning", label: "Hyr byggställning" },
  { href: "/offertforfragan", label: "Offertförfrågan" },
  { href: "/rotavdrag", label: "Rotavdrag" },
  { href: "/om-oss", label: "Om oss" },
];

const serviceLinks = content.services.map((service) => ({
  href: `/vara-tjanster/${service.id}`,
  label: service.title,
  image: service.image,
}));

export { mainLinks, serviceLinks };
