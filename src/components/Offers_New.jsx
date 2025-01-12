import React from 'react';
import { offersContent } from '../constants/data';
import { Link } from 'react-router-dom';
import fire from '../assets/logos/fire.svg';
import DonationButton from './ui/DonationButton';

const Offers_New = () => {
  return (
    <main>
      <div className="mx-auto mb-24 flex max-w-lg flex-col items-center justify-center gap-4 text-center">
        <h3 className="text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-6xl lg:leading-snug">
          Promotions
        </h3>
        <p className="text-center text-sm text-dark/60">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum
          itaque nulla iste rem tempora, sequi ducimus a sit dicta, ullam minus
          vero.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-3 gap-16">
        {offersContent.slice(0, 3).map((content, index) => (
          <div
            key={index}
            className="transition-300 group relative outline outline-1 outline-offset-[12px] outline-dark/0 hover:outline-offset-0"
          >
            <div className="overlay transition-300 transition-300 absolute inset-0 -z-0 size-full bg-black/70 outline outline-1 -outline-offset-[12px] outline-light/40 group-hover:bg-black/80 group-hover:outline-offset-0" />
            <img
              src={content.image}
              alt=""
              className="-z-10 h-[36rem] w-full object-cover object-left-top shadow"
            />

            <div className="absolute inset-0 z-10 flex size-full flex-col items-center justify-between px-12 py-16 text-center text-light">
              <span className="text-sm font-light uppercase tracking-wider md:text-sm">
                {content.offer}
              </span>
              <div>
                <h2 className="text-shadow-dark-glow mx-8 max-w-xl text-center text-xl leading-relaxed md:mx-0 md:text-4xl md:leading-snug">
                  {content.title}
                </h2>

                <p className="line-clamp-2 text-center text-sm opacity-80">
                  {content.description}
                </p>
              </div>

              <Link
                to="#"
                className="transition-300 flex items-center justify-center gap-2 rounded-full border border-light/50 bg-light/10 px-4 py-2 text-light backdrop-blur group-hover:bg-light/30"
              >
                <img
                  src={fire}
                  alt="Fire"
                  className="filter-white transition-300 size-4 scale-75 object-contain group-hover:scale-100 group-hover:filter-none"
                />
                Enquiry Now
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
      <div className="container mt-32 max-w-xl space-y-2 text-center">
        {/* <p className="mt-4 text-base font-light">
          We are open from 11:00 AM to 10:00 PM every day.
        </p> */}
        <p className="font-normal">
          We currently have
          <span className="mx-1 bg-orange-300/50 px-2 font-extrabold">
            {offersContent.length} offers
          </span>
          available. Grab your favorite dish at a discounted price before it's
          too late!
        </p>
        <div className="mx-auto h-20 w-px bg-orange-300/30" />
        <div className="flex flex-col items-center justify-center gap-2 text-black">
          <DonationButton value="All Offers" router="#" />
          {/* <div className="flex flex-col items-center justify-center gap-0">
            <p>
              <span className="font-normal opacity-60">
                or call us directly
              </span>
              <a
                rel="noopener noreferrer"
                className="transition-linear ml-2 text-xl font-semibold"
                href="tel:+12509861755"
                target="_blank"
              >
                +1 250 986 1755
              </a>
            </p>
            <a
              rel="noopener noreferrer"
              className="transition-linear text-lg font-semibold"
              href="mailto:info@satprayas-nepal.com"
              target="_blank"
            >
              info@satprayas-nepal.com
            </a>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default Offers_New;
