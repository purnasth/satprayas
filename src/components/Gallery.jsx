import React from 'react';
import foodGallery from '../assets/images/foods_gallery.webp';
import FoodGallery from './ui/FoodGallery';
import DeliveryPartners from './ui/DeliveryPartners';

const Gallery = ({ limit }) => {
  return (
    <>
      <section>
        <div className="z-10 mb-16 flex h-28 flex-col items-center justify-center gap-2 md:-mt-24 md:mb-0 md:translate-y-[55%]">
          <DeliveryPartners />
        </div>
        {/* <div
          className="pointer-events-none absolute inset-0 top-0 -z-10 h-full w-full bg-cover bg-center bg-no-repeat mix-blend-multiply opacity-20"
          style={{ backgroundImage: `url(${bgCuisine})` }}
        ></div> */}

        <main className="relative z-auto">
          <div
            className="pointer-events-none absolute inset-0 top-0 -z-10 h-full w-full bg-cover bg-top opacity-60"
            style={{
              backgroundImage: `url(${foodGallery})`,
            }}
          ></div>
          <div className="overlay absolute inset-0 -z-10 size-full bg-gradient-to-b from-orange-200/80 to-orange-50"></div>
          <div className="mx-auto mb-10 flex max-w-lg flex-col items-center justify-center gap-4 text-center md:mb-24">
            <h3 className="text-3xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-6xl lg:leading-snug">
              Taste the difference
            </h3>
            <p className="text-center text-sm text-dark/60">
              Witness the flavors of the Himalayas captured in the frames of our
              gallery. Our dishes are prepared with the finest ingredients and
              authentic recipes to give you a taste of the Himalayas.
            </p>
          </div>

          <FoodGallery
            galleryClassName="max-w-6xl mx-auto columns-3 sm:columns-2 lg:columns-3 xl:columns-3 gap-2 md:gap-4"
            limit={limit}
          />
        </main>
      </section>
    </>
  );
};

export default Gallery;
