import React from 'react';
import fire from '../../assets/logos/fire.svg';
import { Link } from 'react-router-dom';

const FireButton = ({ value, router }) => {
  return (
    <>
      <Link
        to={router}
        className="transition-300 group flex items-center justify-center gap-2 rounded-full border border-orange-300 bg-orange-300 px-4 py-2 text-sm hover:bg-light hover:text-orange-400 md:text-base"
      >
        <img
          src={fire}
          alt="Fire"
          className="filter-black transition-300 size-4 scale-75 object-contain group-hover:scale-100 group-hover:filter-none"
        />
        {value}
        <img
          src={fire}
          alt="Fire"
          className="filter-black transition-300 size-4 scale-75 object-contain group-hover:scale-100 group-hover:filter-none"
        />
      </Link>
    </>
  );
};

export default FireButton;
