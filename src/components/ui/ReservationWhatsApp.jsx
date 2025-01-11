import React from 'react';
import { TbBrandWhatsapp } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import useFetchAPI from '../../hooks/useFetchAPI';

const ReservationWhatsApp = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: siteRegulars,
    isLoading,
    isError,
  } = useFetchAPI('siteRegulars', `${apiUrl}site-regulars`);

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  const { whatsapp_a } = siteRegulars;
  return (
    <>
      <Link
        to={`https://wa.me/${whatsapp_a}`}
        target="_blank"
        rel="noreferrer"
        className="transition-300 group flex items-center justify-center gap-2 rounded-full border border-orange-300 bg-orange-300 px-8 py-4 text-sm font-semibold hover:bg-orange-300/20 hover:text-orange-500 md:text-base"
        aria-label="Reservation"
        title="Reservation"
      >
        Make a Reservation
        <TbBrandWhatsapp className="text-xl" />
      </Link>
    </>
  );
};

export default ReservationWhatsApp;
