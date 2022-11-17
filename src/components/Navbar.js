import React from "react";
import logo from "../assets/logo.png";
import { HiPlus } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import { GiTwoCoins } from "react-icons/gi";
import { AiFillAppstore } from "react-icons/ai";
import { TbBuildingStore } from "react-icons/tb";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import NavBtn from "./NavBtn";
const Navbar = () => {
  const navbuttons = [
    { name: "Explore", icon: <AiFillAppstore /> },
    { name: "Store", icon: <TbBuildingStore /> },
    { name: "History", icon: <BsCalendar2DateFill /> },
    { name: "Profile", icon: <FaUser /> },
  ];
  return (
    <div className="text-white flex justify-between items-center border-b-[1px] border-gray-600/40 pr-8 md:py-2">
      {/* Left Side */}
      <div className=" flex items-center">
        <img src={logo} alt="" className="w-28 md:w-32 -my-3 md:-my-4 -mr-4 " />
        <p className="text-[20px] md:text-[28px] font-bold">Subscribe</p>
      </div>
      {/* Right Side */}
      <div className="flex items-center space-x-3">
        <div className="hidden lg:flex space-x-4 pr-4">
          {navbuttons.map((button) => (
            <NavBtn name={button.name} icon={button.icon} />
          ))}
        </div>

        <div className="hidden sm:flex ease-out px-3 py-1.5 bg-[#2c2d3a] rounded-full items-center">
          <GiTwoCoins className=" shrink-0 mr-1.5 text-[20px]" />
          <p className="md:text-[18px]">200</p>
        </div>

        <div className="hidden sm:flex ease-out p-2 bg-[#2c2d3a] rounded-full md:text-[20px]">
          <FiMenu className=" shrink-0" />
        </div>

        <button className="bg-blue-600 px-3 rounded-full py-1.5 flex items-center space-x-1 md:text-[18px]">
          <HiPlus />
          <p> Create a task</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
