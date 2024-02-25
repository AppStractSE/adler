import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import { footerData } from "./data";

const Footer = () => {
  return (
    <footer className="w-full px-4 text-white border-t shadow-md shadow-t bg-vanilla-powder-500">
      <div className="py-12 mx-auto max-w-7xl">
        <div className="flex justify-between">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-6">
            {footerData.map((link) => (
              <div key={link.label}>
                <h2 className="mb-6 text-xl font-semibold">{link.label}</h2>
                <ul className="space-y-2">
                  {link.links.map((link) => (
                    <li key={link.label} className="text-base md:text-lg">
                      {link.internal ? (
                        <Link
                          href={link.href}
                          className="hover:underline hover:underline-offset-4"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          target="_blank"
                          className="flex items-center gap-1 hover:underline hover:underline-offset-4"
                        >
                          {link.label}
                          {link.icon ? (
                            <small>
                              <HiOutlineExternalLink />
                            </small>
                          ) : (
                            <></>
                          )}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="space-y-8">
            <Link href="/">
              TC Elservice
              {/* <img
                src="/popeye.png"
                alt="TC Elservice"
                className="w-40 h-auto"
              /> */}
            </Link>
          </div>
        </div>

        <div className="my-6 h-[1px] w-full bg-black opacity-25 sm:mx-auto lg:my-8" />
        <div className="flex items-center justify-between">
          <a
            href="https://appstract.se/"
            target="_blank"
            className="flex items-center gap-1 text-xs text-white opacity-50 w-fit hover:underline sm:text-center"
          >
            Webbdesign av appstract © 2024
          </a>
          <Link
            href="/integritetspolicy"
            className="text-sm hover:underline hover:underline-offset-4"
          >
            Integritetspolicy
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
