import React from 'react';
import useFetchAPI from '../../hooks/useFetchAPI';

const DeliveryPartners = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: deliveryPartners,
    isLoading,
    isError,
  } = useFetchAPI(
    'deliveryPartners',
    `${apiUrl}delivery-partners`,
  );

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  const { heading, partners } = deliveryPartners;
  return (
    <>
      <div className="mx-auto inline-flex items-center justify-center gap-4 overflow-hidden rounded-full bg-white p-12">
        {partners.map((partner, index) => (
          <img
            key={index}
            src={partner.src}
            alt={partner.alt}
            className="size-24 bg-white object-contain p-2"
          />
        ))}
      </div>
      <p className="bg-orange-300/20 px-2 font-bold">{heading}</p>
    </>
  );
};

export default DeliveryPartners;
