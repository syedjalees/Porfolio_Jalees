"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

// define props types
type props = {
  openNav: () => void;
};
const Nav = ({ openNav }: props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
  return (
    <div
      className={`fixed ${
        navBg ? "bg-[#2d112f]" : "fixed"
      } h-[12vh] z-[10] w-full transition-all duration-200 `}
    >
      <div className="flex items-center h-full md:justify-between lg:justify-between  sm:w-[95%]   xl:w-[95%] mx-auto lg:mx-0 text-white font-extrabold ">
        {/* LOGO */}
        <Image
          src="/images/logo.svg"
          alt="LOGO"
          width={250}
          height={50}
          className="w-[300px] h:[400px] lg:h-[400px] lg:w-[400px] "
        />

        {/* NavLink */}
        <div className="flex items-center space-x-10  ">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navlink) => {
              return (
                <Link key={navlink.id} href={navlink.url}>
                  <p className="nav__link">{navlink.label}</p>
                </Link>
              );
            })}
          </div>

          {/* Button */}
          <div className="flex items-center space-x-4">
            <button
              className="hidden md:block md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white
                      hover:bg-gray-200 transition-all duration-200 rounded-lg "
            >
              <Link href={"/Contact"}>Hire Me</Link>
            </button>
            {/* options */}

            <div className=" block lg:hidden">
              <HiBars3BottomRight
                onClick={openNav}
                className="w-8 h-8 cursor-pointer text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
