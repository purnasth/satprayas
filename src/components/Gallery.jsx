import React from 'react';
import FoodGallery from './ui/FoodGallery';
import DeliveryPartners from './ui/DeliveryPartners';
import { Link } from 'react-router-dom';

const Gallery = ({ limit }) => {
  return (
    <>
      <section>
        <div className="z-10 flex flex-col items-center justify-center gap-2">
          <DeliveryPartners />
        </div>
        {/* <div
          className="pointer-events-none absolute inset-0 top-0 -z-10 h-full w-full bg-cover bg-center bg-no-repeat mix-blend-multiply opacity-20"
          style={{ backgroundImage: `url(${bgCuisine})` }}
        ></div> */}

        <main className="relative z-auto px-4">
          <div className="mx-auto mb-10 flex max-w-lg flex-col items-center justify-center gap-4 text-center md:mb-24">
            <h3 className="text-3xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-6xl lg:leading-snug">
              Smiles captured in our gallery
            </h3>
            <p className="text-center text-sm text-dark/60">
              Witness the smile and joy of our children indulging in the events
              and activities organized by Satprayas Nepal. We believe in the joy
              of giving and sharing. Building a better future for the children.
            </p>
          </div>

          <FoodGallery
            galleryClassName="columns-3 sm:columns-2 lg:columns-3 xl:columns-4 gap-2 md:gap-4"
            limit={limit}
          />

          <Link
            to="/gallery"
            className="transition-300 mx-auto mt-16 flex w-fit items-center justify-center gap-2 rounded-full border border-orange-300/50 bg-dark/50 bg-orange-300 px-6 py-2 font-medium text-dark shadow backdrop-blur-sm hover:bg-orange-300/30 hover:text-orange-500"
          >
            Explore Gallery
          </Link>
        </main>
      </section>
    </>
  );
};

export default Gallery;
