import React from 'react';
import FireButton from './ui/FireButton';

// import nepali from '../assets/images/cuisine/nepali.png';
// import indian from '../assets/images/cuisine/indian.png';
// import chinese from '../assets/images/cuisine/chinese.png';

// import seafood from '../assets/images/menu/seafood.png';
// import chicken from '../assets/images/menu/butterchicken.png';
// import veg from '../assets/images/menu/veg.png';
// import lamb from '../assets/images/menu/lamb.png';
// import sizzler from '../assets/images/menu/sizzler.png';
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
          Highlighted Dishes & Specialties
        </h3>
        <p className="text-center text-sm text-dark/60">
          Discover the diverse flavors of our menu with authentic Nepalese,
          Chinese, and Indian dishes. We have something for everyone! Enjoy your
          favorite dish with your friends and family.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-16 lg:grid-cols-3 xl:grid-cols-3">
        {menu.map((cuisine, index) => (
          <div key={cuisine.id}>
            {/* Mobile devices: unified design */}
            <div className="block lg:hidden">
              <div className="flex items-center justify-center">
                <img
                  src={cuisine.imageUrl}
                  alt={cuisine.name}
                  className="hover:animation-paused size-64 animate-spin rounded-full bg-white object-cover p-4"
                  draggable="false"
                />
              </div>
              <div className="-mt-32 rounded-2xl bg-orange-300/40 p-4 pt-36 md:p-8 md:pt-40">
                <h4 className="mb-2 font-title text-xl font-bold capitalize text-dark">
                  {cuisine.name}
                </h4>
                <ul className="scroll flex h-24 flex-wrap gap-2 gap-y-0 overflow-y-auto">
                  {cuisine.foodMenu.map((dish, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-600 2xl:text-base"
                    >
                      {dish.name}
                      {idx < cuisine.foodMenu.length - 1 && ','}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Non-mobile devices: conditional design */}
            <div className="hidden lg:block">
              {index === 1 || index === 4 ? (
                <>
                  <div className="rounded-2xl bg-orange-300/40 p-4 pb-36 md:p-8 md:pb-40">
                    <h4 className="mb-2 font-title text-xl font-bold capitalize text-dark">
                      {cuisine.name}
                    </h4>
                    <ul className="flex flex-wrap gap-2 gap-y-0">
                      {cuisine.foodMenu.map((dish, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 2xl:text-base"
                        >
                          {dish.name}
                          {idx < cuisine.foodMenu.length - 1 && ','}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="-mt-32 flex items-center justify-center">
                    <img
                      src={cuisine.imageUrl}
                      alt={cuisine.name}
                      className="hover:animation-paused size-64 animate-spin rounded-full bg-white object-cover p-4"
                      draggable="false"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-center md:mt-8">
                    <img
                      src={cuisine.imageUrl}
                      alt={cuisine.name}
                      className="hover:animation-paused size-64 animate-spin rounded-full bg-white object-cover p-4"
                      draggable="false"
                    />
                  </div>
                  <div className="-mt-32 rounded-2xl bg-orange-300/40 p-4 pt-36 md:p-8 md:pt-40">
                    <h4 className="mb-2 font-title text-xl font-bold capitalize text-dark">
                      {cuisine.name}
                    </h4>
                    <ul className="scroll flex h-24 flex-wrap gap-2 gap-y-0 overflow-y-auto">
                      {cuisine.foodMenu.map((dish, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 2xl:text-base"
                        >
                          {dish.name}
                          {idx < cuisine.foodMenu.length - 1 && ','}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <div className="mx-auto h-28 w-px bg-orange-300/30" />
        {/* <FireButton value="View Full Menu" router="/food-menu" /> */}
        <FireButton value="View Full Menu" router="#" />
      </div>
    </main>
  );
};

export default OurMenu;
