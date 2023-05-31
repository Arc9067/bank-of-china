import React from "react";
import Logo from "../assets/bank.jpg";
import { BiRightArrowAlt } from "react-icons/bi";

const Hero = () => {
  return (
    <section className="w-full pt-[200px] pb-[30px]">
      <div className="container grid lg:grid-cols-2 justify-between items-center gap-y-10">
        <div className="flex flex-col gap-6">
          <h1
            className="text-4xl animate-bounce text-center md:text-6xl"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            Bank of <span className="text-black">China</span>: Where Tradition
            Meets Crypto-craziness!
          </h1>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <a
              href=""
              className="px-6 py-3 flex items-center gap-2 bg-china hover:bg-transparent hover:text-primary hover:ring-primary text-black text-3xl ring ring-black"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              buy bank of china
              <BiRightArrowAlt />
            </a>
            <a
              href=""
              className="px-6 py-3 flex items-center gap-2 bg-china hover:bg-transparent hover:text-primary hover:ring-primary text-black text-3xl ring ring-black"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              join community
              <BiRightArrowAlt />
            </a>
          </div>
        </div>
        <img src={Logo} alt="" className="lg:w-[25rem] ml-auto" />
      </div>
    </section>
  );
};

export default Hero;
