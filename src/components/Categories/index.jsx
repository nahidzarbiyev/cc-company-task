import { categories } from "@/constants/data";
import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <div className={"flex justify-between"}>
      {categories.map((el, i) => (
        <div key={i} className="flex flex-col gap-2">
          <div
            className={
              "w-[190px] border border-caption-gray h-[190px] rounded-full flex items-center justify-center"
            }
          >
            <Image src={el.imgURL} width={50} height={50} alt={"icon"} />
          </div>
          <p className="text-title-dark font-[500] text-2xl text-center hover:underline decoration-caption-gray">
            {el.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
