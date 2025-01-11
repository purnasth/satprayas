import React from 'react';
import { offersContent, testimonialsContent } from '../constants/data';
import { Link } from 'react-router-dom';
import fire from '../assets/logos/fire.svg';

const OffersReview = () => {
  return (
    <main>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-12">
          <div className="col-span-2">
            <div className="space-y-4">
              <h5 className="caps text-2xl capitalize md:text-4xl">
                Offers & Promotions
              </h5>
              <p className="max-w-lg text-xs text-dark/60 md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                quas alias ipsam expedita facere provident amet voluptatem
                reprehenderit.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8">
              {offersContent.slice(0, 2).map((content, index) => (
                <div key={index} className="group relative">
                  <div className="overlay transition-300 absolute inset-0 -z-0 size-full bg-black/70 group-hover:bg-black/80"></div>
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
            {/* <div className="mx-auto mt-16 text-center">
              <Link to="#" className="rounded-full bg-orange-300 px-6 py-2">
                Explore more offers
              </Link>
            </div> */}
          </div>
          <div className="col-span-1">
            <div className="space-y-4">
              <h5 className="caps text-4xl capitalize">Feedback</h5>
              <p className="max-w-xs text-xs text-dark/60 md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia maxime
              </p>
            </div>
            <div className="stop-lenis mt-14 max-h-[36rem] space-y-10 overflow-y-auto pr-2">
              {testimonialsContent.slice(0, 2).map((content, index) => (
                <div key={index} className="space-y-4">
                  <div>
                    <span className="pointer-events-none -z-10 -ml-2 size-8 text-[10rem] leading-[0.75] text-gray-200">
                      “
                    </span>
                    <p className="review -mt-16 text-justify text-sm sm:text-base md:text-pretty">
                      {content.review}
                    </p>
                    <div className="mt-2 flex items-center justify-between gap-12">
                      <div className="flex items-center justify-center gap-3">
                        <img
                          src={content.sourceImage}
                          alt=""
                          className="size-12 rounded-full border object-cover shadow"
                        />
                        <div className="space-y-0">
                          <p className="caps text-base font-bold">
                            {content.author}
                          </p>
                          <p className="text-xs">{content.source}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OffersReview;
