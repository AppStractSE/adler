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
      sellingPointTitle: "Få tid över till livets viktiga stunder",
      sellingPointDesc:
        "Låt oss ta hand om dina elbehov så att du kan fokusera på det som verkligen betyder något. Med vår professionella service och många års erfarenhet löser vi allt från installation till reparation – snabbt, tryggt och med omsorg. Tänk dig att komma hem till en fungerande och säker elanläggning, utan att behöva lyfta ett finger.",
      description: "Vi utför service och reparationer av elanläggningar.",
      image: "/image008.webp",
    },
    {
      id: "elinstallation",
      title: "El- & styrinstallation",
      sellingPointTitle: "Skräddarsydda elinstallationer för ditt unika behov",
      sellingPointDesc:
        "Varje hem och företag är unikt – och det är våra installationer också. Oavsett om det är ett litet servicejobb eller ett stort entreprenadprojekt, anpassar vi våra el- och styrinstallationer efter dina specifika önskemål. Med fokus på säkerhet och precision ser vi till att din elanläggning är både trygg och effektiv.",
      description:
        "Vi utför alla typer av elinstallationer, från mindre servicejobb till större entreprenader.",
      image: "/image003.webp",
    },
    {
      id: "laddbox",
      title: "Laddbox",
      sellingPointTitle: "Enklare och grönare vardag med elbilsladdning",
      sellingPointDesc:
        "Tänk dig att alltid ha din elbil redo när du behöver den – oavsett om det är för morgonens pendling, dagens möten eller hemfärden efter en lång arbetsdag. Med våra professionella laddboxinstallationer gör vi det enkelt och bekvämt att ladda din elbil, oavsett om det är hemma, på kontoret eller på företagets parkering.\n\nVi tar hand om allt – från val av laddbox till säker installation – så att du kan köra hållbart och bekymmersfritt. Låt oss hjälpa dig att göra din elbilsladdning smidig och pålitlig, var du än behöver den!",
      description:
        "Vi installerar laddboxar för elbilar, både för privatpersoner och företag.",
      image: "/image004.webp",
    },
    {
      id: "nybyggnation",
      title: "Nybyggnation",
      sellingPointTitle: "Från vision till verklighet – med trygg elanläggning",
      sellingPointDesc:
        "När du bygger nytt är det viktigt att elanläggningen är säker, hållbar och anpassad efter dina behov. Vi är med dig hela vägen, från noggrann planering till färdig installation. Med vår expertis kan du känna dig trygg i att din nya elanläggning är både funktionell och framtidssäkrad – precis som du drömmer om.",
      description:
        "Få hjälp med allt från planering till färdig installation, så att du får en trygg och funktionell elanläggning som uppfyller dina behov.",
      image: "/image005.webp",
    },
    {
      id: "belysning",
      title: "Belysning",
      sellingPointTitle: "Skapa den perfekta stämningen med rätt belysning",
      sellingPointDesc:
        "Belysning är mer än bara ljus – det är känslan i ett rum. Oavsett om det är för hemmet eller arbetsplatsen, hjälper vi dig att skapa en trivsam och energieffektiv miljö. Från installation till reparation ser vi till att din belysning är precis som du vill ha den, så att du kan njuta av en ljusare och mer inspirerande vardag.",
      description:
        "Vi hjälper dig med allt inom belysning, från installation till reparation.",
      image: "/image007.webp",
    },
    {
      id: "natverksinstallation",
      title: "Nätverk- & datainstallation",
      sellingPointTitle: "Stabil uppkoppling för en smidigare vardag",
      sellingPointDesc:
        "I en värld där uppkoppling är allt, ser vi till att ditt hem eller företag har en snabb och säker nätverkslösning. Vi installerar och konfigurerar din nätverksutrustning med precision, så att du aldrig behöver oroa dig för avbrott eller säkerhetsrisker. Låt oss hålla dig uppkopplad – tryggt och bekymmersfritt.",
      description:
        "Vi installerar och konfigurerar nätverksutrustning för att säkerställa en stabil och snabb uppkoppling i ditt hem eller företag.",
      image: "/image006.webp",
    },
  ],
};
