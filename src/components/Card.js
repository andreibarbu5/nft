import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { GiTwoCoins } from "react-icons/gi";

const Card = ({ profile, bg, title }) => {
  return (
    <div className="relative bg-gray-800   rounded-[0.7rem]  overflow-hidden">
      {/* Background Image */}
      <div className="flex rounded-[0.7rem]  overflow-hidden   m-2  h-[16rem] sm:h-[13rem] md:h-[14rem] lg:h-[15rem]">
        <img
          src={bg}
          alt=""
          className="rounded-[0.7rem] w-full duration-200 ease-out   hover:scale-110 object-cover"
        />
      </div>
      {/* Description */}
      <div className="relative px-2">
        <img
          src={profile}
          alt=""
          className="w-20 h-20 sm:w-14 sm:h-14 rounded-full absolute right-6  sm:right-4 -top-14  sm:-top-9 p-1 bg-gray-800"
        />
        <p className="text-[32px] sm:text-[18px]">{title}</p>
        <p className="text-[19px] sm:text-[15px] text-white/40">
          by Devidas Bielskis
        </p>
        <div className="flex gap-2 border-b border-white/20 pb-3 mb-2">
          {/* Behance button */}
          <div className="flex items-center bg-gray-700/90 px-2 py-1 rounded-full  sm:w-[5.5rem] mt-2">
            <div className="w-4 h-4 bg-blue-500  mr-1 rounded-full shrink-0"></div>
            <button className="text-[15px] sm:text-[13px]">Behance</button>
          </div>
          {/* Likes button */}
          <div className="flex items-center bg-gray-700/90 px-2 py-1 rounded-full w-[6.5rem] sm:w-[5.5rem] mt-2 [b-4">
            <div className="w-4 h-4 bg-white  mr-1 rounded-full shrink-0 flex items-center justify-center">
              <AiFillHeart className="text-red-500 text-[13px]" />
            </div>
            <button className="text-[15px] sm:text-[12px] whitespace-nowrap">
              Your Likes
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between pt-3 pb-4">
          <div className="p-2 bg-gray-600/90 rounded-full text-[26px] sm:text-[16px]">
            <VscChromeClose />
          </div>
          <div className="flex items-center gap-2 bg-blue-600 rounded-full p-2 text-[17px] sm:text-[12px]  ">
            <GiTwoCoins />
            <p>Earn 10 coins</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
