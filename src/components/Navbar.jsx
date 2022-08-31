import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const menuList = [
    { id: 1, menu: "Home", to: "home" },
    { id: 2, menu: "About", to: "about" },
    { id: 3, menu: "Skills", to: "skills" },
    { id: 4, menu: "Portofolio", to: "portofolio" },
  ];
  const menuListMobile = [
    { id: 1, menu: "Home", to: "home", onClick: handleClick },
    { id: 2, menu: "About", to: "about", onClick: handleClick },
    { id: 3, menu: "Skills", to: "skills", onClick: handleClick },
    { id: 4, menu: "Portofolio", to: "portofolio", onClick: handleClick },
  ];

  const renderMenuList = () => {
    return menuList.map((val) => {
      return (
        <li key={val.id} className="hover:text-teal-600">
          <Link to={val.to} smooth={true} duration={700}>
            {val.menu}
          </Link>
        </li>
      );
    });
  };
  const renderMenuListMobile = () => {
    return menuListMobile.map((val) => {
      return (
        <li key={val.id} className="py-6 text-4xl">
          <Link onClick={val.onClick} to={val.to} smooth={true} duration={700}>
            {val.menu}
          </Link>
        </li>
      );
    });
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-900 text-white z-[100] ">
      <Link to="home" smooth={true} duration={700}>
        <div className="hover:cursor-pointer">
          <button className="bg-teal-700 h-8 w-8 rounded-full mr-2">A</button>
          <span className="text-lg font-bold ">Addumairi</span>
        </div>
      </Link>

      {/* MENU */}

      <ul className="hidden  md:flex">{renderMenuList()}</ul>

      {/* HUMBURGER */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* MOBILE MENU  */}
      <ul
        className={
          !nav
            ? "hidden"
            : " absolute top-0 right-0  w-full h-screen bg-gray-900  flex flex-col justify-center items-center "
        }
      >
        {renderMenuListMobile()}
      </ul>
    </div>
  );
}

export default Navbar;
