'use client';

import { useEffect, useState } from 'react';
import { FaGithub, FaMedium, FaLinkedin } from "react-icons/fa";
import { sourceCodePro700 } from '../../styles/fonts';

export default function PageHeader() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);


  return (
    <header
      className={`${
        sourceCodePro700.className
      } fixed top-0 left-0 w-full shadow-sm bg-white px-8 py-6 sm:py-6 md:py-4 flex items-center z-50 transition-transform duration-300 ${
        isScrollingUp ? "translate-y-0 ease-in" : "-translate-y-full ease-out"
      }`}
    >
      <h1 className="text-2xl font-bold absolute left-1/2 transform -translate-x-1/2">
        Ben Gao
      </h1>
      <div className="header-icons hidden sm:flex gap-4 ml-auto">
        <button
          onClick={() => window.open("https://github.com/benxgao", "_blank")}
          title="GitHub"
          className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200"
        >
          <FaGithub className="w-5 h-5 hover:text-fuchsia-300" />
        </button>
        <button
          onClick={() =>
            window.open("https://linkedin.com/in/benxgao", "_blank")
          }
          title="LinkedIn"
          className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200"
        >
          <FaLinkedin className="w-5 h-5 hover:text-amber-300" />
        </button>
        <button
          onClick={() => window.open("https://medium.com/@benxgao", "_blank")}
          title="Medium"
          className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200"
        >
          <FaMedium className="w-5 h-5 hover:text-sky-300" />
        </button>
      </div>
    </header>
  );
}
