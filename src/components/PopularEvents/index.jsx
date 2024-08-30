import React from "react";
import Carusel from "../Carusel";
import { cardsData } from "@/constants/data";

const PopularEvents = () => {
  return (
    <div className="flex mt-28  w-full flex-col gap-[20px] ">
      <div className="flex justify-between  font-[700] text-title-dark">
        <h1 className="text-[28px]">Popular events near you</h1>
        <span className="text-[20px]">See all</span>
      </div>
      <div>
        <Carusel data={cardsData} popular={true} />
      </div>
    </div>
  );
};

export default PopularEvents;
