import SectionHeading from "@/components/Helper/SectionHeading";
import { aboutInfo } from "@/Data/data";
import React from "react";
import { FaCheck, FaEllipsisH, FaSpinner } from "react-icons/fa";
import Image from "next/image";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>About Me </SectionHeading>
      <div className="w-[80%] mx-auto grid lg:grid-cols-2 gap-8 items-center mt-20 ">
        {/* Text Content */}
        <div>
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-gray-500 ">
            {aboutInfo.description}
          </p>
          <div className="mt-10 md:mt-20  sm:flex   ">
            <div className=" flex items-center space-x-2 mb-6 ">
              <div className=" w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white " />
              </div>
              <p className="text-xs sm:text-base md:text-lg font-bold  text-gray-300">
                Frontend Development
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-6 ">
              <div className="w-7 h-7 bg-orange-800 flex flex-col items-center justify-center">
                <FaSpinner className="text-white " />
              </div>
              <p className="text-xs sm:text-base md:text-lg font-bold text-gray-300">
                Backend Development
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-6 ">
              <div className="w-7 h-7 bg-green-800 flex flex-col items-center justify-center">
                <FaSpinner className="text-white " />
              </div>
              <p className="text-xs sm:text-base md:text-lg font-bold text-gray-300">
                Full Stack Development
              </p>
            </div>
          </div>
        </div>
        {/* Start Content */}
              <div className="grid grid-cols-2 gap-16 items-center  lg:mx-auto">
                  {/* 1st State */}
          <div>
            <Image
              src="/images/customer.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto "
                      />
                      <p className="mt-3 font-bold text-xl text-white text-center">{aboutInfo.client}</p>
                      <p className="text-base sm:text-lg text-gray-400 text-center">Satisfied Customer</p>
                  </div>
                  {/* 2nd State */}
                  <div>
            <Image
              src="/images/exp.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto "
                      />
                      <p className="mt-3 font-bold text-xl text-white text-center">{aboutInfo.experience}</p>
                      <p className="text-base sm:text-lg text-gray-400 text-center">Years Experience</p>
                  </div>
                  {/* 3rd State */}
                  <div>
            <Image
              src="/images/project.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto "
                      />
                      <p className="mt-3 font-bold text-xl text-white text-center">{aboutInfo.project}</p>
                      <p className="text-base sm:text-lg text-gray-400 text-center"> Completed Projects</p>
                  </div>
                  {/* 4th State */}
                  <div>
            <Image
              src="/images/rocket.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto "
                      />
                      <p className="mt-3 font-bold text-xl text-white text-center">{aboutInfo.webiste}</p>
                      <p className="text-base sm:text-lg text-gray-400 text-center">Website Launched</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
