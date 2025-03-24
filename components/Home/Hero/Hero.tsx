"use client";
import { BaseInfo } from "@/Data/data";
import React from "react";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import ProfileImage from "../image animation/profileImage";
import SocialMediaIcons from "../social_icons/Social";

const Hero = () => {
  return (
    <div className="w-full pt-[12.85vh]  sm:pt-[5vh] md:pt-[16vh] lg:pt-[19vh] h-full pb-5 sm:h-screen md:h-auto bg-[#0f0f15] overflow-hidden relative md:pb-5">
      <div className=" flex justify-center flex-col w-[90%] h-full mx-auto ">
        <div className=" grid grid-cols-1 lg:grid-cols-2 items-center gap-32 ">
          {/* Text Content  */}
          <div className="text-center md:text-center lg:text-left">
            {/* Sub heading */}
            <h1 className="text-3xl md:text-5xl lg:text-4xl mb-5 text-gray-300 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I`m
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-5xl mb-5 text-white font-extrabold">
              {BaseInfo.name}{" "}
            </h1>

            {/* Animated Name */}
            <h1
              className="text-3xl md:text-5xl lg:text-[4.5xl] mb-5 font-extrabold text-transparent bg-clip-text 
               bg-gradient-to-r from-[#ff6b6b] via-[#ffb400] to-[#47cf73] animate-gradient lg:w-[700px]"
            >
              <TypeAnimation
                sequence={BaseInfo.position.flatMap((pos) => [pos, 1000])}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>

            <ProfileImage />

            {/* Description */}
            <p className="hidden md:hidden lg:block  mt-6 text-sm md:text-base text-white text-opacity-70">
              {BaseInfo.description}
            </p>

            {/* Button */}
            <div className="mt-8">
              <button className="mx-auto md:mx-auto lg:mx-0 md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-full mt-8 bg-black border-2 border-[#D04DAD] hover:bg-[#D04DAD] flex items-center space-x-2">
                <span>
                  <Link
                    href="https://www.goodcv.com/cv/4e3abe704b5624c91eba65e707b32134"
                    target="blank"
                  >
                    Download CV
                  </Link>
                </span>
                <FaDownload />
              </button>
            </div>
            <SocialMediaIcons />
          </div>

          {/* Image content */}
          <div className="mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-[#2d112f] hover:border-white overflow-x-hidden ">
            <Image
              src={BaseInfo.profilePic}
              alt={BaseInfo.name}
              width={330}
              height={330}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
