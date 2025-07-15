'use client'
import React, { useState } from "react";
import Icons from "@/utils/Icons";
import DrawerFooter from "./DynamicFooter";

const Footer = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
      <>
      {/* Main Footer */}
      <footer className={`fixed bottom-0 left-0 right-0 w-full shadow-2xl py-3 mt-auto bg-gradient-to-r from-slate-50 to-slate-100 backdrop-blur-sm border-t border-white/20 transition-all duration-500 ${showDrawer ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
        <div className='absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent'></div>
        
        <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between items-center px-4">
          <div className='md:order-first mt-2 md:mt-0 font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-green-500 to-indigo-400 text-sm'>
            © {new Date().getFullYear()} Khana-Kazana All rights reserved.
          </div>
          
          <div className="text-sm flex text-center md:text-right gap-3">
            <a
              target="_blank"
              href="https://www.facebook.com/saifi.s.3386"
              className='text-rose-500 hover:bg-blue-500 hover:text-white p-2 rounded-full cursor-pointer bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110'>
              <Icons.FaceBook />
            </a>
            <a
              target="_blank"
              href="https://x.com/AsifMernDev?t=jn_ViVecfvu4V-RKd2T6tQ&s=08"
              className='text-rose-500 hover:bg-black hover:text-white p-2 rounded-full cursor-pointer bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110'>
              <Icons.Twitter />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/i_am_aasif_alii/?hl=en"
              className='text-rose-500 hover:bg-gradient-to-tr from-purple-700 via-red-500 to-yellow-400 hover:text-white p-2 rounded-full cursor-pointer bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110'>
              <Icons.Instagram />
            </a>
            <a
              target="_blank"
              href="https://github.com/Asif7878ali"
              className='text-rose-500 hover:bg-black hover:text-white p-2 rounded-full cursor-pointer bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110'>
              <Icons.Github />
            </a>
            <span 
              onClick={() => setShowDrawer(true)} 
              className='p-2 cursor-pointer text-black hover:text-rose-500 hover:bg-white/50 rounded-full transition-all duration-300 hover:scale-110'
            >
              <Icons.CheronDown />
            </span>
          </div>
        </div>
      </footer>

      <DrawerFooter 
        open={showDrawer} 
        handleDrawer={setShowDrawer} 
      />
    </>

  );
};

export default Footer;
