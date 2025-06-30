import React from "react";

const Copyrights = () => {
  return (
    <div className="copyright py-20 max-md:flex-wrap flex md:justify-between justify-center border-t border-[#d7d7d7]">
            <p className="text-base leading-30 text-gary font-normal">
              Copyright © <span className="current-year"> 2024 </span>{" "}
              <span className="text-primary">
                <a href="https://dexignlab.com/"> Dexignlab.</a>
              </span>{" "}
              All Rights Reserved.
            </p>
            <ul className="flex gap-x-25">
              <li>
                <a
                  href="javascript:void(0);"
                  className="text-gary text-base font-Urbanist hover:text-primary duration-500"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  className="text-gary text-base font-Urbanist hover:text-primary duration-500"
                >
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
  );
};

export default Copyrights;
