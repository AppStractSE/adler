"use client";
import Range from "@/components/rotavdrag/Range";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const RotavdragSection = () => {
  const [numPersons, setNumPersons] = useState(1);
  const [workCost, setWorkCost] = useState(10000);
  const [materialCost, setMaterialCost] = useState(5000);

  const maxRotPerPerson = 50000;
  const rotPercentage = 0.3;
  const potentialRot = workCost * rotPercentage;
  const maxTotalRot = numPersons * maxRotPerPerson;
  const actualRot = Math.min(potentialRot, maxTotalRot);
  const discountedWorkCost = workCost - actualRot;
  const totalCost = discountedWorkCost + materialCost;
  const totalSavings = actualRot;

  return (
    <section>
      <div className="max-page-width flex flex-col gap-12 px-4 py-12 md:flex-row md:gap-16 md:py-24 lg:gap-32">
        <div className={twMerge("flex basis-8/12 flex-col gap-12 md:gap-24")}>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-medium tracking-wide sm:text-3xl md:text-4xl">
              Vad innebär ROT-avdraget?
            </h3>
            <p className="whitespace-pre-line text-base md:text-lg">
              Med ROT-avdraget kan du få upp till 50 000 kronor i
              skattereduktion per person och år. Det betyder att du endast
              behöver stå för 70% av arbetskostnaden när du anlitar oss för
              renoverings- och hantverkstjänster i ditt hem eller fritidshus.
              {"\n\n"}Tänk dig att du har en arbetskostnad på 100 000 kronor –
              då kan du sänka din skatt med hela 30 000 kronor per person och
              år. Hantverkstjänster är perfekta för ROT-avdraget, eftersom
              arbetskostnaderna ofta står för 85-90% av det totala priset,
              vilket gör att du kan utnyttja avdraget nästintill maximalt. Vill
              du veta exakt hur mycket du kan spara? Testa vår kalkylator här
              nedanför och få svaret direkt!
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
          <div className="flex flex-col gap-4 md:sticky md:top-24">
            <h3 className="text-2xl font-medium tracking-wide sm:text-3xl md:text-4xl">
              Resultat
            </h3>
            <p className="whitespace-pre-line text-base md:text-lg">
              Med {numPersons} {numPersons < 2 ? "person" : "personer"} som
              ansöker om ROT-avdrag och en arbetskostnad på{" "}
              {workCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} kr får
              du ett ROT-avdrag på{" "}
              {actualRot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} kr.
              Detta innebär att du endast betalar{" "}
              {discountedWorkCost
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
              kr i arbetskostnad.
              <br />
              <br />
              Totalt kommer du att betala{" "}
              {totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} kr
              för arbetskostnad och materialkostnad. Detta innebär att du sparar{" "}
              {totalSavings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} kr
              i skattereduktion.
            </p>
            <Link
              href="offertforfragan"
              className="mt-4 flex items-center justify-center rounded-full bg-cyan-900 px-6 py-2.5 text-base text-background transition-all duration-300 ease-in-out hover:bg-cyan-800"
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
