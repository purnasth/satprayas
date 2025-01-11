// import React from 'react';
// import fire from '../assets/logos/fire.png';
// import bgCuisine from '../assets/images/bg_cuisine.png';
// import Logo from './ui/Logo';

// const Hero = () => {
//   return (
//     <>
//       <section className="group relative m-0 p-0">
//         {/* <div className="overlay pointer-events-none absolute inset-0 z-10 size-full bg-black/20"></div> */}
//         {/* <div className="overlay absolute inset-0 z-10 size-full bg-gradient-to-b from-transparent to-black"></div> */}
//         {/* <div className="overlay pointer-events-none absolute inset-0 z-10 size-full bg-gradient-to-b from-black/60 to-black/20"></div> */}
//         <img
//           // src="https://wallpapers.com/images/hd/food-4k-anl1yr892h6ccjeb.jpg"
//           src={bgCuisine}
//           alt="Satprayas Nepal Restaurant"
//           className="h-[70vh] w-full object-cover object-center contrast-125 lg:h-screen"
//         />

//         {/* <div className="pointer-events-none absolute inset-0 z-10 flex size-full flex-col items-center justify-end bg-gradient-to-t from-black/60 to-black/0 text-light"> */}
//         <div className="pointer-events-none absolute inset-0 z-10 flex size-full flex-col items-center justify-end">
//           <Logo className="h-40 lg:h-64 w-auto object-contain p-1" />
//           {/* <span className="text-sm font-light uppercase tracking-wider md:text-sm">
//             Satprayas Nepal
//           </span> */}
//           <h2 className="text-shadow-dark-glow mx-8 mb-5 mt-10 max-w-xl text-center text-xl font-bold leading-relaxed text-dark md:mx-0 md:text-4xl md:leading-snug">
//             The Best of Indian, Nepalese & Chinese Cuisines
//           </h2>
//           <img
//             src={fire}
//             alt="Fire Icon"
//             className="size-12 rounded-full border border-orange-300 object-contain p-1"
//           />
//           <div className="bottom-0 h-10 w-px bg-orange-300 md:h-20"></div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Hero;

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import fire from '../assets/logos/fire.png';
// import bgCuisine from '../assets/images/bg_cuisine.webp';
import Logo from './ui/Logo';
import MasterSlider from './ui/MasterSlider';
import useFetchAPI from '../hooks/useFetchAPI';

const Hero = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: slideShow,
    isLoading,
    isError,
  } = useFetchAPI('slideShow', `${apiUrl}slideshow`);

  if (isLoading) return null;
  if (isError) return console.error(isError);

  return (
    <>
      <section className="group relative m-0 p-0">
        {/* <img
          src={bgCuisine}
          alt="Satprayas Nepal Restaurant"
          className="min-h-[34rem] w-full object-cover object-center contrast-125 sm:h-[50vh] md:h-[70vh] lg:h-screen"
        /> */}

        <MasterSlider
          slides={slideShow}
          speed={5000}
          hasContent={true}
          navigation={false}
          sizeClassName="min-h-[34rem] w-full object-cover object-center contrast-125 sm:h-[50vh] md:h-[70vh] lg:h-screen"
        />

        {/* <div className="pointer-events-none absolute inset-0 z-10 flex size-full flex-col items-center justify-end">
          <Logo className="h-40 w-auto object-contain p-1 lg:h-64" />
          <h2 className="text-shadow-dark-glow mx-8 mb-5 mt-8 max-w-xl text-center text-xl font-bold leading-relaxed text-dark md:mx-0 md:text-4xl md:leading-snug">
            The Best of Indian, Nepalese & Chinese Cuisines
          </h2>
          <span className="hmm mb-6 mt-0 text-2xl font-bold text-logo-blue md:text-3xl">
            <Typewriter
              words={['We are opening soon!']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
          <img
            src={fire}
            alt="Fire Icon"
            className="size-12 rounded-full border border-orange-300 object-contain p-1"
          />
          <div className="bottom-0 h-10 w-px bg-orange-300 md:h-20"></div>
        </div> */}
      </section>
    </>
  );
};

export default Hero;
