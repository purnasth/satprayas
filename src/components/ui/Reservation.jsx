import React from 'react';
import eventsPicture from '../../assets/images/events.webp';
import ReservationWhatsApp from './ReservationWhatsApp';
import useFetchAPI from '../../hooks/useFetchAPI';
import OrCallUs from './OrCallUs';
import DonationButton from './DonationButton';
import { Link } from 'react-router-dom';
import { TbHeartHandshake } from 'react-icons/tb';
import { LuPartyPopper } from 'react-icons/lu';

const Reservation = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: siteRegulars,
    isLoading,
    isError,
    // } = useFetchAPI('siteRegulars', `${apiUrl}site-regulars`);
  } = useFetchAPI('siteRegulars', `/api/siteregulars.json`);

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  const { email_address, contact_info } = siteRegulars;
  return (
    <>
      <div className="relative h-[110vh] w-full">
        <div className="pointer-events-none absolute inset-0 -z-10 size-full bg-dark/60" />
        {/* <div className="pointer-events-none absolute inset-0 -z-10 size-full bg-gradient-to-r from-black/50 via-black/90 to-black/50" /> */}
        {/* <div className="pointer-events-none absolute inset-0 -z-10 size-full bg-[url('https://static.vecteezy.com/system/resources/previews/005/725/807/large_2x/fast-food-seamless-pattern-vector.jpg')] bg-cover bg-repeat mix-blend-multiply" /> */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 size-full bg-cover bg-fixed bg-center bg-repeat mix-blend-multiply contrast-125"
          style={{ backgroundImage: `url(${eventsPicture})` }}
        />
        <div className="z-10 flex size-full items-center justify-center text-white">
          <div className="container mx-auto max-w-xl text-center">
            <h3 className="text-3xl md:text-5xl">Host Your Events</h3>
            <p
              className="mt-4 text-base font-extralight"
              style={{ textShadow: '2px 2px 4px #000' }}
            >
              One of the best ways to help Satprayas Nepal is by hosting your
              own event to benefit Satprayas Nepal in your hometown. Event types
              are flexible, therefore allowing you to combine your passion for
              helping children in need with your outside interests. We'll work
              with you to create fun and exciting event.
            </p>

            <div className="my-12 flex items-center justify-center text-black">
              <Link
                to="/contact"
                className="transition-300 group flex items-center justify-center gap-4 rounded-full border border-orange-500 bg-orange-500 px-8 py-4 text-sm font-semibold backdrop-blur hover:bg-orange-500/20 hover:text-orange-500 md:text-base"
                aria-label="Host Your Events"
                title="Host Your Events"
              >
                <LuPartyPopper className="transition-300 text-xl group-hover:animate-ping" />
                Submit Your Event
                <LuPartyPopper className="transition-300 text-xl group-hover:animate-ping" />
              </Link>
              {/* <ReservationWhatsApp /> */}
              {/* <DonationButton value="Host Your Events" router="/contact" /> */}
            </div>

            <OrCallUs />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
