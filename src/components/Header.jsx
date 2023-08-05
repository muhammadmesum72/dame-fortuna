import React, { useEffect, useState } from 'react'
import {AiOutlineMenu} from "react-icons/ai"

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => { 
      if (window.scrollY > 200) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`z-10 flex items-center justify-between py-6 text-lg container px-3 md:px-0 mx-auto  bg-[#0a0822] shadow-lg ${isSticky ? 'opacity-0 left-0 right-0 top-0 transition-all ease-in-out duration-500' : 'fixed transition-all ease-in-out duration-500 left-0 right-0 top-0'}`}>
      {/* logo */}
      <div className='uppercase cursor-pointer'>
        Logo

      </div>
      {/* Links */}
      <div className='block md:hidden'>
        <AiOutlineMenu />
      </div>
      <div className='hidden md:block'>
        <ul className='inline-flex gap-9'>
          <li className='hover:border-b-2 hover:border-white' ><a  href="#home">Home</a></li>
          <li className='hover:border-b-2 hover:border-white' ><a  href="#mint">Mint Page</a></li>
          <li className='hover:border-b-2 hover:border-white' ><a  href="#tokenGated">Token Gated</a></li>
          <li className='hover:border-b-2 hover:border-white' ><a  href="#partners">Partners</a></li>
          <li className='hover:border-b-2 hover:border-white' ><a  href="#roadmap">Roadmap</a></li>

        </ul>
      </div>
    </div>
  )
}

export default Header