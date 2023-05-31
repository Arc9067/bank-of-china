import React, { useEffect } from "react";
import Header from "./Components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./Components/Hero";
import Buy from "./Components/Buy";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen overflow-hidden w-full bg-white font-Primary relative text-primary">
      <Header />
      <Hero />
      <Buy />
    </div>
  );
};

export default App;
