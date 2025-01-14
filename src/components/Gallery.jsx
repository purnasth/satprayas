import React from 'react';
import FoodGallery from './ui/FoodGallery';
import { Link } from 'react-router-dom';

const Gallery = ({ limit }) => {
  return (
    <>
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
          galleryClassName="columns-3 sm:columns-2 lg:columns-3 xl:columns-5 gap-2 md:gap-4"
          limit={limit}
        />

        <div className="flex flex-col items-center justify-center mt-5">
          <div className="mx-auto h-28 w-px bg-orange-500/30" />
          <Link
            to="/gallery"
            className="transition-300 mx-auto flex w-fit items-center justify-center gap-2 rounded-full border-2 border-orange-500/50 bg-orange-500 px-6 py-2 font-medium text-light shadow backdrop-blur-sm hover:bg-light hover:text-orange-500"
          >
            Explore Gallery
          </Link>
        </div>
      </main>
    </>
  );
};

export default Gallery;
