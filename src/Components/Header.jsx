import React, { useEffect } from "react";
import Logo from "../assets/logo.png";
import Telegram from "../assets/telegram.svg";
import Twitter from "../assets/twitter.svg";
import Uniswap from "../assets/uniswap.svg";
import Dextool from "../assets/dextool.svg";

const Header = () => {
  return (
    <header className="py-3 absolute top-0 w-full bg-seconary">
      <nav className="container flex flex-col md:flex-row gap-y-4 justify-between items-center">
        <a href="" className="text-5xl flex justify-between items-center">
          <img src={Logo} alt="" className="w-[4rem]" />
          bank of china
        </a>
        <div className="flex items-center justify-between gap-2">
          <a href="" className="w-[3rem]">
            <img src={Telegram} alt="" />
          </a>
          <a href="" className="w-[3rem]">
            <img src={Twitter} alt="" />
          </a>{" "}
          <a href="" className="w-[3rem]">
            <img src={Uniswap} alt="" />
          </a>{" "}
          <a href="" className="w-[3rem]">
            <img src={Dextool} alt="" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
