import React from 'react';
import fire from '../../assets/logos/fire.png';
import { MdDoneAll } from 'react-icons/md';
import useFetchAPI from '../../hooks/useFetchAPI';
import { TbWifi } from 'react-icons/tb';
import { TbMusic } from 'react-icons/tb';
import { TbParkingCircle } from 'react-icons/tb';
import { TbDog } from 'react-icons/tb';
import { TbUsersGroup } from 'react-icons/tb';
import { TbSoup } from 'react-icons/tb';
import { TbAirTrafficControl } from 'react-icons/tb';
import { TbPlant2 } from 'react-icons/tb';
import { TbBeer } from 'react-icons/tb';
import { TbChefHat } from 'react-icons/tb';
import { MdOutlineDinnerDining } from 'react-icons/md';
import { MdOutlineTableRestaurant } from 'react-icons/md';
import { MdOutlineEventSeat } from 'react-icons/md';
import { MdOutlineRoomService } from 'react-icons/md';
import { MdOutlineFoodBank } from 'react-icons/md';

// const facilities = [
//   { id: 1, name: 'Free Wi-Fi' },
//   { id: 2, name: 'Outdoor Patio Seating' },
//   { id: 3, name: 'Live Entertainment' },
//   { id: 4, name: 'Private Event Space' },
//   // { id: 5, name: 'Wheelchair Accessible' },
//   { id: 6, name: 'Parking Available' },
//   { id: 7, name: 'Pet-Friendly Patio' },
//   { id: 8, name: 'Family-Friendly Dining' },
//   { id: 9, name: 'Climate-Controlled Seating' },
//   { id: 10, name: 'Online Reservations' },
//   { id: 11, name: 'Vegetarian Options' },
//   { id: 12, name: 'Gluten-Free Options' },
//   { id: 13, name: 'Licensed Full Bar' },
//   // { id: 14, name: 'Takeout and Curbside Pickup' },
//   { id: 15, name: 'Catering & Event Services' },
//   // { id: 16, name: 'Free Birthday Dessert' },
//   // { id: 17, name: 'Loyalty Rewards Program' },
//   { id: 18, name: 'Chef’s Tasting Menu' },
//   { id: 19, name: 'Seasonal Specialties' },
//   { id: 20, name: 'Scenic View Dining' },
// ];

const iconMap = {
  TbWifi,
  TbMusic,
  TbDog,
  TbPlant2,
  TbUsersGroup,
  TbSoup,
  TbAirTrafficControl,
  MdOutlineTableRestaurant,
  MdOutlineEventSeat,
  MdOutlineRoomService,
  MdOutlineFoodBank,
  MdOutlineDinnerDining,
  TbParkingCircle,
  TbBeer,
  TbChefHat,  
};

const FacilityList = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: facilities,
    isLoading,
    isError,
  } = useFetchAPI('facilities', `${apiUrl}facilities`);

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  return (
    <>
      <main>
        <div className="mb-10 flex flex-col items-start justify-start gap-4 text-pretty md:mb-16 lg:mb-24">
          <span className="text-xl opacity-70">Facilities</span>
          <h3 className="max-w-3xl text-xl leading-snug sm:text-2xl md:text-4xl lg:text-7xl lg:leading-tight">
            The restaurant is equipped with:
          </h3>
        </div>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {facilities.map((facility) => {
            const IconComponent = iconMap[facility.icon];
            return (
              <li
                key={facility.id}
                className="group relative inline-flex items-center gap-2 overflow-hidden text-pretty border border-y px-4 py-3 text-left text-xs transition-all duration-150 ease-linear hover:border-orange-500 hover:bg-orange-500/20 hover:font-bold hover:text-orange-600 md:text-base"
              >
                {IconComponent ? (
                  <IconComponent className="text-lg transition-all duration-300 ease-linear group-hover:scale-125" />
                ) : facility.icon ? (
                  <img
                    src={facility.icon}
                    alt={facility.name}
                    className="size-4 object-contain transition-all duration-300 ease-linear group-hover:scale-125"
                  />
                ) : (
                  <MdDoneAll className="transition-all duration-300 ease-linear group-hover:scale-125" />
                )}
                {/* <MdDoneAll className="mr-2 inline-block" /> */}
                <img
                  src={fire}
                  alt="Fire Icon"
                  className="absolute right-2 top-1/2 -z-10 size-8 -translate-y-1/2 object-contain opacity-0 transition-all duration-300 ease-in group-hover:opacity-80"
                />
                {facility.name}
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default FacilityList;
