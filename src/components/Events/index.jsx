import React from "react";
import Categories from "../Categories";
import PopularEvents from "../PopularEvents";
import UpcomingEvents from "../Upcoming-Events";
import PopularDestionations from "../Destionations";
import Join from "../Join-Eventslink";

const Events = () => {
  return (
    <div className={"w-full bg-primary-white p-[100px]"}>
      <Categories />
      <PopularEvents />
      <UpcomingEvents />
      <PopularDestionations />
      <Join />
    </div>
  );
};

export default Events;
