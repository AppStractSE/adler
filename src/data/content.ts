import { hexToRgb } from "@/util/hexToRGB";

export const content = {
  theme: {
    primaryColor: "#1B1B1B",
    secondaryColor: "#353535",
    backgroundColor: "#fdfbf5",
    foregroundColor: "#171717",
    accentColor: "#2EB800",
    maxPageWidth: "1320px",
  },

  applyTheme(theme: Record<string, string>) {
    const root = document.documentElement;

    Object.entries(theme).forEach(([key, value]) => {
      const cssVar = `--${key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)}`;
      console.log("asd", cssVar);
      if (value.startsWith("#")) value = hexToRgb(value);
      root.style.setProperty(cssVar, value);
    });
  },
  company: {
    name: "TC Elservice",
    email: "info@tc-elservice.se",
    phone: "+46 70-606 96 68",
    address: "Menuettvägen 2, 711 35 Lindesberg",
  },
  followUs: "Följ oss",
  homePage: {
    title: "Förverkliga din sanna potential",
    subtitle: "Vad behöver du hjälp med?",
    description:
      "Upplev hälsa och välbefinnande med oss - anpassat för dig. Få personlig vägledning och smakrika recept för dina hälsomål, oavsett din träningsnivå. Kom igång idag genom att fylla i formuläret nedan!",
    button: "Get started",
  },
  contactSection: {
    title: "Kom i kontakt med oss",
    description: "Få en offert idag.",
    contact: "Kontaktuppgifter",
    contactFormTitle: "Fyll i formuläret så återkommer vi så fort vi kan!",
  },
  services: [
    {
      id: "service",
      title: "Service",
      description: "Vi utför service och reparationer av elanläggningar.",
      image: "/image008.webp",
    },
    {
      id: "elinstallation",
      title: "El- & styrinstallation",
      description:
        "Vi utför alla typer av elinstallationer, från mindre servicejobb till större entreprenader.",
      image: "/image003.webp",
    },
    {
      id: "laddbox",
      title: "Laddbox",
      description:
        "Vi installerar laddboxar för elbilar, både för privatpersoner och företag.",
      image: "/image004.webp",
    },
    {
      id: "nybyggnation",
      title: "Nybyggnation",
      description:
        "Få hjälp med allt från planering till färdig installation, så att du får en trygg och funktionell elanläggning som uppfyller dina behov.",
      image: "/image005.webp",
    },
    {
      id: "belysning",
      title: "Belysning",
      description:
        "Vi hjälper dig med allt inom belysning, från installation till reparation.",
      image: "/image007.webp",
    },
    {
      id: "natverksinstallation",
      title: "Nätverk- & datainstallation",
      description:
        "Vi installerar och konfigurerar nätverksutrustning för att säkerställa en stabil och snabb uppkoppling i ditt hem eller företag.",
      image: "/image006.webp",
    },
  ],
};
