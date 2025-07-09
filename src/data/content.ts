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
    email: "info@adlerbygg.se",
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
      id: "badrum",
      title: "Badrumsrenovering",
      sellingPointTitle: "Ett badrum att trivas i – varje dag",
      sellingPointDesc:
        "Vi hjälper dig att skapa ett badrum som både är funktionellt och estetiskt tilltalande. Med fokus på våtrumssäkerhet och smart planering ser vi till att varje detalj sitter där den ska. Från rivning till färdigställande – vi tar ansvar för hela processen.",
      description:
        "Vi utför kompletta badrumsrenoveringar enligt branschstandard.",
      video: "/badrumsrenovering.mp4",
      image: "/adler-byggservice.png",
    },
    {
      id: "altan",
      title: "Altan & uteplats",
      sellingPointTitle: "Njut mer av sommaren med en altan du älskar",
      sellingPointDesc:
        "En välbyggd altan förlänger ditt hem ut i det fria och skapar en naturlig samlingsplats. Vi bygger altaner, trädäck och uterum som passar din stil, tomt och dina behov. Alltid med kvalitet och estetik i fokus.",
      description: "Vi bygger altaner, trädäck, pergolor och andra utemiljöer.",
      video: "/tradack-uteplats.mp4",
      image: "/adler-byggservice.png",
    },
    {
      id: "renovering",
      title: "Renovering",
      sellingPointTitle: "Ge ditt hem nytt liv med en trygg renovering",
      sellingPointDesc:
        "Drömmer du om ett nytt kök, ett fräscht badrum eller ett modernare vardagsrum? Vi hjälper dig att förverkliga dina idéer med noggrannhet, kvalitet och yrkesstolthet. Oavsett om det är en liten uppfräschning eller en omfattande totalrenovering ser vi till att resultatet blir hållbart och snyggt – precis som du vill ha det.",
      description: "Vi utför alla typer av renoveringar i hem och lokaler.",
      video: "/renovering.mp4",
      image: "/adler-byggservice.png",
    },
    {
      id: "tillbyggnad",
      title: "Tillbyggnad",
      sellingPointTitle: "Mer plats för livet – med en smart tillbyggnad",
      sellingPointDesc:
        "Behöver du mer utrymme för familjen, jobbet eller hobbyrummet? Vi hjälper dig att bygga ut huset på ett sätt som harmoniserar med den befintliga byggnaden. Med smarta lösningar och full kontroll över hela processen skapar vi den extra plats du behöver – utan krångel.",
      description:
        "Vi bygger till exempelvis uterum, extra våningar eller utbyggda vardagsrum.",
      video: "/tillbyggnad.mp4",
      image: "/adler-byggservice.png",
    },
    {
      id: "tak",
      title: "Takarbeten",
      sellingPointTitle: "Skydda ditt hem från topp till tå",
      sellingPointDesc:
        "Ett pålitligt tak är avgörande för husets hållbarhet. Vi hjälper dig med allt från ny takläggning till renovering och reparation, alltid med fokus på kvalitet och täthet. Låt oss ta hand om ditt tak – så kan du känna dig trygg, oavsett väder.",
      description: "Vi utför takläggning, omläggning och reparation av tak.",
      video: "/takrenovering.mp4",
      image: "/adler-byggservice.png",
    },
    {
      id: "nybyggnation",
      title: "Nybyggnation",
      sellingPointTitle: "Från idé till inflyttning – vi bygger ditt drömhem",
      sellingPointDesc:
        "Ska du bygga nytt? Vi hjälper dig hela vägen, från grund till färdig byggnad. Med lång erfarenhet och öga för detaljer skapar vi hållbara hus, attefallshus, garage eller fritidshus – allt anpassat efter dina behov och önskemål.",
      description:
        "Vi bygger nytt – från små attefallshus till större bostäder.",
      video: "/tradack-uteplats.mp4",
      image: "/adler-byggservice.png",
    },
    {
      id: "kok",
      title: "Köksmontering",
      sellingPointTitle: "Ditt drömkök – professionellt monterat",
      sellingPointDesc:
        "Köket är hemmets hjärta. Vi monterar kök från alla stora leverantörer och anpassar efter mått, funktion och estetik. Med precision och noggrannhet ser vi till att ditt nya kök fungerar och ser ut precis som du tänkt dig.",
      description:
        "Vi monterar och anpassar kök – både standard och speciallösningar.",
      video: "/tradack-uteplats.mp4",
      image: "/adler-byggservice.png",
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
