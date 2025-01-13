import React from 'react';
import useFetchAPI from '../hooks/useFetchAPI';
import MasterSlider from './ui/MasterSlider';

const Hero = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: slideShow,
    isLoading,
    isError,
    // } = useFetchAPI('slideShow', `${apiUrl}slideshow`);
  } = useFetchAPI('slideShow', `/api/slideshow.json`);

  if (isLoading) return null;
  if (isError) return console.error(isError);

  return (
    <>
      <section className="group relative m-0 p-0">
        <MasterSlider
          slides={slideShow}
          speed={1000}
          navigation={false}
          sizeClassName="min-h-[34rem] w-full object-cover object-center sm:h-[50vh] md:h-[70vh] lg:h-screen"
        />
      </section>
    </>
  );
};

export default Hero;
