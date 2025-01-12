import React from 'react';
import { PiHandHeartFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const DonationButton = ({ value, router }) => {
  return (
    <>
      <Link
        to={router}
        className="transition-300 group flex items-center justify-center gap-2 rounded-full border border-orange-300 bg-orange-300 px-6 py-2 text-sm font-semibold hover:bg-orange-300/50 hover:text-orange-500 md:text-base"
      >
        {value}
        <PiHandHeartFill className="animate-bounce text-xl" />
      </Link>
    </>
  );
};

export default DonationButton;
