import React from "react";
import Team1 from "../assets/amazon.png";
import Team2 from "../assets/Microsoft Logo.png";
import Team3 from "../assets/slack.png";
import Team4 from "../assets/woocommerce.png";

const Partners = () => {
  const partners = [Team1, Team2, Team3, Team4];
  return (
    <div
      id="partners"
      className="grid grid-cols-2 items-center md:flex  w-full items-center justify-around md:gap-0 gap-6 h-fit"
    >
      {partners.map((partner) => (
        <img
          src={partner}
          alt=""
          className="w-24 mx-auto md:w-auto opacity-60 hover:opacity-100 cursor-pointer hover:-translate-y-[1rem] transition-all ease-in-out duration-500"
        />
      ))}
    </div>
  );
};

export default Partners;
