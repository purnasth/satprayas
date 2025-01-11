import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TbBrandWhatsapp } from 'react-icons/tb';
import useFetchAPI from '../../hooks/useFetchAPI';

const WhatsApp = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: siteRegulars,
    isLoading,
    isError,
  } = useFetchAPI('siteRegulars', `${apiUrl}site-regulars`);

  const [showButton, setShowButton] = useState(false);

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

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  const { whatsapp_a } = siteRegulars;

  return (
    <Link
      to={`https://wa.me/${whatsapp_a}`}
      target="_blank"
      rel="noreferrer"
      className={`${
        showButton
          ? 'translate-y-0 scale-75 sm:scale-100'
          : 'translate-y-20 scale-0'
      } transition-300 fixed bottom-4 right-4 z-20 flex size-11 animate-pulse items-center justify-center rounded-full border border-green-600/30 bg-light p-1 text-green-600 hover:border-green-600 hover:bg-green-600 hover:text-light`}
      title="WhatsApp"
      aria-label="WhatsApp"
    >
      <TbBrandWhatsapp className="p-px text-4xl" />
    </Link>
  );
};

export default WhatsApp;
