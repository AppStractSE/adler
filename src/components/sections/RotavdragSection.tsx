"use client";
import Range from "@/components/rotavdrag/Range";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const RotavdragSection = () => {
  const [numPersons, setNumPersons] = useState(1);
  const [workCost, setWorkCost] = useState(100000);
  const [materialCost, setMaterialCost] = useState(50000);

  const maxRotPerPerson = 50000;
  const rotPercentage = 0.3;
  const potentialRot = workCost * rotPercentage;
  const maxTotalRot = numPersons * maxRotPerPerson;
  const actualRot = Math.min(potentialRot, maxTotalRot);
  const discountedWorkCost = workCost - actualRot;
  const totalCost = discountedWorkCost + materialCost;
  const totalSavings = actualRot;

  const formatCurrency = (value: string | number) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <section>
      <div className="max-page-width flex flex-col gap-12 px-4 py-12 md:flex-row md:gap-16 md:py-24 lg:gap-32">
        <div className={twMerge("flex basis-8/12 flex-col gap-12 md:gap-24")}>
          <div className="flex flex-col gap-6 md:gap-8">
            <h3 className="text-3xl font-medium tracking-wide md:text-4xl lg:text-5xl">
              Vad innebär ROT-avdraget?
            </h3>
            <p className="whitespace-pre-line text-base md:text-lg">
              {`Med ROT-avdraget kan du få upp till 50 000 kronor i skattereduktion per person och år. Det innebär att du endast behöver betala 70% av arbetskostnaden när du anlitar någon för renoverings- och hantverkstjänster i ditt hem eller fritidshus. \n\nOm du exempelvis har en arbetskostnad på 100 000 kronor kan du få en skattereduktion på 30 000 kronor, vilket sänker din faktiska kostnad till 70 000 kronor. Är ni flera personer i hushållet kan ni tillsammans utnyttja era individuella ROT-avdrag, men den totala skattereduktionen kan aldrig överstiga 30% av arbetskostnaden.\n\nVill du veta exakt hur mycket du kan spara? Testa vår ROT-kalkylator här nedanför och få svaret direkt!`}
            </p>
          </div>
          <div className="flex flex-col gap-12 md:gap-16">
            <Range
              title="Personer"
              description="Antal personer som ansöker om ROT-avdraget."
              suffix="st"
              value={numPersons}
              setValue={(value) => setNumPersons(value === 0 ? 1 : value)}
              min={0}
              max={2}
              step={1}
            />
            <Range
              title="Arbetskostnad"
              description="Avdraget baseras på arbetskostnaden."
              suffix="kr"
              value={workCost}
              setValue={setWorkCost}
              min={1000}
              max={500000}
              step={100}
            />
            <Range
              title="Materialkostnad"
              description="Kostnaden för material som används. Här går det inte att få avdrag."
              suffix="kr"
              value={materialCost}
              setValue={setMaterialCost}
              min={0}
              max={500000}
              step={100}
            />
          </div>
        </div>
        <div className="w-full basis-4/12 md:relative">
          <div className="flex flex-col gap-6 md:sticky md:top-24 md:gap-8">
            <h3 className="text-3xl font-medium tracking-wide md:text-4xl lg:text-5xl">
              Resultat
            </h3>
            <p className="whitespace-pre-line text-base md:text-lg">
              Med {numPersons} {numPersons < 2 ? "person" : "personer"} som
              ansöker om ROT-avdrag och en arbetskostnad på{" "}
              {formatCurrency(workCost)} kr får du ett ROT-avdrag på{" "}
              {formatCurrency(actualRot)} kr. Detta innebär att du endast
              betalar {formatCurrency(discountedWorkCost)} kr i arbetskostnad.
              Materialkostnad på {formatCurrency(materialCost)} kr tillkommer.
              <br />
              <br />
              <strong>
                Totalt kommer du att betala {formatCurrency(totalCost)} kr för
                arbetskostnad och materialkostnad. Detta innebär att du sparar{" "}
                {formatCurrency(totalSavings)} kr i skattereduktion.
              </strong>
            </p>
            <Link
              href="offertforfragan"
              className="mt-4 flex items-center justify-center rounded-sm bg-orange-900 px-6 py-2.5 text-base text-background transition-all duration-300 ease-in-out hover:bg-orange-800"
            >
              Begär offert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RotavdragSection;
