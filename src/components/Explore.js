import React from "react";
import { GoSettings } from "react-icons/go";
import hape1 from "../assets/hape1.png";
import hape2 from "../assets/hape2.jpg";
import hape3 from "../assets/hape3.jpg";
import hape4 from "../assets/hape4.jpg";
import profile from "../assets/profile.jpg";
import bg from "../assets/bg.png";
import Card from "./Card";
const Explore = () => {
  const cards = [
    { title: "Fiberta", bg: bg, profile: profile },
    { title: "Fiberta", bg: hape1, profile: profile },
    { title: "Fiberta", bg: hape2, profile: profile },
    { title: "Fiberta", bg: hape3, profile: profile },
    { title: "Fiberta", bg: hape4, profile: profile },
    { title: "Fiberta", bg: bg, profile: profile },
    { title: "Fiberta", bg: hape1, profile: profile },
    { title: "Fiberta", bg: hape2, profile: profile },
    { title: "Fiberta", bg: hape3, profile: profile },
    { title: "Fiberta", bg: hape4, profile: profile },
    { title: "Fiberta", bg: bg, profile: profile },
    { title: "Fiberta", bg: hape1, profile: profile },
    { title: "Fiberta", bg: hape2, profile: profile },
    { title: "Fiberta", bg: hape3, profile: profile },
    { title: "Fiberta", bg: hape4, profile: profile },
    { title: "Fiberta", bg: bg, profile: profile },
    { title: "Fiberta", bg: hape1, profile: profile },
    { title: "Fiberta", bg: hape2, profile: profile },
    { title: "Fiberta", bg: hape3, profile: profile },
    { title: "Fiberta", bg: hape4, profile: profile },
  ];
  return (
    <div className="text-white mx-10 text-[18px] font-semibold pt-6">
      {/* Title */}
      <div className="flex items-center justify-between w-full">
        <h2 className="text-[22px]">Explore</h2>
        <div className="flex items-center gap-2 bg-gray-800 py-1.5 px-6 rounded-full">
          <GoSettings className="rotate-90" />
          <p>Filter</p>
        </div>
      </div>
      {/* Cards */}
      <div
        className="gap-y-12 gap-x-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
       xl:grid-cols-5 pt-6"
      >
        {cards.map((card) => (
          <Card title={card.title} bg={card.bg} profile={card.profile} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
