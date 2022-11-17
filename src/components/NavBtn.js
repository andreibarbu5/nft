import React from "react";

const NavBtn = ({ name, icon }) => {
  return (
    <div className="flex items-center gap-2 text-white/50 hover:text-white duration-100 ease-out ">
      <div className="text-[20px] md:text-[24px]">{icon}</div>
      <p className="font-semibold md:text-[19px]">{name}</p>
    </div>
  );
};

export default NavBtn;
