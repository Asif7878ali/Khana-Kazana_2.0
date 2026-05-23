"use client";
import React, { useEffect, useRef, useState } from "react";
import Icons from "@/utils/Icons";
import DrawerFooter from "./DynamicFooter";
import useTranslator, { LANGUAGE_LIST } from "@/hooks/useTranslator";

const Footer = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { translate, language, setLanguage } = useTranslator();

  function handleLanguageChange(langCode) {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", langCode);
    }
    setLanguage(langCode);
    setIsOpen(false);
    window.location.reload();
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <footer
        id="MainFooter"
        className={`w-full shadow-2xl py-3 bg-gradient-to-r from-slate-50 to-slate-100 backdrop-blur-sm border-t border-white/20 transition-all duration-500 ${
          showDrawer
            ? "translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <div className="OwnContainer  flex flex-col-reverse md:flex-row justify-between items-center px-4">
          <div className="md:order-first mt-2 md:mt-0 font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-green-500 to-indigo-400 text-sm">
            © {new Date().getFullYear()} {translate("sort.khana")} {translate("sort.kazana")} {translate("sort.allRightReserved")}
          </div>

          <div className="text-sm flex text-center md:text-right gap-3">
            <a
              target="_blank"
              href="https://www.facebook.com/saifi.s.3386"
              className="textRose hover:bg-blue-500 hover:text-white p-2 rounded-full cursor-pointer bgWhite shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Icons.FaceBook />
            </a>
            <a
              target="_blank"
              href="https://x.com/AsifMernDev?t=jn_ViVecfvu4V-RKd2T6tQ&s=08"
              className="textRose hover:bg-black hover:text-white p-2 rounded-full cursor-pointer bgWhite shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Icons.Twitter />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/i_am_aasif_alii/?hl=en"
              className="textRose hover:bg-gradient-to-tr from-purple-700 via-red-500 to-yellow-400 hover:text-white p-2 rounded-full cursor-pointer bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Icons.Instagram />
            </a>
            <a
              target="_blank"
              href="https://github.com/Asif7878ali"
              className="textRose hover:bg-black hover:text-white p-2 rounded-full cursor-pointer bgWhite shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Icons.Github />
            </a>

            <div className="relative" ref={dropdownRef}>
              <span
                onClick={() => setIsOpen(!isOpen)}
                className="textRose hover:bg-gray-50 hover:text-gray-500 p-2 rounded-full cursor-pointer bgWhite shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 inline-flex items-center justify-center"
              >
                <Icons.Globe className="size-6" />
              </span>

              {isOpen && (
                <div className="absolute bottom-full mb-2 right-0 bgWhite rounded-lg shadow-xl border borderStone py-2 w-52 z-50">
                  <div className="px-4 py-2 border-b borderStone">
                    <p className="text-sm text-center font-semibold textgray8">
                      Select Language
                    </p>
                  </div>

                  <div className="max-h-[300px] overflow-y-auto">
                    {LANGUAGE_LIST.map((lang) => (
                      <button
                        id={lang.code}
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className="w-full px-4 py-2.5 text-left hover:bg-gray-50 transition-colors duration-150 flex items-center justify-between group"
                      >
                        <span className="textgray6 group-hover:text-gray-800">
                          {lang.name}
                        </span>
                        {language === lang.code && (
                          <Icons.Checked className="size-4 textgreen8" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <span
              onClick={() => setShowDrawer(true)}
              className="p-2 cursor-pointer textgray8 hover:text-rose-500 hover:bg-white/50 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Icons.CheronDown />
            </span>
          </div>
        </div>
      </footer>

      <DrawerFooter open={showDrawer} handleDrawer={setShowDrawer} />
    </>
  );
};

export default Footer;
