import React from "react";
import { IoBookOutline, IoBugOutline, IoNotificationsOutline } from "react-icons/io5";
import Search from "./Search";

const NavBar = () => {
  return (
    <div className="bg-[#121212] w-full h-12 px-5 py-7 relative top-0 pl-[350px] md:flex hidden items-center justify-between z-20">
      <Search/>
      <div className="flex items-center gap-3">
        <div className="rounded-full w-[34px] h-[34px] bg-gray-700 grid place-items-center cursor-pointer hover:bg-green-900">
            <IoNotificationsOutline color={"#b3b3b3"}/>
        </div>
        <div className="rounded-full w-[34px] h-[34px] bg-gray-700 grid place-items-center cursor-pointer hover:bg-green-900">
            <IoBookOutline color={"#b3b3b3"}/>
        </div>
        <div className="rounded-full w-[34px] h-[34px] bg-gray-700 grid place-items-center cursor-pointer hover:bg-green-900">
            <IoBugOutline color={"#b3b3b3"}/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
