import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ScaffoldingFAQSection = () => {
  const QuestionsAndAnswers = [
    {
      question: "Vilka byggställningar kan jag hyra hos er?",
      answer:
        "Vi erbjuder ett brett utbud av byggställningar för olika behov och projekt.",
    },
    {
      question: "Är era byggställningar godkända och säkra?",
      answer:
        "Ja, alla våra byggställningar är godkända och uppfyller gällande säkerhetsstandarder.",
    },
    {
      question: "Kan ni hjälpa till med montering och demontering?",
      answer:
        "Ja, vi erbjuder hjälp med både montering och demontering av byggställningar.",
    },
    {
      question: "Hur lång tid kan jag hyra en byggställning?",
      answer:
        "Du kan hyra en byggställning under den tid som passar ditt projekt.",
    },
    {
      question: "Hur går jag tillväga för att hyra en byggställning?",
      answer: "Fyll i formuläret så kontaktar vi dig.",
    },
  ];
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      {QuestionsAndAnswers.map((qa, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger className="text-xl font-normal">
            {qa.question}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p className="text-base">{qa.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ScaffoldingFAQSection;
