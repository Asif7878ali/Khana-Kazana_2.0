'use client'
import React, { useState } from "react";
import DynamicFooter from "./DynamicFooter";
import Icons from "@/utils/Icons";

const Footer = () => {
  const [dynamicFooter, setDynamicFooter] = useState(false);
  
  return (
    <>
      {dynamicFooter ? (
        <DynamicFooter setDynamicFooter={setDynamicFooter} />
      ) : (
        <footer className='fixed bottom-0 left-0 right-0 w-full shadow-t-lg shadow-gray-500/30 py-2 mt-auto bg-slate-100'>
          <div className='absolute top-0 left-0 w-full h-[1px] bg-white'></div>
          
          <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between items-center px-4">
            <div className='md:order-first mt-2 md:mt-0 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-green-500 to-indigo-400'>
              © {new Date().getFullYear()} Khana-Kazana All rights reserved.
            </div>
            
            <div className="text-sm flex text-center md:text-right gap-2">
              <a
                target="_blank"
                href="https://www.facebook.com/saifi.s.3386"
                className='text-rose-500 hover:bg-blue-500 hover:text-white p-2 rounded-full cursor-pointer bg-white'>
                <Icons.FaceBook />
              </a>
              <a
                target="_blank"
                href="https://x.com/AsifMernDev?t=jn_ViVecfvu4V-RKd2T6tQ&s=08"
                className='text-rose-500 hover:bg-black hover:text-white p-2 rounded-full cursor-pointerbg-white'>
                <Icons.Twitter />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/i_am_aasif_alii/?hl=en"
                className='text-rose-500 hover:bg-gradient-to-tr from-purple-700 via-red-500 to-yellow-400 hover:text-white p-2 rounded-full cursor-pointer bg-white'>
                <Icons.Instagram />
              </a>
              <a
                target="_blank"
                href="https://github.com/Asif7878ali"
                className='text-rose-500 hover:bg-black hover:text-white p-2 rounded-full cursor-pointer bg-white'>
                <Icons.Github />
              </a>
              <span onClick={() => setDynamicFooter(true)} className='p-2 cursor-pointer text-black'>
                <Icons.CheronDown />
              </span>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
