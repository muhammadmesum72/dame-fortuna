import React from "react";
import Cards from "../assets/cards.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div id="home" className="h-screen flex items-center justify-center">
      <div className="w-full flex items-center">
        <div
          data-aos="fade-left"
          className="md:basis-1/2 space-y-3 md:space-y-6"
        >
          <span className="opacity-70">Ultimate Guide To Astrology</span>
          <h2 className="text-3xl md:text-6xl leading-10 text-primary  ">
            Your Star Determines <br /> Your Life's Journey
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utelit
            tellusoi luctus nec ullamcorper mattis pulvinar dapibus leonec.
          </p>
          <button className="border-2 border-white rounded-xl px-6 py-3 hover:border-primary hover:bg-primary hover:text-[#0a0822] font-bold md:text-xl ">
            <Link to="/mint">Mint Nft</Link>
          </button>
        </div>
        <div className="hidden md:block basis-1/2  relative w-full text-center">
          <div className="w-full">
            <img src={Cards} alt="" className="w-96 mx-auto cards-animate" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
