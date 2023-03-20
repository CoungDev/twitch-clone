import React from 'react';
import GamePad from '../assets/gamepad.png';
import Chat from '../assets/interview.png';
import Music from '../assets/musical-note.png';
import Trophy from '../assets/trophy.png';
import Hobby from '../assets/hobby.png';
import {FiSearch} from 'react-icons/fi';
import { BsChevronCompactDown } from 'react-icons/bs';


const categories = [
  {
    title: 'Games',
    icon: GamePad,
  },
  {
    title: 'IRL',
    icon: Chat,
  },
  {
    title: 'Music',
    icon: Music,
  },
  {
    title: 'eSport',
    icon: Trophy,
  },
  {
    title: 'Creative',
    icon: Hobby,
  },
];

const Category = () => {
  return (
    <div className=''>
      {/* Title */}
      <h1 className='text-5xl font-bold font-inter leading-tight block mb-5'>
        Explore
      </h1>

      {/* Categories */}
      <div className='flex gap-x-2 gap-y-5 flex-wrap'>
        {categories.map((item) => (
          <div
            key={item.title}
            className='h-12 w-44 sm:w-52 md:w-80 lg:w-72 xl:w-60 rounded-md bg-[#772ce8] flex items-center relative cursor-pointer hover:bg-[#9147ff] mb-2.5'
          >
            <p className='text-2xl font-inter font-bold text-white pl-2.5'>
              {item.title}
            </p>
            <img className='absolute right-1' src={item.icon} alt='' />
          </div>
        ))}
      </div>

      {/* Filter */}
      <div className='pt-5'>
        <ul className='flex justify-start items-center h-10 mb-5 font-inter text-lg font-semibold cursor-pointer'>
          <li className='pr-2.5 text-[#772ce8] h-full items'>
            <a className='block h-5/6 border-b-2 border-b-indigo-600' href=''>
              <p>Categories</p>
            </a>
          </li>
          <li className='px-2.5 h-full'>
            <a href=''>
              <p>Live Channels</p>
            </a>
          </li>
        </ul>

        <div className='flex justify-between font-inter flex-wrap'>
          {/* Left */}
          <div className='h-[30px]'>
            <label className='text-sm font-semibold mr-2' htmlFor=''>
              Filter by Tag
            </label>
            <div className='inline-block relative'>
              <input
                className='py-[3px] pr-2.5 pl-7 indent-4 placeholder-gray-600 rounded-md bg-[#e4e4e5] focus:outline-[#9147ff] placeholder:text-sm'
                type='text'
                placeholder='Search Category Tags'
              />
              <div className='inline-block items-center absolute left-2.5'>
                <FiSearch size={20} className='mt-1.5' />
              </div>
            </div>
          </div>

          {/* right */}
          <div className='sm:mt-0 mt-4 h-[30px]'>
            <label className='text-sm font-semibold mr-2' htmlFor=''>
              Sort by
            </label>
            <button className='inline-flex justify-center align-middle flex-nowrap bg-[#e4e4e5] rounded-md'>
              <div className='pr-[8px] pl-[10px] py-[3px]'>
                <p className='font-sm text-gray-600'>Recommend for you</p>
              </div>
              <div className='h-full pr-2'>
                <BsChevronCompactDown className='mt-2' />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
