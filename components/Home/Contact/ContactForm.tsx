import React from "react";
import Link from "next/link";


const ContactForm = () => {
  return (
    <div className="bg-[#2d112f] rounded-lg p-4 sm:p-10  ">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        Let`s work together!
      </h1>
      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        Fill the details form and send your information to me , I will Respone
        you as soon as possible.
      </p>
      {/* Input Fields */}
      <form   
      action="https://formspree.io/f/xldjbdjr"
      method="POST" 
      className="mt-8 block w-full overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            name="firstname"
            type="text"
            placeholder="First name"
            
            className="flex-1 bg-black text-white
                   placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px]
                   border-gray-200 border-opacity-15 outline-none w-full"
                   required/>
          <input
            name="lastname"
            type="text"
            placeholder="Last name"
            className="flex-1 bg-black text-white
                   placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px]
                   border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <input
            name="email"
            type="email"
            placeholder="Email address"
            required
            className="flex-1 bg-black text-white
                   placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px]
                   border-gray-200 border-opacity-15 outline-none w-full"
          />

           

          <input
            name="phoneNumber"
            type="text"
            placeholder="Phone number"
            className="flex-1 bg-black text-white
                   placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px]
                   border-gray-200 border-opacity-15 outline-none w-full"
          />
        
        </div>
        <div>
          <select
          name="service"
          required
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600
          px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          defaultValue="">
            <option
              value=""
              disabled
              // defaultValue={"option"}
            >Select an Option</option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="fullstack">Fullstack Development</option>
          </select>
        </div>
        <input
            name="subject"
            type="text"
            placeholder="Subject"
            className="flex-1 mt-5 bg-black text-white
                   placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px]
                   border-gray-200 border-opacity-15 outline-none w-full"
          required/>
        <textarea
        name="message"
        className="w-full mt-5 bg-black text-white placeholder:text-gray-600
                  px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
        rows={7}
        placeholder="Message"
        required
        >

        </textarea>
        <div className="mt-4 flex justify-center">
          {/* <Link href="/Response"> */}
            <button
            type="submit"
              className=" px-8 py-3.5  text-white bg-black border-2 border-[#D04DAD] hover:bg-[#D04DAD]
                  transition-all duration-150 rounded-full"
            >
              Send Message
            </button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
