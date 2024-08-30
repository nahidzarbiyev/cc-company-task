import Image from "next/image";
import React from "react";
import Letter from "../../../public/assets/icons/letter.svg";
const Footer = () => {
  return (
    <div className="bg-title-dark py-[30px] px-[100px] max-w-[1440px] mx-auto flex flex-col gap-24">
      <div className="flex justify-between">
        <div></div>

        <ul className="flex gap-8 text-primary-white">
          <li>Events</li>
          <li>About us</li>
          <li>Contact us</li>
          <li className="text-caption-gray">Sign in</li>
        </ul>
      </div>
      <div className="flex justify-between">
        <div className="logo text-2xl font-semibold text-[#fff]">
          EVENTSLINK
        </div>
        <div className="flex gap-2 text-primary-white items-center">
          <Image src={Letter} alt="letter" width={24} height={24} />
          eventslink@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
