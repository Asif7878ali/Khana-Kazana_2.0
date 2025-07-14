"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation.js";
import Icons from "@/utils/Icons";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const router = useRouter();

  function handleClick(){
    router.push('/auth');
  }
  
  
  return (
    <>
      <nav className='fixed top-0 left-0 right-0 w-full z-50 shadow-md p-3 bg-white'>
        <div className="max-w-8xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left - Logo */}
          <div className="flex items-baseline">
            <p className='font-mono text-2xl bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-green-500 to-indigo-400'>Khana</p>
            <span className="text-red-500 italic text-sm ml-1">Kazana</span>
          </div>

          {/* Middle - Logo & Links in the Center */}
          <div className="flex-1 flex justify-center items-center space-x-6">
            {/* Links */}
            <div className="hidden md:flex">
              <div className="flex gap-1 group hover:bg-rose-400 rounded-2xl p-3 hover:text-white cursor-pointer">
                <Icons.Home
                  className={`text-rose-500 group-hover:text-white`}
                />
                <p className='text-rose-500 group-hover:text-white'>Home</p>
              </div>

              <div className="flex gap-2 group hover:bg-rose-400 rounded-2xl p-3 hover:text-white cursor-pointer">
                <Icons.Meal
                  className={`text-rose-500 group-hover:text-white`}
                />
                <p className='text-rose-500 group-hover:text-white'>Meal</p>
              </div>

              <div className="flex gap-1 group hover:bg-rose-400 rounded-2xl p-3 hover:text-white cursor-pointer">
                <Icons.UpComingMeal
                  className={`text-rose-500 group-hover:text-white`}
                />
                <p className='text-rose-500 group-hover:text-white'>
                  Upcoming Meal
                </p>
              </div>

              <span className="group hover:bg-rose-400 rounded-2xl p-3 hover:text-white cursor-pointer">
                <Icons.Notification
                  className={`text-rose-500 group-hover:text-white`}
                />
              </span>
            </div>
          </div>

          {/* Right - Join Us Button */}
          <div className="flex items-center space-x-4">
            <button onClick={handleClick} className='hidden md:flex items-center gap-2 bg-transparent text-rose-500 py-2 px-4 rounded-md hover:bg-rose-400 hover:text-white cursor-pointer border border-rose-500'>
              <Icons.AddUser />
              Join Us
            </button>

            {/* Hamburger Icon for Mobile */}
            <button className='md:hidden text-rose-500 cursor-pointer' onClick={toggleMenu}>
              <Icons.Humberger />
            </button>
            {/* <DarkMode/> */}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${menuOpen ? "block" : "hidden"}  md:hidden absolute top-14 left-0 w-full bg-white`}>
          <div className="px-4 py-2">
            <div className="flex gap-1 group hover:bg-rose-400 rounded-2xl p-3 hover:text-white cursor-pointer">
              <Icons.Home className={`text-rose-500 group-hover:text-white`} />
              <p className='block text-rose-500 group-hover:text-white'>Home</p>
            </div>

            <div className="flex gap-2 group hover:bg-rose-400 rounded-2xl p-3 hover:text-white cursor-pointer">
              <Icons.Meal className={`text-rose-500 group-hover:text-white`} />
              <p className='block text-rose-500 group-hover:text-white'>Meal</p>
            </div>

            <div className="flex gap-1 group hover:bg-rose-400 rounded-2xl p-3 hover:text-white cursor-pointer">
              <Icons.UpComingMeal
                className={`text-rose-500 group-hover:text-white`}
              />
              <p className='block text-rose-500 group-hover:text-white'>
                Upcoming Meal
              </p>
            </div>
            <div className="flex justify-end">
              <button className='flex items-center gap-2 bg-transparent text-rose-500 py-2 px-4 rounded-md hover:bg-rose-400 hover:text-white cursor-pointer border-[1px] border-rose-500'>
                <Icons.AddUser />
                Join Us
              </button>
            </div>
          </div>
        </div>
        
        {/* Line at the bottom of navbar - black in light mode, white in dark mode */}
        <div className='absolute bottom-0 left-0 w-full h-[1px] bg-white'></div>
      </nav>
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
