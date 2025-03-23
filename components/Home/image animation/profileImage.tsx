"use client"; // Agar Next.js use kar rahe ho

import { BaseInfo } from "@/Data/data";
import { motion } from "framer-motion";
import Image from "next/image";

const ProfileImage = () => {
  return (
    <motion.div
      className="mx-auto mt-20 border-[5px] border-[#2d112f] overflow-hidden rounded-full aspect-square w-[300px] h-[300px] md:w-[400px] md:h-[400px] md:block lg:hidden"
      animate={{ y: [0, -40, 0] }} // Upar-Neechy Animation
      transition={{
        duration: 5, // Animation speed
        repeat: Infinity, // Endless loop
        ease: "easeInOut",
      }}
    >
      <Image
        src={BaseInfo.profilePic}
        alt={BaseInfo.name}
        width={450}
        height={450}
        className="rounded-full"
      />
    </motion.div>

  );
};

export default ProfileImage;
