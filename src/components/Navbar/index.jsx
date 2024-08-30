import Image from "next/image";
import React from "react";
import User from "../../../public/assets/icons/user.svg";
import Down from "../../../public/assets/icons/down-icon.svg";
import Search from "../../../public/assets/icons/magnifying-glass.svg";
import Basket from "../../../public/assets/icons/basket.svg";
const HomeNavbar = () => {
  return (
    <div className="bg-title-dark py-[17px] px-[100px] flex items-center justify-between max-w-[1440px] mx-auto">
      <div className=" flex items-center gap-9">
        <div className="logo text-2xl font-semibold text-[#fff]">
          EVENTS<span className="text-primary-500">LINK</span>
        </div>
        <ul className="flex items-center justify-center text-primary-white gap-8 font-light text-xl ">
          <li className="hover:border-b-2 cursor-pointer  px-2 hover:border-primary-500">
            Events
          </li>
          <li className="hover:border-b-2 cursor-pointer  px-2 hover:border-primary-500">
            About us
          </li>
          <li className="hover:border-b-2 cursor-pointer px-2 hover:border-primary-500">
            Contact us
          </li>
        </ul>
      </div>
      <div className="user flex items-center gap-[60px]">
        <div className="language flex items-center text-primary-white gap-1 text-xl">
          EN <Image src={Down} alt="down" width={10} height={6} />{" "}
        </div>
        <div className="icons flex gap-6">
          <Image src={User} alt="down" width={24} height={24} />
          <Image src={Search} alt="down" width={24} height={24} />
          <Image src={Basket} alt="down" width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
