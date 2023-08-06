import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    {
      link: "#home",
      name: "Home",
    },
    {
      link: "#mint",
      name: "Mint Page",
    },
    {
      link: "#tokenGated",
      name: "Token Gated",
    },
    {
      link: "#partners",
      name: "Partners",
    },
    {
      link: "#roadmap",
      name: "Roadmap",
    },
  ];

  return (
    <div
      className={`z-10 flex items-center justify-between py-6 text-lg container px-3 md:px-0 mx-auto  bg-[#0a0822] shadow-lg fixed top-0 left-0 right-0`}
    >
      {/* logo */}
      <div className="uppercase cursor-pointer">Logo</div>
      {/* Links */}
      <div className="block md:hidden cursor-pointer text-3xl">
        {isMenuOpen ? (
          <AiOutlineClose onClick={() => handleMenu()} />
        ) : (
          <AiOutlineMenu onClick={() => handleMenu()} />
        )}
      </div>
      <div className="hidden md:block">
        <ul
          className={`w-full h-full inline-flex gap-9
          `}
        >
          {navLinks.map((link) => (
            <li className="hover:border-b-2 hover:border-white">
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={` ${
          isMenuOpen ? "fixed top-0 left-0 opacity-100 " : "fixed top-0 left-full opacity-0"
        } transition-all md:hidden ease-in-out duration-1000  h-screen w-full bg-black  -z-10`}
      >
        <ul
          className={`w-full h-full inline-flex gap-9 flex-col items-center justify-center `}
        >
          {navLinks.map((link) => (
            <li className="hover:border-b-2 hover:border-white">
              <a onClick={() => handleMenu()} href={link.link}>
                {link.name}
              </a>
            </li>
          ))}

          <li className="flex text-3xl gap-3">
            <a href="">
              <AiFillFacebook />
            </a>
            <a href="">
              <AiFillTwitterSquare />
            </a>
            <a href="">
              <AiFillInstagram />
            </a>
            <a href="">
              <AiFillYoutube />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
