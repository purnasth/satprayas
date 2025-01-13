import React from 'react';
import useFetchAPI from '../../hooks/useFetchAPI';

const DeliveryPartners = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: deliveryPartners,
    isLoading,
    isError,
    // } = useFetchAPI('deliveryPartners', `${apiUrl}delivery-partners`);
  } = useFetchAPI('deliveryPartners', `/api/deliverypartners.json`);

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  const { heading, partners } = deliveryPartners;
  return (
    <div className="container grid grid-cols-2 content-center items-center gap-6">
      <h3 className="ml-auto max-w-xl text-right text-4xl leading-snug">
        {heading}
      </h3>
      <div className="inline-flex items-center justify-start gap-4 overflow-hidden rounded-full">
        {partners.map((partner, index) => (
          <img
            key={index}
            src={partner.src}
            alt={partner.alt}
            className="size-32 object-contain p-2"
          />
        ))}
      </div>
    </div>
  );
};

export default DeliveryPartners;
