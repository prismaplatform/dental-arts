import Link from "next/link";
import React from "react";

const Copyrights = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="copyright py-20 flex flex-col md:flex-row md:justify-between justify-start border-t border-[#d7d7d7]">
      {/* Links section - felül mobilon */}
      <ul className="flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:gap-x-25 mb-40 md:mb-0 md:order-2">
        <li>
          <Link
            href="/terms"
            className="text-white text-base font-Urbanist hover:text-primary duration-500 text-left"
          >
            Felhasználási feltételek
          </Link>
        </li>
        <li>
          <Link
            href="/terms"
            className="text-white text-base font-Urbanist hover:text-primary duration-500 text-left"
          >
            Adatvédelmi irányelvek
          </Link>
        </li>
      </ul>
      
      {/* Copyright section - alul mobilon */}
      <div className="flex flex-col items-start md:order-1">
        <p className="text-white leading-30 text-gary font-normal mb-2 text-left">
          Copyright © {currentYear}. 
          <br></br>Minden jog fenntartva | <Link href="/" className="text-purple font-bold">Dental Arts</Link>
        </p>
        <p className="text-white leading-30 text-gary font-normal text-left">
          Készült és fejlesztve: <Link href="https://prismasolutions.ro" className="text-purple font-bold">Prisma Solutions</Link>
        </p>
      </div>
    </div>
  );
};

export default Copyrights;