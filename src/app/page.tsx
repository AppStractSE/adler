import { HiOutlinePhone } from "react-icons/hi";
import { IoMailOutline } from "react-icons/io5";

export default function Home() {
  return (
    <section className="relative flex w-full items-center bg-[url('/hero-header.png')] bg-cover bg-bottom px-4 md:min-h-[85vh] justify-center">
      <div className="relative mx-auto max-w-3xl flex-1 space-y-12 py-24">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-black md:text-5xl text-center">
            🚧 Sida under uppbyggnad 🚧
          </h1>

          <h5 className="text-lg font-medium md:w-full md:text-xl text-center">
            &quot;Vi har lösningen&quot; är mer än bara en slogan; det är vår garanti till dig!
          </h5>
          <h4 className="text-lg font-medium md:w-full text-center text-balance">
            Medan vår digitala plattform för närvarande genomgår en spännande förvandling, vill vi
            försäkra dig om att vårt åtagande att erbjuda toppklassiga el-tjänster är konstant.
          </h4>
          <div className="flex flex-col gap-2 mx-auto justify-center items-center">
            <div className="flex flex-col gap-2 mx-auto">
              <a
                href="tel:+46706069668"
                className="inline-flex w-fit items-center gap-2 hover:underline hover:underline-offset-4"
              >
                <HiOutlinePhone />
                070-606 96 68
              </a>
              <a
                href="mailto:info@tc-elservice.se"
                className="inline-flex w-fit items-center gap-2 hover:underline hover:underline-offset-4"
              >
                <IoMailOutline />
                info@tc-elservice.se
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
