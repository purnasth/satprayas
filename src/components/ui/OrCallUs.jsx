import React from 'react';
import useFetchAPI from '../../hooks/useFetchAPI';

const OrCallUs = () => {
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

  const contactInfoArray = siteRegulars.contact_info.split(',');
  const emailAddressArray = siteRegulars.email_address.split(',');

  const contactInfo = contactInfoArray[0];
  const emailAddress = emailAddressArray[0];

  return (
    <div className="space-y-2">
      <p>
        <span className="font-light opacity-80">or call us directly</span>
        <a
          rel="noopener noreferrer"
          className="transition-linear ml-2 font-semibold"
          href={`tel:${contactInfo}`}
          target="_blank"
        >
          {contactInfo}
        </a>
      </p>
      <a
        rel="noopener noreferrer"
        className="transition-linear font-semibold"
        href={`mailto:${emailAddress}`}
        target="_blank"
      >
        {emailAddress}
      </a>
    </div>
  );
};

export default OrCallUs;
