import React from 'react';
import logo from '../assets/logo.png';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { CgCrown } from 'react-icons/cg';
import { MdOutlinePerson2 } from 'react-icons/md';
const NavBar = () => {
  return (
    <div className='flex items-center justify-between fixed top-0 w-full bg-white shadow h-12'>
      {/* Left side */}
      <div className='flex ml-3 gap-5'>
        <div className='w-6 h-6 pt-3'>
          <img src={logo} alt='' />
        </div>
        <div className='block border-b-2 border-[#9147ff] py-3'>
          <p className='text-[#9147ff] font-semibold'>Explore</p>
        </div>
        <button className='hover:bg-[#ebebeb] px-2 py-1 rounded-md'>
          <BsThreeDotsVertical className='' />
        </button>
      </div>

      {/* Midle side */}
      <div className='w-[25rem] max-w-md h-full flex items-center gap-[2px]'>
        <input
          className='w-full px-[10px] py-[5px] focus:outline-none bg-[#ebebeb] rounded-l-md hover:border-2 focus:border-2 focus:border-[#9147ff]'
          type='text'
          placeholder='Search'
        />
        <button className='p-[10px] bg-[#ebebeb] rounded-r cursor-pointer hover:bg-[#d4d4d4]'>
          <FaSearch size={15} />
        </button>
      </div>

      {/* Right Side */}
      <div className='flex items-center gap-4 justify-around mr-5'>
        <button className=' hover:bg-[#d4d4d4] px-2 py-1 rounded-md'>
          <CgCrown size={20} />
        </button>
        <button className='bg-[#ebebeb] font-semibold px-4 py-1 rounded-md hover:bg-[#d4d4d4]'>
          Log in
        </button>
        <button className='bg-[#9147ff] text-white font-semibold px-3 py-1 rounded-md hover:bg-[#8340e6]'>
          Sign in
        </button>
        <button className='hover:bg-[#d4d4d4] px-1 py-1 rounded-md'>
          <MdOutlinePerson2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
