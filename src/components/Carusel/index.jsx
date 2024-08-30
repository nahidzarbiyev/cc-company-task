import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Card from "../Card";
const Carusel = ({ data, popular }) => {
  return (
    <Carousel className="w-full flex items-center justify-center   ">
      <CarouselContent className="  min-h-[500px] ">
        {data.map((el, i) => (
          <CarouselItem key={i} className="basis-1/4  ">
            <Card
              key={i}
              img={el.imgURL}
              title={el.title}
              tickets={el.tickets}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext popular={popular} />
    </Carousel>
  );
};

export default Carusel;
