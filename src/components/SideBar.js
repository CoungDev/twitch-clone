import React from 'react';
import { BsArrowBarRight } from 'react-icons/bs';
import { CgCamera } from 'react-icons/cg';
import avt from '../assets/avt.png';

const creatorIcon = [
  { img: avt, name: 'Example', css: 'rounded-full w-7 h-7 cursor-pointer' },
  { img: avt, name: 'Example', css: 'rounded-full w-7 h-7 cursor-pointer' },
  { img: avt, name: 'Example', css: 'rounded-full w-7 h-7 cursor-pointer' },
  { img: avt, name: 'Example', css: 'rounded-full w-7 h-7 cursor-pointer' },
  { img: avt, name: 'Example', css: 'rounded-full w-7 h-7 cursor-pointer' },
  { img: avt, name: 'Example', css: 'rounded-full w-7 h-7 cursor-pointer' },
  { img: avt, name: 'Example', css: 'rounded-full w-7 h-7 cursor-pointer' },
  { img: avt, name: 'Example', css: 'rounded-full w-7 h-7 cursor-pointer' },
]

const SideBar = () => {
  return (
    <div className='h-screen w-12 bg-[#efeff1] fixed top-12 flex flex-col items-center gap-2'>
      <button className='hidden lg:block m-5 hover:bg-[#d4d4d4] p-1 rounded-md'>
        <BsArrowBarRight size={20} />
      </button>
      <label htmlFor='' className='mt-5 lg:mt-0 mb-1'>
        <CgCamera size={20} />
      </label>
      {creatorIcon.map((item) => (
        <img src={item.img} alt={item.name} className={item.css} />
      ))}
    </div>
  );
};

export default SideBar;
