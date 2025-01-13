import React from 'react';
import { TbPalette, TbSoup } from 'react-icons/tb';

import { FaHandsHoldingChild } from 'react-icons/fa6';

import { MdHealthAndSafety } from 'react-icons/md';

import { RiServiceFill } from 'react-icons/ri';

import { IoMdBook } from 'react-icons/io';

import { BsChatHeart } from 'react-icons/bs';

import useFetchAPI from '../hooks/useFetchAPI';

const iconMap = {
  TbPalette,
  TbSoup,
  FaHandsHoldingChild,
  MdHealthAndSafety,
  RiServiceFill,
  IoMdBook,
  BsChatHeart,
};

const Facility = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: homeFacilities,
    isLoading,
    isError,
    // } = useFetchAPI('homeFacilities', `${apiUrl}home-facilities`);
  } = useFetchAPI('homeFacilities', `/api/homeFacilities.json`);

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  const { facilities } = homeFacilities;

  return (
    <>
      <div className="mx-auto max-w-5xl">
        <div className="mt-12 grid grid-cols-3 gap-12 lg:mx-12">
          {facilities.slice(0, 3).map((facility) => {
            const IconComponent = iconMap[facility.icon];
            return (
              <div
                key={facility.id}
                className="flex flex-col items-center gap-4 p-4 text-center"
              >
                {IconComponent ? (
                  <IconComponent className="text-3xl text-green-800 md:text-5xl" />
                ) : facility.image ? (
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="filter-green size-8 object-contain md:size-12"
                  />
                ) : null}
                <p className="text-xs md:text-sm lg:text-base xl:text-xl">
                  {facility.name}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-0 grid grid-cols-5 gap-12 md:mt-12 lg:grid-cols-4">
          {facilities.slice(3).map((facility) => {
            const IconComponent = iconMap[facility.icon];
            return (
              <div
                key={facility.id}
                className="flex flex-col items-center gap-4 p-4 text-center"
              >
                {/* <IconComponent className="text-2xl text-dark/80 md:text-4xl" /> */}

                {IconComponent ? (
                  <IconComponent className="text-2xl text-green-800 md:text-4xl" />
                ) : facility.image ? (
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="filter-green size-6 object-contain md:size-9"
                  />
                ) : null}

                <p className="hidden text-xs md:block md:text-xs xl:text-base">
                  {facility.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Facility;
