import React from "react";
import Cover from "../../../public/assets/images/cover-image.png";
import Image from "next/image";
import Button from "../Button";
const Header = () => {
  return (
    <div className="bg-coverImage bg-cover h-[691px] flex items-end p-[100px] text-primary-white">
      <div className="max-w-[727px] flex flex-col gap-8 ">
        <div>
          <h1 className="text-[40px] uppercase font-bold ">
            Enjoy your city to the fullest
          </h1>
          <p className="text-xl font-light tracking-wide">
            Find events that match your interests and book your tickets
            effortlessly. From theater shows to sports events, we have it all!
          </p>
        </div>
        <Button classNames={"w-[180px] h-[46px]"}>Find events</Button>
      </div>
    </div>
  );
};

export default Header;
