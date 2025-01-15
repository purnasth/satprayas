import React from 'react';
import DonationButton from './ui/DonationButton';
import useFetchAPI from '../hooks/useFetchAPI';

const OurMenu = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: menu,
    isLoading,
    isError,
    // } = useFetchAPI('foodMenu', `${apiUrl}food-menu`);
  } = useFetchAPI('foodMenu', `/api/foodmenu.json`);

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }
  if (!menu || menu.length === 0) return null;

  return (
    <main>
      <div className="mx-auto mb-8 flex max-w-lg flex-col items-center justify-center gap-4 text-center md:mb-12 lg:mb-32">
        <h3 className="text-3xl capitalize leading-snug md:text-4xl md:leading-snug lg:text-6xl lg:leading-snug">
          Our Services
        </h3>
        <p className="text-center text-sm text-dark/60">
          We provide physiotherapy treatment, educational services, speech
          therapy and other capability development services to differently abled
          children from trained assistant physiotherapists and teachers.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-3">
        {menu.slice(0, 6).map((cuisine) => (
          <div
            key={cuisine.id}
            className="transition-300 group relative overflow-hidden rounded-2xl border p-4 pt-36 text-dark shadow hover:border-dark/0 hover:text-white hover:shadow-none md:p-10"
          >
            <div className="absolute -top-1/4 right-2 -z-10 size-80 rounded-full bg-orange-500 blur-[100px]"></div>
            <div className="absolute -bottom-12 -left-10 -z-10 size-52 rounded-full bg-orange-400 blur-[100px]"></div>
            <div className="absolute inset-0 -z-10 scale-90 rounded-2xl bg-orange-500 opacity-0 transition-all duration-200 ease-linear group-hover:scale-100 group-hover:rounded-2xl group-hover:opacity-100"></div>

            <h4 className="text-2xl capitalize">{cuisine.name}</h4>
            <div className="relative my-8 h-72 w-full overflow-hidden rounded-xl">
              <img
                src={cuisine.imageUrl}
                alt={cuisine.name}
                className="absolute left-0 top-0 size-full rounded-xl object-cover shadow transition-all duration-500 ease-in-out group-hover:scale-110"
                style={{
                  clipPath: `url(#clip-path-${cuisine.id})`,
                  opacity: 1,
                }}
                draggable="false"
              />
              <svg
                viewBox="0 0 480 480"
                className="absolute inset-0 size-full group-hover:hidden"
              >
                <defs>
                  <clipPath id={`clip-path-${cuisine.id}`}>
                    <path d="m452.3 154.4 8.5-47.6A75.6 75.6 0 0 0 373.2 19l-47.4 8.5c-16.7 3-34 .2-49-7.8l-1.1-.6c-22.3-12-49-12-71.4 0l-1.2.6c-15 8-32.2 10.8-48.9 7.8L106.7 19A75.6 75.6 0 0 0 19 106.7l8.5 47.5c3 16.7.3 34-7.8 49l-.6 1.1c-12 22.3-12 49 0 71.3l.6 1.3c8 15 10.8 32.2 7.8 48.9L19 373.3a75.6 75.6 0 0 0 87.7 87.7l47.5-8.5c16.7-3 34-.3 49 7.8l1.1.6c22.3 12 49 12 71.3 0l1.3-.6c15-8 32.2-10.8 48.9-7.8l47.5 8.5a75.6 75.6 0 0 0 87.7-87.7l-8.4-47.2c-3-16.9-.2-34.3 8-49.4a75.5 75.5 0 0 0 .3-71.6l-1-1.8c-8-15-10.7-32.2-7.6-48.9Z"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="line-clamp-2 text-base opacity-70 group-hover:opacity-90">
              {cuisine.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="mx-auto h-28 w-px bg-orange-500/30" />
        <DonationButton value="View All Services" router="/services" />
      </div>
    </main>
  );
};

export default OurMenu;
