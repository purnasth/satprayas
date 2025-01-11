import React from 'react';
import {
  TbWifi,
  TbArmchair,
  TbMicrophone,
  TbParkingCircle,
  TbChefHat,
  TbPaperBag,
} from 'react-icons/tb';
import { GiCryptEntrance } from 'react-icons/gi';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import useFetchAPI from '../hooks/useFetchAPI';
import MasterSlider from './ui/MasterSlider';

const iconMap = {
  GiCryptEntrance,
  MdOutlineDeliveryDining,
  TbPaperBag,
  TbWifi,
  TbMicrophone,
  TbArmchair,
  TbChefHat,
  TbParkingCircle,
};

const Facility = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: homeFacilities,
    isLoading,
    isError,
  } = useFetchAPI('homeFacilities', `${apiUrl}home-facilities`);

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  const { heading, description, facilities, images } = homeFacilities;

  return (
    <main className="container">
      <div className="mx-auto flex max-w-lg flex-col items-center justify-center gap-4 text-center">
        <h3 className="text-3xl capitalize leading-snug md:text-4xl md:leading-snug lg:text-6xl lg:leading-snug">
          {heading}
        </h3>
        <p className="text-center text-sm text-dark/60">{description}</p>
      </div>

      <div className="mx-auto mt-8 max-w-5xl md:mt-12">
        <div className="grid grid-cols-3 gap-12 lg:mx-12">
          {facilities.slice(0, 3).map((facility) => {
            const IconComponent = iconMap[facility.icon];
            return (
              <div
                key={facility.id}
                className="flex flex-col items-center gap-4 p-4 text-center"
              >
                {IconComponent ? (
                  <IconComponent className="text-3xl text-dark/80 md:text-5xl" />
                ) : facility.image ? (
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="size-8 object-contain md:size-12"
                  />
                ) : null}
                <p className="text-xs md:text-sm lg:text-base xl:text-xl">
                  {facility.name}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-0 grid grid-cols-5 gap-12 md:mt-12 lg:grid-cols-5">
          {facilities.slice(3).map((facility) => {
            const IconComponent = iconMap[facility.icon];
            return (
              <div
                key={facility.id}
                className="flex flex-col items-center gap-4 p-4 text-center"
              >
                {/* <IconComponent className="text-2xl text-dark/80 md:text-4xl" /> */}

                {IconComponent ? (
                  <IconComponent className="text-2xl text-dark/80 md:text-4xl" />
                ) : facility.image ? (
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="size-6 object-contain md:size-9"
                  />
                ) : null}

                <p className="hidden text-xs md:block md:text-xs xl:text-base">
                  {facility.name}
                </p>
              </div>
            );
          })}
        </div>

        {/* {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="mx-auto mt-8 h-52 w-full rounded-3xl object-cover shadow md:h-96 lg:mt-12 lg:h-[55vh] lg:min-h-[28rem]"
          />
        ))} */}
        <MasterSlider
          slides={images}
          speed={500}
          hasContent={false}
          navigation={false}
          sizeClassName="mx-auto mt-8 h-52 w-full rounded-3xl object-cover shadow md:h-96 lg:mt-12 lg:h-[55vh] lg:min-h-[28rem]"
        />
      </div>
    </main>
  );
};

export default Facility;
