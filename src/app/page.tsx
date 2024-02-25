export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="relative flex w-full items-center px-4">
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="max-w-7xl relative mx-auto flex-1 space-y-12 py-24">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-white md:text-5xl">
              🚧 Oops, här var det mörkt! Men oroa dig inte... 🚧
            </h1>

            <h5 className="text-lg font-medium md:w-full md:text-xl">
              Välkommen till TC Elservice – där &quot;Vi har lösningen&quot; är
              mer än bara en slogan; det är vår garanti till dig!
            </h5>
            <h4>
              Medan vår digitala plattform för närvarande genomgår en spännande
              förvandling, vill vi försäkra dig om att vårt åtagande att erbjuda
              toppklassiga el-tjänster är konstant. Vi jobbar hårt, inte bara i
              elskåpen, för att snart kunna välkomna dig till en uppgraderad
              webbupplevelse.
            </h4>
          </div>
        </div>
      </section>
    </main>
  );
}
