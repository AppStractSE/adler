import { hexToRgb } from "@/util/hexToRGB";

export const content = {
  theme: {
    primaryColor: "#1B1B1B",
    secondaryColor: "#353535",
    backgroundColor: "#fdfbf5",
    foregroundColor: "#171717",
    accentColor: "#22d3ee",
    maxPageWidth: "1320px",
  },

  applyTheme(theme: Record<string, string>) {
    const root = document.documentElement;

    Object.entries(theme).forEach(([key, value]) => {
      const cssVar = `--${key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)}`;
      if (value.startsWith("#")) value = hexToRgb(value);
      root.style.setProperty(cssVar, value);
    });
  },
  company: {
    name: "Adler Byggservice",
    email: "info@adlerbyggservice.se",
    phone: "+46 70-582 99 13",
    address: "Vallgatan, 532 37 Skara",
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
      id: "tak",
      title: "Takarbeten",
      sellingPointTitle: "Skydda ditt hem från topp till tå",
      sellingPointDesc:
        "Ett pålitligt tak är avgörande för husets hållbarhet. Vi hjälper dig med allt från ny takläggning till renovering och reparation, alltid med fokus på kvalitet och täthet. Låt oss ta hand om ditt tak – så kan du känna dig trygg, oavsett väder.",
      description: "Vi utför takbyten, omläggning och reparation av tak.",
      video: "/takrenovering.mp4",
      image: "/20210928_154706.jpg",
      image_alternative: "/20210928_154706.jpg",
    },
    {
      id: "kok",
      title: "Köksrenovering & montering",
      sellingPointTitle: "Ett kök som är både praktiskt och snyggt",
      sellingPointDesc:
        "Köket är hemmets hjärta. Vi hjälper dig med allt från renovering till montering av nya kök, alltid med fokus på funktion och design. Med oss får du ett kök du kan trivas i varje dag.",
      description:
        "Vi utför köksrenoveringar samt monterar kök från alla större leverantörer.",
      video: "/tradack-uteplats.mp4",
      image: "/20170228_095912.jpg",
      image_alternative: "/Tjänster-kök.jpg",
    },
    {
      id: "fonster",
      title: "Fönster & dörrar",
      sellingPointTitle: "Mer ljus, bättre energi – med nya fönster och dörrar",
      sellingPointDesc:
        "Vi byter fönster och dörrar på ett säkert och professionellt sätt. Med rätt lösningar förbättrar du både energiförbrukning, ljudmiljö och hemmets estetik.",
      description: "Vi utför fönster- och dörrbyten i alla typer av byggnader.",
      video: "/renovering.mp4",
      image: "/IMG_20201121_150556_329.jpg",
      image_alternative: "/Tjänster-fönster.jpg",
    },
    {
      id: "altan",
      title: "Altaner & uterum",
      sellingPointTitle: "Njut mer av sommaren med en altan eller ett uterum",
      sellingPointDesc:
        "En välbyggd altan eller ett uterum förlänger ditt hem ut i det fria och skapar en naturlig samlingsplats. Vi bygger altaner, trädäck och uterum anpassade efter din stil och tomt.",
      description: "Vi bygger altaner, uterum och andra utemiljöer.",
      video: "/tradack-uteplats.mp4",
      image: "/Tjänster-altan.jpg",
      image_alternative: "/Tjänster-altan.jpg",
    },
    {
      id: "renovering",
      title: "Renoveringar",
      sellingPointTitle: "Ge nytt liv åt ditt hem eller din fastighet",
      sellingPointDesc:
        "Oavsett om det gäller invändig eller utvändig renovering tar vi hand om hela processen – från planering till färdigt resultat. Vi renoverar bostäder, ladugårdar och mycket mer.",
      description:
        "Vi utför renoveringar både invändigt och utvändigt, inklusive ladugårdsrenoveringar.",
      video: "/renovering.mp4",
      image: "/20230705_114954.jpg",
      image_alternative: "/Tjänster-renoveringar.jpg",
    },
    {
      id: "special",
      title: "Specialarbeten",
      sellingPointTitle: "Unika lösningar för unika miljöer",
      sellingPointDesc:
        "Behöver du något utöver det vanliga? Vi bygger allt från gångbroar och fågeltorn till vindskydd, sittbänkar och ekoparksdetaljer. Hantverk med kvalitet och kreativitet.",
      description:
        "Vi utför specialarbeten som gångbroar, fågeltorn, hänvisningsskyltar, vindskydd, sittbänkar och fikabord i lärkträ.",
      video: "/tillbyggnad.mp4",
      image: "/20231221_130143.jpg",
      image_alternative: "/Tjänster-specialarbeten.jpg",
    },
  ],

  projects: [
    {
      id: "solceller-i-bollebygd",
      title: "Solceller i Bollebygd",
      subtitle:
        "Vi installerade solceller på ett tak i Bollebygd för att ge kunden en hållbar och ekonomiskt fördelaktig energilösning. Med solceller kan kunden producera sin egen el och minska sin klimatpåverkan, samtidigt som hen sparar pengar på elräkningen. En smart investering för både plånboken och miljön!",
      description: "",
      image: "/projekt/project002.webp",
    },
    {
      id: "plejd-i-duschrum",
      title: "Plejd i duschrum",
      subtitle:
        "Vi installerade Plejd i ett duschrum för att skapa en smart och energieffektiv belysning. Med hjälp av Plejds trådlösa teknik kan kunden nu styra belysningen med sin smartphone, oavsett var hen befinner sig. Det ger en bekväm och energisnål lösning som passar perfekt i ett modernt hem.",
      description: "",
      image: "/projekt/project003.webp",
    },
    {
      id: "elinstallation-koksrenovering",
      title: "Elinstallation vid köksrenovering",
      subtitle:
        "Vi utförde en elinstallation i samband med en köksrenovering för att skapa en modern och funktionell köksmiljö. Med nya eluttag, belysning och vitvaror fick kunden en säker och effektiv elanläggning som passar perfekt i det nya köket. En smidig och trygg lösning för en bättre vardag!",
      description: "",
      image: "/projekt/project001.webp",
    },
    {
      id: "solceller-i-bollebygd",
      title: "Solceller i Bollebygd",
      subtitle:
        "Vi installerade solceller på ett tak i Bollebygd för att ge kunden en hållbar och ekonomiskt fördelaktig energilösning. Med solceller kan kunden producera sin egen el och minska sin klimatpåverkan, samtidigt som hen sparar pengar på elräkningen. En smart investering för både plånboken och miljön!",
      description: "",
      image: "/projekt/project002.webp",
    },
    {
      id: "plejd-i-duschrum",
      title: "Plejd i duschrum",
      subtitle:
        "Vi installerade Plejd i ett duschrum för att skapa en smart och energieffektiv belysning. Med hjälp av Plejds trådlösa teknik kan kunden nu styra belysningen med sin smartphone, oavsett var hen befinner sig. Det ger en bekväm och energisnål lösning som passar perfekt i ett modernt hem.",
      description: "",
      image: "/projekt/project003.webp",
    },
    {
      id: "elinstallation-koksrenovering",
      title: "Elinstallation vid köksrenovering",
      subtitle:
        "Vi utförde en elinstallation i samband med en köksrenovering för att skapa en modern och funktionell köksmiljö. Med nya eluttag, belysning och vitvaror fick kunden en säker och effektiv elanläggning som passar perfekt i det nya köket. En smidig och trygg lösning för en bättre vardag!",
      description: "",
      image: "/projekt/project001.webp",
    },
    {
      id: "solceller-i-bollebygd",
      title: "Solceller i Bollebygd",
      subtitle:
        "Vi installerade solceller på ett tak i Bollebygd för att ge kunden en hållbar och ekonomiskt fördelaktig energilösning. Med solceller kan kunden producera sin egen el och minska sin klimatpåverkan, samtidigt som hen sparar pengar på elräkningen. En smart investering för både plånboken och miljön!",
      description: "",
      image: "/projekt/project002.webp",
    },
    {
      id: "plejd-i-duschrum",
      title: "Plejd i duschrum",
      subtitle:
        "Vi installerade Plejd i ett duschrum för att skapa en smart och energieffektiv belysning. Med hjälp av Plejds trådlösa teknik kan kunden nu styra belysningen med sin smartphone, oavsett var hen befinner sig. Det ger en bekväm och energisnål lösning som passar perfekt i ett modernt hem.",
      description: "",
      image: "/projekt/project003.webp",
    },
    {
      id: "elinstallation-koksrenovering",
      title: "Elinstallation vid köksrenovering",
      subtitle:
        "Vi utförde en elinstallation i samband med en köksrenovering för att skapa en modern och funktionell köksmiljö. Med nya eluttag, belysning och vitvaror fick kunden en säker och effektiv elanläggning som passar perfekt i det nya köket. En smidig och trygg lösning för en bättre vardag!",
      description: "",
      image: "/projekt/project001.webp",
    },
  ],
};
