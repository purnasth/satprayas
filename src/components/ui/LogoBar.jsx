import React from 'react';
import logo from '../../assets/logos/fire.png';

const LogoBar = () => {
  return (
    <div className="relative flex items-center justify-center">
      <span className="before:absolute before:left-0 before:h-[1px] before:w-[42%] before:bg-orange-200 before:content-[''] after:absolute after:right-0 after:h-[1px] after:w-[42%] after:bg-orange-200 after:content-[''] md:before:w-[47%] md:after:w-[47%]"></span>
      <img
        src={logo}
        alt="Fire"
        className="z-10 size-8 md:size-14 object-contain opacity-70"
      />
    </div>
  );
};

export default LogoBar;
