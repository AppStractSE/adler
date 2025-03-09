import ContactForm from "@/components/forms/ContactForm";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const ContactSection = () => {
  return (
    <section>
      <div className="max-page-width flex flex-col justify-between gap-12 px-4 py-12 md:flex-row md:gap-24 md:py-24">
        <div className="flex basis-6/12 flex-col gap-4">
          <h3 className="text-3xl font-medium tracking-wide md:text-4xl lg:text-5xl">
            Vill du få en offert?
          </h3>
          <p className="whitespace-pre-line text-base md:text-lg">
            {`Vad roligt att du är intresserad av våra tjänster! Fyll i formuläret med dina uppgifter och en kort beskrivning av vad du behöver hjälp med. Vi går igenom din förfrågan så snart som möjligt och återkommer med en offert.\n\nNormalt återkopplar vi redan nästa arbetsdag. Vi ser fram emot att hjälpa dig!`}
          </p>
          <Image
            priority
            quality={100}
            src="/image009.webp"
            alt=""
            height={1080}
            width={1920}
            className={twMerge(
              "mt-4 aspect-[1.618/1] h-auto w-full max-w-full rounded-xl object-cover object-center",
            )}
          />
        </div>
        <div className="basis-4/12">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
