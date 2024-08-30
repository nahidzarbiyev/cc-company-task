import Image from "next/image";
import React from "react";
import HeartIcon from "../../../public/assets/icons/Union.svg";
import Calendar from "../../../public/assets/icons/calendar.svg";
import GoalIcon from "../../../public/assets/icons/goal-icon.svg";
import Ticket from "../../../public/assets/icons/ticket.svg";
const Card = ({ img, title, tickets }) => {
  return (
    <div
      className={
        "h-[391px] hover:rounded-[8px] hover:shadow-lg transition-all hover:shadow-caption-gray "
      }
    >
      <div className="relative">
        <Image
          src={img}
          alt={"carusel"}
          width={295}
          height={219}
          className="rounded-t-[8px]"
        />
        <div className="absolute top-4 right-4 w-[44px] h-[44px] bg-body-gray rounded-full flex items-center justify-center">
          <Image src={HeartIcon} alt={"like"} width={24} height={24} />
        </div>
      </div>
      <div className="p-2 flex flex-col gap-[6px] ">
        {" "}
        <h2 className="text-2xl font-[600] hover:underline decoration-caption-gray">
          {title}
        </h2>
        <div className="text-caption-gray flex gap-2 items-center">
          <Image src={Calendar} alt={"like"} width={18} height={18} />{" "}
          <span className="text-base"> MON, JUL 21 ・ 4:00 PM </span>
        </div>
        <div className="text-caption-gray flex gap-2 items-center">
          <Image src={GoalIcon} alt={"like"} width={18} height={18} />{" "}
          <span className="text-base"> 18 going </span>
        </div>
        <div className="text-caption-gray flex gap-2 items-center">
          <Image src={Ticket} alt={"like"} width={26} height={18} />{" "}
          <span className="text-xl text-primary-500 font-bold">
            {" "}
            ${tickets}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
