import React from 'react';
import bgFoods from '../../assets/images/bg_foods.webp';
import ReservationWhatsApp from './ReservationWhatsApp';
import useFetchAPI from '../../hooks/useFetchAPI';
import OrCallUs from './OrCallUs';
import DonationButton from './DonationButton';

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
          className="pointer-events-none absolute inset-0 -z-10 size-full bg-[url(https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/321432483_706593604426860_1749868995527399844_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=pzWv80XMRmEQ7kNvgFP7kHb&_nc_oc=AdjzEhGWQAmmSJL51Wio0HdSGWJn4XbQuUntOu2a5hcogr0ikBisDGhxWk_jlnk4BzePYYMrcOWAJCP7i3J7cBUt&_nc_zt=23&_nc_ht=scontent.fktm10-1.fna&_nc_gid=AF4XEfY00aiYjYmh63v1zOw&oh=00_AYCt9gv9HGgH5BOE5BFR-8ZzNLHj1OUHHbVvWOOJsk7ZPg&oe=678A898F)] bg-cover bg-fixed bg-repeat mix-blend-multiply"
          // style={{ backgroundImage: `url(${bgFoods})` }}
        />
        <div className="z-10 flex size-full items-center justify-center text-white">
          <div className="container mx-auto max-w-xl text-center">
            <h3 className="text-3xl md:text-5xl">Host Your Events</h3>
            <p className="mt-4 text-sm font-extralight opacity-80">
              One of the best ways to help Satprayas Nepal is by hosting your
              own event to benefit Satprayas Nepal in your hometown. Event types
              are flexible, therefore allowing you to combine your passion for
              helping children in need with your outside interests. We'll work
              with you to create fun and exciting event.
            </p>

            <div className="my-12 flex items-center justify-center text-black">
              {/* <ReservationWhatsApp /> */}
              <DonationButton value="Host Your Events" router="/contact" />
            </div>

            <OrCallUs />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
