import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"

const Header = () => {
  return (
    <div className='flex items-center justify-between py-6 text-lg container px-3 md:px-0 mx-auto fixed left-0 right-0 top-0 bg-[#0a0822] shadow-lg'>
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
          <li className='hover:border-b-2 hover:border-white' ><a  href="#mintpage">Mint Page</a></li>
          <li className='hover:border-b-2 hover:border-white' ><a  href="#tokengated">Token Gated</a></li>
          <li className='hover:border-b-2 hover:border-white' ><a  href="#partners">Partners</a></li>
          <li className='hover:border-b-2 hover:border-white' ><a  href="#roadmap">Roadmap</a></li>

        </ul>
      </div>
    </div>
  )
}

export default Header