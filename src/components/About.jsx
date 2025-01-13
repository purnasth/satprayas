import React from 'react';
import DonationButton from './ui/DonationButton';

import useFetchAPI from '../hooks/useFetchAPI';
import Facility from './Facility';

const About = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: aboutContents,
    isLoading,
    isError,
    // } = useFetchAPI('aboutContents', `${apiUrl}about`);
  } = useFetchAPI('aboutContents', `/api/about.json`);

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  const homePageContent = aboutContents.home_page[0];
  const { title: homeTitle, description: homeDescription } = homePageContent;

  const { title, description, images } = aboutContents;

  return (
    <>
      <main>
        <div class="container space-y-6 text-center">
          <h3 className="text-3xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-4xl lg:leading-snug 2xl:text-7xl 2xl:leading-normal">
            {homeTitle}
          </h3>
          <p class="mx-auto max-w-4xl text-justify opacity-50 md:text-center">
            {homeDescription}
          </p>

          <Facility />
        </div>
      </main>

      <main className="pt-0">
        <div className="grid grid-cols-1 content-center items-center lg:grid-cols-5">
          <div className="col-span-2 flex flex-col items-start gap-4">
            <h3 className="mt-5 text-3xl capitalize leading-snug sm:text-2xl md:mt-16 md:text-4xl lg:text-5xl lg:leading-snug 2xl:text-6xl 2xl:leading-normal">
              {title}
            </h3>
            <p className="mb-3 text-sm text-dark/60 md:mb-12 md:text-base">
              {description}
            </p>

            {/* <button className="mt-12 bg-orange-500 px-8 py-2 rounded-full">Explore More</button> */}

            <DonationButton value="Explore More" router="/about" />
          </div>
          <div className="col-span-3 grid grid-cols-2 gap-4">
            {/* {images.map((image) => (
              <img
                key={image.id}
                src={image.src}
                alt={image.alt}
                className="h-64 w-full object-cover"
              />
            ))} */}
            <div className="ml-auto items-end justify-end space-y-4">
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="aspect-square h-80 w-auto rounded-xl object-cover shadow-md"
              />
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="aspect-square h-80 w-auto rounded-xl object-cover shadow-md"
              />
            </div>
            <div>
              <img
                src={images[2].src}
                alt={images[2].alt}
                className="h-full w-full rounded-xl object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
