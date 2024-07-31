import React from 'react';
import { logoImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";


const NavBar = () => {
  return (
    <>
      <header className="w-full flex py-5 sm:px-10 px-5 justify-between items-center">
        <nav className="flex w-full py-4 px-8">
          <img src={logoImg} alt="logo" className="w-14 h-14 z-10" />
          <div className="flex flex-1 justify-center max-sm:hidden items-center">
            {navLists.map((nav) => (
              <div key={nav} className="z-10 px-5 text-lg cursor-pointer text-gray hover:text-white transition-all">
                {nav}
              </div>
            ))}
          </div>
          <div className="flex gap-7 max-sm:justify-end max-sm:flex-1 items-center">
            <img src={searchImg} alt="search" className="w-8 h-8 z-10" />
            <img src={bagImg} alt="bag" className="w-8 h-8 z-10" />
          </div>
        </nav>
      </header>

      
    </>
  );
};

export default NavBar;
