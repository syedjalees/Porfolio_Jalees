import Link from "next/link";
import React from "react";

const Response = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center w-screen h-[600px]">
      <h1 className="text-black font-semibold">Thanks!</h1>
      <br />
      <p className="text-black">
        Thanks for reaching out. I`ll get back to you soon.
      </p>
      <br />
      <Link href={"/"} className="text-red-600 text-lg">
        Go Back
      </Link>
    </div>
  );
};

export default Response;
