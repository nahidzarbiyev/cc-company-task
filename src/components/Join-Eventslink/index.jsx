import React from "react";
import Button from "../Button";
import Image from "next/image";
import JoinImg from "../../../public/assets/images/joineventslist.png";
const Join = () => {
  return (
    <div className="w-full p-[60px] rounded-[20px] mt-48 bg-primary-50 flex justify-between ">
      <div className="w-[50%]">
        <h2 className="text-[32px] font-bold">Join Eventslink</h2>
        <p className="text-xl font-[400] mb-2">
          People use Eventslink to meet new people, learn new things, find
          support, get out of their comfort zones, and pursue their passions,
          together. Membership is free.
        </p>
        <Button classNames={"w-[140px] h-[46px]"}>Sign up</Button>
      </div>
      <div className="w-[40%] flex items-center justify-center ">
        <Image src={JoinImg} width={223} height={229} alt="joineventslink" />
      </div>
    </div>
  );
};

export default Join;
