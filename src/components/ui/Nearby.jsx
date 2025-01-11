import React, { useState, useEffect } from 'react';
import useFetchAPI from '../../hooks/useFetchAPI';

const Nearby = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: nearbyLocations,
    isLoading,
    isError,
  } = useFetchAPI('nearby', `${apiUrl}nearby`);

  const [isMapOpen, setIsMapOpen] = useState(false);
  const [mapUrl, setMapUrl] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    if (nearbyLocations && nearbyLocations.length > 0) {
      setSelectedLocation(nearbyLocations[0]);
      setMapUrl(nearbyLocations[0].map);
      setIsMapOpen(true);
    }
  }, [nearbyLocations]);

  const openMapModal = (url, location) => {
    setMapUrl(url);
    setSelectedLocation(location);
    setIsMapOpen(true);
    setTimeout(() => {
      const mapSection = document.getElementById('mapSection');
      if (mapSection) {
        mapSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }, 0);
  };

  const handleLocationClick = (location) => {
    openMapModal(location.map, location);
  };

  if (isLoading) return <></>;
  if (isError) return console.error(isError);

  return (
    <div className="flex flex-col items-center">
      <ul className="nearby-scroll sticky top-0 z-30 mb-12 flex w-full max-w-full flex-nowrap items-center justify-center gap-3 overflow-x-auto bg-orange-50 pb-1">
        {nearbyLocations?.length > 0 &&
          nearbyLocations.map((location) => (
            <li
              key={location.name}
              className={`my-2 min-w-64 cursor-pointer rounded-lg border border-orange-200 px-2 py-1 shadow transition-all duration-300 ease-linear hover:bg-orange-200/50 sm:px-4 sm:py-3 ${
                selectedLocation === location ? 'bg-orange-200 text-black' : ''
              }`}
              onClick={() => handleLocationClick(location)}
              aria-label={location.name}
              title="Get Direction"
            >
              <span className="text-xs font-semibold md:text-sm">
                {location.name}
              </span>

              <br />
              <button
                className="text-sm font-bold text-orange-600"
                onClick={(e) => {
                  e.stopPropagation();
                  handleLocationClick(location);
                }}
                title="Get Direction"
                aria-label={location.name}
              >
                Get Direction
              </button>
              <span className="ml-2 text-xs font-bold md:text-sm">
                - {location.distance}
              </span>
            </li>
          ))}
      </ul>
      <div className="size-full">
        {isMapOpen && (
          <div
            id="mapSection"
            className="relative w-full scroll-mt-32 rounded-lg md:scroll-mt-28 2xl:scroll-mt-32"
          >
            <iframe
              title="Map"
              src={mapUrl}
              className="h-64 w-full rounded-lg md:h-96 lg:h-[85vh]"
              frameBorder="0"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nearby;
