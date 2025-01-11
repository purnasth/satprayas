import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import useFetchAPI from '../hooks/useFetchAPI';
import { Link } from 'react-router-dom';

const Popup = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: popup,
    isLoading,
    isError,
  } = useFetchAPI('popup', `${apiUrl}popup`);

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const isPopupShown = sessionStorage.getItem('isPopupShown');
    if (!isPopupShown) {
      setIsOpen(true);
      sessionStorage.setItem('isPopupShown', 'true');
    }

    const handleBeforeUnload = () => {
      sessionStorage.removeItem('isPopupShown');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const closePopup = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex >= popup.length - 1) {
      setIsOpen(false);
    }
  };

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && currentIndex < popup.length && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm"
          onClick={closePopup}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="relative mx-auto w-[90%] sm:w-4/5 h-auto xl:w-auto xl:h-4/5 aspect-square overflow-hidden rounded-xl bg-white p-0 shadow-lg"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <button
              className="absolute right-2 top-3 z-10 flex size-9 cursor-pointer items-center justify-center rounded-full bg-black bg-opacity-50 p-1 text-xl text-white"
              onClick={closePopup}
            >
              &times;
            </button>
            <Swiper
              modules={[Navigation, Autoplay, EffectFade]}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              autoplay={{ delay: currentIndex === 0 ? 0 : 3000 }}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              speed={2000}
              loop={true}
            >
              {popup[currentIndex].sliders.map((content, index) => (
                <SwiperSlide key={index}>
                  {popup[currentIndex].type === 'image' ? (
                    <Link
                      to={content.link}
                      className="flex flex-col items-center"
                      target="_blank"
                    >
                      <img
                        src={content.src}
                        alt={content.alt}
                        className="aspect-square size-full object-cover shadow"
                      />
                    </Link>
                  ) : (
                    <div className="flex flex-col items-center">
                      <iframe
                        src={`${content.src}?autoplay=1&mute=1`}
                        title={content.alt}
                        className="aspect-square size-full object-cover shadow"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-prev absolute left-0 top-1/2 z-10 m-2 size-10 -translate-y-1/2 transform cursor-pointer justify-center rounded-full bg-white/50 text-2xl text-black backdrop-blur-sm">
              &larr;
            </div>
            <div className="swiper-button-next absolute right-0 top-1/2 z-10 m-2 size-10 -translate-y-1/2 transform cursor-pointer justify-center rounded-full bg-white/50 text-2xl text-black backdrop-blur-sm">
              &rarr;
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
