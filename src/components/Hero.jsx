import React from "react";
import Cards from "../assets/cards.png"

const Hero = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full flex items-center">
        <div className="md:basis-1/2 space-y-3">
          <span>Ultimate Guide To Astrology</span>
          <h2 className="text-3xl md:text-5xl leading-10  ">Your Star Determines <br /> Your Life's Journey</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utelit tellusoi luctus nec ullamcorper mattis pulvinar dapibus leonec.</p>
          <button className="border-2 border-white rounded-xl px-6 py-3 hover:bg-white hover:text-[#0a0822] font-bold ">Mint Nft</button>
        </div>
        <div className="hidden md:block basis-1/2  relative w-full text-center">
          <div className="w-full">
            <img src={Cards} alt="" className="w-80 mx-auto cards-animate" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
