import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo-no-background.png";
import { styles } from "../style";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-[#03000C]" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between max-w-screen-2xl mx-auto items-center">
        <Link
          to="/"
          className="flex items-center gap-2 "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="h-12 " />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-8">
          <li className="hover:text-[#DF6BBE] text-[#7E66F8] transition-colors paragraphFont duration-300 text-[16px] font-[400] cursor-pointer">
            <Link
              to="/gracien"
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              Gracien
            </Link>
          </li>
          <li className="hover:text-[#DF6BBE] text-[#7E66F8] transition-colors paragraphFont duration-300 text-[16px] font-[400] cursor-pointer">
            <Link
              to="/aenon "
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              Aenon
            </Link>
          </li>
        </ul>

        <div className="sm:hidden flex item-center">
          <img
            src={toggle ? closeIcon : menuIcon}
            alt="menu"
            className="w-7 h-7 object-contain"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        <div
          className={`${
            styles.paddingX
          } absolute top-0 right-0 bg-[#03000C] sm:hidden py-5 min-w-[100%] z-10 ${
            !toggle ? "hidden" : "flex"
          }`}
        >
          <img
            src={closeIcon}
            alt=""
            onClick={() => setToggle(!toggle)}
            className="absolute right-6 top-9 w-7 h-7 object-contain"
          />
          <ul className="list-none h-[100vh] flex items-center justify-center flex-1  flex-col gap-4">
            <li
              className="hover:text-[#DF6BBE] paragraphFont transition-colors duration-300 text-[16px] font-[400] cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <Link to="">Aenon</Link>
            </li>
            <li
              className="hover:text-[#DF6BBE] paragraphFont transition-colors duration-300 text-[16px] font-[400] cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <Link to="">Gracien</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
