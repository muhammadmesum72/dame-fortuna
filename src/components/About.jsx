import React from "react";
import Card from "../assets/BullCard.png";

const About = () => {
  return (
    <div className="flex flex-col-reverse gap-6 md:gap-0 md:flex-row items-center justify-center relative">
      <div data-aos="fade-right" className="basis-1/2 w-full">
        <div className="about-img text-center w-full">
          <img
            src={Card}
            alt=""
            className="opacity-100  h-96  mx-auto  "
          />
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="md:basis-1/2 space-y-3 md:space-y-6 z-10"
      >
        <span className="opacity-70">About Moons</span>
        <h2 className="text-3xl md:text-6xl leading-10 text-primary  ">
          We can help you find <br /> Your Future with Moons
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
          libero tenetur! Enim unde tempore temporibus culpa sint deserunt quasi
          dicta dolore nostrum voluptatum minus optio veritatis alias quod
          accusantium distinctio, sed nihil eum ad soluta qui eveniet. Tempore,
          accusantium ipsam.
        </p>
      </div>
    </div>
  );
};

export default About;
