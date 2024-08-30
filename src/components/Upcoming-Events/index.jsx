import React from "react";
import Carusel from "../Carusel";
import { upcomingEvents } from "@/constants/data";

const UpcomingEvents = () => {
  return (
    <div className="flex  w-full flex-col gap-[20px] ">
      <div className="flex justify-between  font-[600] text-title-dark">
        <h1 className="text-[28px]">Upcoming events</h1>
        <span className="text-[20px]">See all</span>
      </div>
      <div>
        <Carusel data={upcomingEvents} />
      </div>
    </div>
  );
};

export default UpcomingEvents;
