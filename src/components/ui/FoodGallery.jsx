import React from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-video.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-fullscreen.css';
import useFetchAPI from '../../hooks/useFetchAPI';

const FoodGallery = ({ limit, galleryClassName }) => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: galleryImages,
    isLoading,
    isError,
  } = useFetchAPI('gallery', `${apiUrl}gallery`);

  if (isLoading) return null;
  if (isError) return console.error(isError);

  // Ensure galleryImages is always an array before calling map
  const displayedImages = limit
    ? (galleryImages || []).slice(0, limit)
    : galleryImages || [];

  return (
    <>
      <LightGallery
        plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen]}
        mode="lg-fade"
        elementClassNames={`${galleryClassName}`}
        options={{
          thumbnail: true,
          autoplay: true,
        }}
      >
        {displayedImages.map((image, index) => (
          <div
            key={index}
            className="group relative mb-2 flex break-inside-avoid overflow-hidden rounded-lg border border-dark/20 bg-white shadow-md md:mb-4 md:rounded-2xl"
            data-src={image.url}
          >
            <img
              className="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
              src={image.url}
              alt={image.alt}
              loading="lazy"
              id="dish-name"
            />
            <label
              htmlFor="dish-name"
              className="transition-300 pointer-events-none absolute bottom-0 left-1/2 z-10 h-fit w-full origin-bottom -translate-x-1/2 bg-gradient-to-t from-white to-transparent p-2 pt-12 text-center text-xs font-medium text-black group-hover:scale-y-0 group-hover:opacity-0 md:p-4 md:pt-12 md:text-sm md:font-bold lg:text-base"
            >
              {image.alt}
            </label>
          </div>
        ))}
      </LightGallery>
    </>
  );
};

export default FoodGallery;
