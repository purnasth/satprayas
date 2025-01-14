import React from 'react';
import DeliveryPartners from './ui/DeliveryPartners';

const Awards = () => {
  return (
    <>
      <main className="relative z-10 flex flex-col items-center justify-center gap-2">
        {/* <div className="absolute inset-0 -z-20 size-full bg-[url('https://media.istockphoto.com/id/2133409160/vector/backdrop-with-winner-award-attributes-in-linear-style-seamless-sports-doodles-on-checkered.jpg?s=612x612&w=0&k=20&c=d6b_C8rxnunP_nBQRU-htuEL5aONtWuD4bGEj5gOnmA=')] bg-repeat opacity-5 mix-blend-multiply" /> */}
        <DeliveryPartners />
      </main>
    </>
  );
};

export default Awards;
