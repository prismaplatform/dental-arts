import Link from "next/link";
import React from "react";

const Copyrights = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="copyright py-20 max-md:flex-wrap flex md:justify-between justify-center border-t border-[#d7d7d7]">
      <div className="flex flex-col items-center md:items-start"> {/* Added a div for stacking and aligned text */}
        <p className="text-base leading-30 text-gary font-normal mb-2 md:mb-0"> {/* Added margin-bottom for spacing */}
          Copyright © {currentYear}. Minden jog fenntartva | <Link href="/" className="text-primary font-bold">Dental Arts</Link>
        </p>
        <p className="text-base leading-30 text-gary font-normal">
          Készült és fejlesztve: <Link href="https://prismasolutions.ro" className="text-primary font-bold">Prisma Solutions</Link>
        </p>
      </div>
      <ul className="flex gap-x-25 mt-4 md:mt-0"> {/* Added margin-top for spacing on smaller screens */}
        <li>
          <Link
            href="/terms"
            className="text-gary text-base font-Urbanist hover:text-primary duration-500"
          >
            Felhasználási feltételek {/* Translated text */}
          </Link>
        </li>
        <li>
          <Link
            href="/terms"
            className="text-gary text-base font-Urbanist hover:text-primary duration-500"
          >
            Adatvédelmi irányelvek {/* Translated text */}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Copyrights;