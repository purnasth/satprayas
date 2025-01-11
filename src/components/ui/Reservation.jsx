import React from 'react';
import bgFoods from '../../assets/images/bg_foods.webp';
import ReservationWhatsApp from './ReservationWhatsApp';
import useFetchAPI from '../../hooks/useFetchAPI';
import OrCallUs from './OrCallUs';

const Reservation = () => {
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

  const { email_address, contact_info } = siteRegulars;
  return (
    <>
      <div className="bg-alt-bg/40 container relative max-w-5xl p-8 shadow">
        <div className="pointer-events-none absolute inset-0 -z-10 size-full bg-dark/80" />
        {/* <div className="pointer-events-none absolute inset-0 -z-10 size-full bg-gradient-to-r from-black/50 via-black/90 to-black/50" /> */}
        {/* <div className="pointer-events-none absolute inset-0 -z-10 size-full bg-[url('https://static.vecteezy.com/system/resources/previews/005/725/807/large_2x/fast-food-seamless-pattern-vector.jpg')] bg-cover bg-repeat mix-blend-multiply" /> */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 size-full bg-cover bg-repeat mix-blend-multiply"
          style={{ backgroundImage: `url(${bgFoods})` }}
        />
        <div className="z-10 contents text-white">
          <div className="container mx-auto my-16 max-w-xl text-center">
            <h3 className="text-3xl font-semibold md:text-4xl">
              Reserve a Table
            </h3>
            <p className="mt-4 text-base font-light text-gray-300">
              Looking to reserve a table? If you have any queries or would like
              to make a reservation at our restaurant, please don't hesitate to
              contact us.
            </p>

            <div className="my-12 flex items-center justify-center text-black">
              <ReservationWhatsApp />
            </div>

            <OrCallUs />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
