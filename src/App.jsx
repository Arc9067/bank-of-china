import React, { useEffect } from "react";
import Header from "./Components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./Components/Hero";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen overflow-hidden w-full bg-primary font-Primary relative text-white">
      <Header />
      <Hero />
    </div>
  );
};

export default App;
