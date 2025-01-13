import React, { useState, useEffect } from 'react';
import { CgArrowLongUp } from 'react-icons/cg';

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={handleButtonClick}
        className={`${
          showButton ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        } transition-300 fixed bottom-4 left-4 z-40 inline-flex size-11 items-center justify-center gap-1 rounded-full border border-green-600 bg-white text-green-600 hover:border-green-600 hover:bg-green-600 hover:text-light`}
        title="Back to Top"
        aria-label="Back to Top"
      >
        <CgArrowLongUp className="text-2xl" />
      </button>
    </>
  );
};

export default BackToTop;
