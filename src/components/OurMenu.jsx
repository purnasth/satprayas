import React from 'react';
import DonationButton from './ui/DonationButton';
import useFetchAPI from '../hooks/useFetchAPI';

const OurMenu = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const {
    data: menu,
    isLoading,
    isError,
  } = useFetchAPI('foodMenu', `${apiUrl}food-menu`);

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
          Services We Offer
        </h3>
        <p className="text-center text-sm text-dark/60">
          We provide physiotherapy treatment, educational services, speech
          therapy and other capability development services to differently abled
          children from trained assistant physiotherapists and teachers.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-16 lg:grid-cols-3 xl:grid-cols-3">
        {menu.map((cuisine) => (
          <div
            key={cuisine.id}
            className="transition-300 group relative overflow-hidden rounded-2xl border p-4 pt-36 shadow hover:border-dark/0 hover:shadow-none md:p-10"
          >
            <div className="absolute inset-0 -z-10 scale-75 rounded-2xl bg-orange-500 opacity-0 transition-all duration-200 ease-linear group-hover:scale-100 group-hover:rounded-2xl group-hover:opacity-100"></div>
            <h4 className="font-title text-2xl capitalize text-dark">
              {cuisine.name}
            </h4>
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="h-24 w-24 text-orange-500 opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.5 0-3-1.5-3-3s1.5-3 3-3 3 1.5 3 3-1.5 3-3 3zm0 6c-1.5 0-3 1.5-3 3s1.5 3 3 3 3-1.5 3-3-1.5-3-3-3zm-6-6c-1.5 0-3 1.5-3 3s1.5 3 3 3 3-1.5 3-3-1.5-3-3-3zm12 0c-1.5 0-3 1.5-3 3s1.5 3 3 3 3-1.5 3-3-1.5-3-3-3z"
                  />
                </svg>
              </div>
              <img
                src={cuisine.imageUrl}
                alt={cuisine.name}
                className="my-8 h-64 w-full rounded-xl object-cover shadow"
                draggable="false"
              />
            </div>
            <p className="text-base text-dark/60">{cuisine.description}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mx-auto h-28 w-px bg-orange-500/30" />
        <DonationButton value="View Full Menu" router="#" />
      </div>
    </main>
  );
};

export default OurMenu;
