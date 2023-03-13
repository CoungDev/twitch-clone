import React from 'react';
import logo from '../assets/logo.png';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { CgCrown } from 'react-icons/cg';
import { MdOutlinePerson2 } from 'react-icons/md';
import { SiDatabricks } from 'react-icons/si';
const NavBar = () => {
  return (
    <div className='flex items-center justify-between fixed top-0 w-screen bg-white shadow h-12'>
      {/* Left side */}
      <div className='flex justify-start ml-3 mr-6 gap-5'>
        <div className='w-6 h-6 pt-3.5 md:pt-3'>
          <img src={logo} alt='' />
        </div>
        <div className='hidden md:block border-b-2 border-[#9147ff] py-3'>
          <p className='text-[#9147ff] font-semibold'>Explore</p>
        </div>
        <div className='block md:hidden px-1 py-1.5 border-b-2 border-[#9147ff] py-4'>
          <SiDatabricks size={20} />
        </div>
        <button className='hover:bg-[#ebebeb] rounded-md my-2'>
          <BsThreeDotsVertical size={20} />
        </button>
      </div>

      {/* Midle side */}
      <div className='w-[25rem] max-w-md h-full flex justify-end md:justify-center items-center gap-[2px]'>
        <input
          className='hidden md:block lg:w-full md:w-10/12 px-[10px] py-[5px] focus:outline-none bg-[#ebebeb] rounded-l-md hover:border-2 focus:border-2 focus:border-[#9147ff]'
          type='text'
          placeholder='Search'
        />
        <button className='p-[10px] bg-[#ebebeb] rounded-r cursor-pointer hover:bg-[#d4d4d4] hidden md:block'>
          <FaSearch size={15} />
        </button>
        <button className='block md:hidden px-1 py-1 mr-2 hover:bg-[#d4d4d4] rounded-md'>
          <BsSearch size={18} />
        </button>
      </div>

      {/* Right Side */}
      <div className='flex items-center gap-2 justify-around mr-0.5'>
        <button className='hover:bg-[#d4d4d4] px-2 py-1 rounded-md'>
          <CgCrown size={20} />
        </button>
        <button className='bg-[#ebebeb] font-semibold w-16 h-8 rounded-md hover:bg-[#d4d4d4]'>
          Log in
        </button>
        <button className='bg-[#9147ff] text-white font-semibold w-16 h-8 rounded-md hover:bg-[#8340e6]'>
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
