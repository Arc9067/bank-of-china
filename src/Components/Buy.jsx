import React from "react";
import Round from "../assets/round.svg";

const Buy = () => {
  return (
    <section className="py-[50px] w-full bg-secondary">
      <div className="container">
        <h1 className="text-6xl text-center">how to buy</h1>
        <div className="flex flex-col gap-4 items-center"></div>
        <img src={Round} alt="" />
      </div>
    </section>
  );
};

export default Buy;
