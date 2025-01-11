import React from 'react';
import { Link } from 'react-router-dom';
import fire from '../assets/logos/fire.svg';
import FireButton from './ui/FireButton';
import OrCallUs from './ui/OrCallUs';
import useFetchAPI from '../hooks/useFetchAPI';
import LogoBar from './ui/LogoBar';

const Offers = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: offersContent,
    isLoading,
    isError,
  } = useFetchAPI('offers', `${apiUrl}offers`);

  if (isLoading) return null;
  if (isError || !offersContent || offersContent.length < 1) {
    console.error(isError || 'Not enough offers available');
    return null;
  }

  return (
    <>
      <LogoBar />
      <main>
        <div className="mx-auto mb-12 flex max-w-lg flex-col items-center justify-center gap-4 text-center md:mb-16 xl:mb-32">
          <h3 className="text-3xl capitalize leading-snug md:text-4xl md:leading-snug lg:text-6xl lg:leading-snug">
            Special Offers & Promotions
          </h3>
          <p className="text-center text-sm text-dark/60">
            Discover the latest offers and promotions from Satprayas Nepal
            and enjoy your favorite dishes at a discounted price. You, your
            friends, and your family are all welcome to join us!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:gap-12 xl:grid-cols-3">
          <div className="col-span-2 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {offersContent.slice(0, 2).map((content, index) => (
              <div key={index} className="group relative">
                <div className="overlay transition-300 absolute inset-0 -z-0 bg-gradient-to-t from-black/50 to-transparent outline outline-1 -outline-offset-[12px] outline-light/40 group-hover:outline-offset-0" />
                <img
                  src={content.image}
                  alt=""
                  className="-z-10 aspect-square size-full object-cover shadow"
                />
                <div className="absolute inset-0 z-10 flex size-full flex-col items-center justify-end px-12 py-8 text-center text-light">
                  <Link
                    to="/offers"
                    className="transition-300 flex items-center justify-center gap-2 rounded-full border border-light/50 bg-light/10 px-4 py-2 text-light backdrop-blur group-hover:bg-light/30"
                  >
                    <img
                      src={fire}
                      alt="Fire"
                      className="filter-white transition-300 size-4 scale-75 object-contain group-hover:scale-100 group-hover:filter-none"
                    />
                    Explore More
                    <img
                      src={fire}
                      alt="Fire"
                      className="filter-white transition-300 size-4 scale-75 object-contain group-hover:scale-100 group-hover:filter-none"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-md px-4">
            <p className="font-normal">
              We currently have
              <Link
                to="#"
                className="mx-1 bg-orange-300/50 px-2 font-extrabold"
              >
                {offersContent.length} offers
              </Link>
              available with us. Grab your favorite dish at a discounted price
              before it's too late!
            </p>
            <p className="mt-4 max-w-xs text-base opacity-70">
              For more information, please feel free to enquiry us via the
              enquiry button below.
            </p>
            <div className="ml-16 h-20 w-px bg-orange-300/30" />
            <div className="flex flex-col items-start justify-center gap-2 text-black">
              <FireButton value="Enquiry" router="/offers#enquiry" />
              <OrCallUs />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Offers;
