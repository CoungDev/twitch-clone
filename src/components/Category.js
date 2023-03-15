import React from 'react';
import GamePad from '../assets/gamepad.png';
import Chat from '../assets/interview.png';
import Music from '../assets/musical-note.png';
import Trophy from '../assets/trophy.png';
import Hobby from '../assets/hobby.png';

const categories = [
  {
    title: 'Games',
    icon: GamePad,
    css: ''
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
          <div className='h-12 w-44 sm:w-52 md:w-80 lg:w-72 xl:w-60 rounded-md bg-[#772ce8] flex items-center relative'>
            <p className='text-2xl font-inter font-bold text-white pl-2.5'>
              {item.title}
            </p>
            <img className='absolute right-1' src={item.icon} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
