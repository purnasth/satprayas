import React from 'react';
import FireButton from './ui/FireButton';

import useFetchAPI from '../hooks/useFetchAPI';

const About = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: aboutContents,
    isLoading,
    isError,
  } = useFetchAPI('aboutContents', `${apiUrl}about`);

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  const homePageContent = aboutContents.home_page[0];
  const { title, description, images } = homePageContent;

  return (
    <main className="pt-0">
      <div className="grid grid-cols-1 content-center gap-8 lg:grid-cols-3">
        <div className="flex items-center justify-center gap-8 pt-12 sm:gap-24 lg:block lg:space-y-24 lg:pt-64">
          <div className="flex items-end justify-end">
            <img
              src={images[3].src}
              alt="Foods"
              className="h-64 w-auto object-cover sm:h-80 lg:h-60 lg:w-44 2xl:h-72 2xl:w-52"
            />
          </div>
          <div className="flex items-end">
            <img
              src={images[2].src}
              alt="Foods"
              className="h-64 w-auto object-cover sm:h-80 lg:h-full lg:w-80 2xl:w-96"
            />
          </div>
        </div>
        <div className="top-0 flex max-h-fit flex-col items-center gap-4 bg-white text-center lg:sticky">
          <div className="bottom-0 h-0 w-px bg-dark/50 lg:h-10 xl:h-40"></div>
          <h3 className="mt-5 text-3xl capitalize leading-snug sm:text-2xl md:mt-16 md:text-4xl lg:text-6xl lg:leading-snug 2xl:text-8xl 2xl:leading-normal">
            {title}
          </h3>
          <p className="mb-3 text-center text-sm text-dark/60 md:mb-12 2xl:text-base">
            {description}
          </p>

          {/* <button className="mt-12 bg-orange-300 px-8 py-2 rounded-full">Explore More</button> */}

          <FireButton value="Explore More" router="/about" />
        </div>
        <div className="flex items-center justify-center gap-8 pt-12 sm:gap-24 lg:block lg:space-y-24 lg:pt-64">
          <div className="flex items-end justify-end">
            <img
              src={images[1].src}
              alt="Foods"
              className="h-64 w-auto object-cover sm:h-80 lg:h-full lg:w-80 2xl:w-96"
            />
          </div>
          <div className="flex">
            <img
              src={images[0].src}
              alt="Foods"
              className="h-64 w-auto object-cover sm:h-80 lg:h-60 lg:w-44 2xl:h-72 2xl:w-52"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
