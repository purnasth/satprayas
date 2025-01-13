import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { TbArrowNarrowLeft, TbArrowNarrowRight } from 'react-icons/tb';

import useFetchAPI from '../../hooks/useFetchAPI';
import { Link } from 'react-router-dom';

const TestimonialSlider = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: testimonialsContent,
    isLoading,
    isError,
    // } = useFetchAPI('testimonials', `${apiUrl}testimonials`);
  } = useFetchAPI('testimonials', `/api/testimonials.json`);

  const swiperRef = useRef(null);

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  if (isLoading) return null;
  if (isError) return console.error(isError);

  return (
    <div className="relative mt-4">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full"
      >
        {testimonialsContent.map((content, index) => (
          <SwiperSlide key={index} className="flex flex-col items-start">
            <span className="size-12 rounded-full bg-orange-600 p-1 text-7xl text-white">
              &#x201C;
            </span>
            <div className="mt-8 max-h-36 overflow-y-auto">
              <p className="review mr-5 text-justify text-sm sm:text-lg md:text-pretty">
                {content.review}
              </p>
            </div>
            <Link
              to={content.link}
              target="_blank"
              className="mt-6 flex items-center justify-center gap-3"
            >
              {/* <img
                src={content.sourceImage}
                alt={content.author}
                className="size-12 rounded-full border bg-white object-contain shadow"
              /> */}
              <div className="text-left">
                <p className="caps text-lg font-semibold">{content.author}</p>
                {/* <p className="text-xs">{content.source}</p> */}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute right-4 bottom-0 z-10 flex items-end justify-between gap-3">
        <button
          className="rounded-full border p-1 text-2xl text-dark shadow backdrop-blur hover:bg-dark/10"
          onClick={handlePrev}
          aria-label="Previous"
          title="Previous"
        >
          <TbArrowNarrowLeft />
        </button>
        <button
          className="rounded-full border p-1 text-2xl text-dark shadow backdrop-blur hover:bg-dark/10"
          onClick={handleNext}
          aria-label="Next"
          title="Next"
        >
          <TbArrowNarrowRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
