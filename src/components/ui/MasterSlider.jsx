import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { TbArrowNarrowRight, TbArrowNarrowLeft } from 'react-icons/tb';
import DonationButton from './DonationButton';

const MasterSlider = ({
  slides = [],
  autoplay = true,
  effect = 'fade',
  speed = 2000,
  delay = 5000,
  navigation = true,
  sizeClassName = 'relative flex h-auto items-center justify-center',
}) => (
  <>
    <Swiper
      modules={[Navigation, Autoplay, EffectFade]}
      navigation={
        navigation && {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      }
      autoplay={autoplay ? { delay } : false}
      effect={effect}
      fadeEffect={{ crossFade: true }}
      loop={true}
      speed={speed}
      className="h-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className={`${sizeClassName}`}>
          <img
            src={slide.image}
            alt={slide.title || `Slide ${index + 1}`}
            className="absolute inset-0 bottom-0 -z-10 size-full object-scale-down object-bottom"
          />
          <div className="pointer-events-auto z-10 mt-40 flex flex-col items-center justify-start">
            {slide.title && (
              <>
                <h2 className="text-shadow-dark-glow mx-8 max-w-xl text-center text-xl font-bold leading-relaxed text-dark md:mx-0 md:text-4xl md:leading-snug">
                  {slide.title}
                </h2>
                <p className="my-6 max-w-md text-center">{slide.description}</p>
              </>
            )}
            {/* <img
                src={fire}
                alt="Fire Icon"
                className="size-12 rounded-full border border-orange-500 object-contain p-1"
              /> */}
            <DonationButton value="Make a donation" router="/donate" />
          </div>
        </SwiperSlide>
      ))}

      {navigation && (
        <>
          <button
            aria-label="Next"
            title="Next"
            className="swiper-button-next transition-300 absolute right-4 top-1/2 z-10 flex size-11 translate-y-1/2 transform items-center justify-center rounded-full border border-light/50 bg-light/20 p-2 text-light shadow-lg backdrop-blur-sm hover:bg-light/50"
          >
            <TbArrowNarrowRight />
          </button>
          <button
            aria-label="Previous"
            title="Previous"
            className="swiper-button-prev transition-300 absolute left-4 top-1/2 z-10 flex size-11 translate-y-1/2 transform items-center justify-center rounded-full border border-light/50 bg-light/20 p-2 text-light shadow-lg backdrop-blur-sm hover:bg-light/50"
          >
            <TbArrowNarrowLeft />
          </button>
        </>
      )}
    </Swiper>
    <style>{`
      .swiper-button-next::after,
      .swiper-button-prev::after {
        display: none !important;
      }
    `}</style>
  </>
);

export default MasterSlider;
