import React from 'react';
import useFetchAPI from '../../hooks/useFetchAPI';

const RestaurantTime = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: siteRegulars,
    isLoading,
    isError,
  } = useFetchAPI('siteRegulars', `${apiUrl}site-regulars`);

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  const { breif } = siteRegulars;
  
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: breif }} />
    </>
  );
};

export default RestaurantTime;
