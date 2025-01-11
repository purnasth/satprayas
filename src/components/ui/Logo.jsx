import React from 'react';
import { Link } from 'react-router-dom';
import useFetchAPI from '../../hooks/useFetchAPI';

const Logo = ({ aprops, className }) => {
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

  const { logo_upload, sitetitle } = siteRegulars;

  return (
    <Link
      to="/"
      className={aprops ? aprops : 'cursor-pointer'}
      aria-label={sitetitle}
      title={sitetitle}
    >
      <img
        src={logo_upload}
        alt={`${sitetitle} Logo`}
        className={`${className}`}
      />
    </Link>
  );
};

export default Logo;
