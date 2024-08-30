import { destinations } from "@/constants/data";
import Image from "next/image";
import React from "react";

const PopularDestionations = () => {
  return (
    <div>
      <h1 className="text-[28px] font-semibold mb-4">Popular destinations</h1>
      <div className="flex justify-between">
        {destinations.map((el, i) => (
          <div key={i}>
            <div className="size-[295px] rounded-full overflow-hidden object-cover  relative">
              <Image
                src={el.imgURL}
                width={295}
                height={295}
                alt="destinations"
                className=" absolute "
              />
            </div>
            <p className="text-2xl font-[500] text-center mt-4">{el.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestionations;
