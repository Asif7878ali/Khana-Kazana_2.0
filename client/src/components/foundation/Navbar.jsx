"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation.js";
import Icons from "@/utils/Icons";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  function handleClick(){
    router.push('/auth');
  }

  function toggleMenu  ()  {
    setMenuOpen(!menuOpen);
  };
  
  
  return (
      <nav id="Header" className='w-full bgWhite shadow-md'>
        <div id="WebMenu" className="flex OwnContainer items-center justify-between py-3">
          {/* Left - Logo */}
          <div className="flex items-baseline">
            <p className='font-mono text-2xl bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-green-500 to-indigo-400'>Khana</p>
            <span className="textRose italic text-sm ml-1">Kazana</span>
          </div>

          {/* Middle - Logo & Links in the Center */}
          <div className="flex-1 flex justify-center items-center space-x-6">
            {/* Links */}
            <div className="hidden md:flex">
              <div className="flex gap-1 group hover:bgRose hover:textWhite rounded-2xl p-3 cursor-pointer">
                <Icons.Home
                  className="textRose group-hover:text-white"
                />
                <p className='textRose group-hover:text-white'>Home</p>
              </div>

              <div className="flex gap-2 group hover:bgRose hover:textWhite rounded-2xl p-3 cursor-pointer">
                <Icons.Meal
                  className="textRose group-hover:text-white"
                />
                <p className='textRose group-hover:text-white'>Meal</p>
              </div>

              <div className="flex gap-1 group hover:bgRose hover:textWhite rounded-2xl p-3 cursor-pointer">
                <Icons.UpComingMeal
                  className="textRose group-hover:text-white"
                />
                <p className='textRose group-hover:text-white'>
                  Upcoming Meal
                </p>
              </div>

              <span className="group hover:bgRose hover:textWhite rounded-2xl p-3 cursor-pointer">
                <Icons.Notification
                  className="textRose group-hover:text-white"
                />
              </span>
            </div>
          </div>

          {/* Right - Join Us Button */}
          <div className="flex items-center">
            <button onClick={handleClick} className='hidden w-full md:flex items-center gap-2 bg-transparent textRose py-2 px-4 rounded-md hover:bgRose hover:textWhite cursor-pointer border borderRose'>
              <Icons.AddUser className="size-6" />
              Join Us
            </button>

            {/* Hamburger Icon for Mobile */}
            <button className='md:hidden textRose cursor-pointer' onClick={toggleMenu}>
              {menuOpen ? (
                 <Icons.Cross className="size-6" />
              ) : (
                 <Icons.Humberger className="size-6" />
              )}
            </button>
            {/* <DarkMode/> */}
          </div>
        </div>

        <div id="MobileMenu"  className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-rose-200 to-white rounded-br-4xl rounded-tr-4xl shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
        
        >
          <div className="px-4 py-2">
            <div className="flex gap-1 group  rounded-2xl p-3 hover:bgRose hover:textWhite cursor-pointer">
              <Icons.Home className='textRose group-hover:text-white' />
              <p className='block textRose group-hover:text-white'>Home</p>
            </div>

            <div className="flex gap-2 group hover:bgRose hover:textWhite  rounded-2xl p-3 cursor-pointer">
              <Icons.Meal className='textRose group-hover:text-white' />
              <p className='block textRose group-hover:text-white'>Meal</p>
            </div>

            <div className="flex gap-1 group  rounded-2xl p-3 hover:bgRose hover:textWhite cursor-pointer">
              <Icons.UpComingMeal
                className='textRose group-hover:text-white'
              />
              <p className='block textRose group-hover:text-white'>
                Upcoming Meal
              </p>
            </div>
            <div className="flex justify-end">
              <button className='flex items-center gap-2 bg-transparent textRose py-2 px-4 rounded-md hover:bgRose hover:textWhite cursor-pointer border-[1px] border-rose-500'>
                <Icons.AddUser className="size-6" />
                Join Us
              </button>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
