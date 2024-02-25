interface FooterLinkPartial {
  label: string;
  href: string;
  internal?: boolean;
  icon?: boolean;
}

interface FooterLink {
  label: string;
  links: FooterLinkPartial[];
}

export const footerData: FooterLink[] = [
  // {
  // label: "Länkar",
  // links: [
  // {
  //   label: "Träna",
  //   href: "/trana",
  //   internal: true,
  // },
  // {
  //   label: "Prislista",
  //   href: "/prislista",
  //   internal: true,
  // },
  // {
  //   label: "Vårt gym",
  //   href: "/vart-gym",
  //   internal: true,
  // },
  // {
  //   label: "100% Ren Hårdträning",
  //   href: "https://www.renhardtraning.com/",
  //   internal: false,
  //   icon: true,
  // },
  // ],
  // },
  {
    label: "Här finns vi",
    links: [
      {
        label: "Menuettvägen 2, 711 35 Lindesberg",
        href: "https://www.google.se/maps/place/Menuettv%C3%A4gen+2,+711+35+Lindesberg/@59.6101975,15.2086643,17z/data=!3m1!4b1!4m6!3m5!1s0x465c4c00a46db49d:0xf74edb0b14e827de!8m2!3d59.6101975!4d15.2112392!16s%2Fg%2F11c4ymwmlq?entry=ttu",
        internal: false,
        icon: true,
      },
      {
        label: "070-606 96 68",
        href: "tel:+46706069668",
      },
      {
        label: "info@tc-elservice.se",
        href: "mailto:info@tc-elservice.se",
      },
    ],
  },
];
