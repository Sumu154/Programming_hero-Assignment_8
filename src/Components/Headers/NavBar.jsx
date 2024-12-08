import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/style.css'

import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";

const NavBar = () => {
  const links = <>
                  <li> <NavLink cla to="/"> Home </NavLink> </li>
                  <li> <NavLink to="/"> Statistic </NavLink> </li>
                  <li> <NavLink to="/dashboard"> Dashboard </NavLink> </li>
                </>

  return (
    <div className="pt-5">
      <div className="bg-purple w-[95%] mx-auto text-white flex justify-between items-center py-4 px-10 rounded-t-2xl">
        <h2 className="text-xl font-semibold"> Gadget Heaven </h2>
        <div className="hidden md:flex list-none gap-5 ">
          {links}
        </div>
        <div className="flex gap-2 items-center">
          <div className="h-9 w-9 rounded-full bg-white text-black flex justify-center items-center border-[1px] border-blacktext border-opacity-15"> <AiOutlineShoppingCart /> </div>
          <div className="h-9 w-9 rounded-full bg-white text-black flex justify-center items-center border-[1px] border-blacktext border-opacity-15"> <IoMdHeartEmpty /> </div>
          <div className="dropdown dropdown-end md:hidden">
            <div tabIndex={0} role="button" className="m-1 text-xl"> <RiMenu3Fill /> </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-36 text-blacktext text-opacity-70 shadow">
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;