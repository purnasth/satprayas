// import React from 'react';
// import { testimonialsContent } from '../../constants/data';

// const TestimonialSlider = () => {
//   return (
//     <>
//       {testimonialsContent.map((content, index) => (
//         <div key={index} className="mt-8">
//           <p className="review text-justify text-sm sm:text-base md:text-pretty">
//             {content.review}
//           </p>
//           <div className="mt-2 flex items-center justify-between gap-12">
//             <div className="flex items-center justify-center gap-3">
//               <img
//                 src={content.sourceImage}
//                 alt=""
//                 className="size-12 rounded-full border object-cover shadow"
//               />
//               <div className="space-y-0 text-left">
//                 <p className="caps text-base font-bold">{content.author}</p>
//                 <p className="text-xs">{content.source}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default TestimonialSlider;

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { TbArrowNarrowLeft, TbArrowNarrowRight } from 'react-icons/tb';

// import { testimonialsContent } from '../../constants/data';
import useFetchAPI from '../../hooks/useFetchAPI';
import { Link } from 'react-router-dom';

const TestimonialSlider = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: testimonialsContent,
    isLoading,
    isError,
  } = useFetchAPI('testimonials', `${apiUrl}testimonials`);

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
    <div className="relative mt-8">
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
          <SwiperSlide key={index} className="flex flex-col items-center">
            <p className="review text-justify text-sm sm:text-base md:text-pretty">
              {content.review}
            </p>
            <Link
              to={content.link}
              target='_blank'
              className="mt-6 flex items-center justify-center gap-3"
            >
              <img
                src={content.sourceImage}
                alt={content.author}
                className="size-12 rounded-full border bg-white object-contain shadow"
              />
              <div className="text-left">
                <p className="caps text-base font-bold">{content.author}</p>
                <p className="text-xs">{content.source}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-6 left-0 right-0 z-10 flex items-center justify-between">
        <button
          className="swiper-button-prev rounded-full border p-1 text-dark shadow backdrop-blur hover:bg-dark/10"
          onClick={handlePrev}
          aria-label="Previous"
          title="Previous"
        >
          <TbArrowNarrowLeft />
        </button>
        <button
          className="swiper-button-next rounded-full border p-1 text-dark shadow backdrop-blur hover:bg-dark/10"
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
