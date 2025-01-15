import React from 'react';
import error from '../assets/error.svg';
import DonationButton from '../components/ui/DonationButton';
import Meta from '../utils/Meta';
import ColorPalette from '../components/ui/ColorPalette';

const Error404 = () => {
  return (
    <>
      <Meta
        title="404 Not Found | Satprayas Nepal"
        meta_description="We searched everywhere but couldn't find what you're looking for. Let's find a better place for you to go."
        canonicalUrl="https://satprayash.org.np/"
      />
      <div className="flex h-screen flex-col items-center justify-center">
        <img
          src={error}
          alt="Error 404"
          className="-z-10 h-auto w-96 select-none object-contain md:h-[50vh] md:w-auto"
          draggable="false"
        />
        <p className="mb-8 max-w-sm text-center leading-loose">
          <strong className="text-7xl font-bold text-orange-500">404</strong>
          <br />
          We searched everywhere but couldn't find what you're looking for.
        </p>
        <DonationButton value="Go Home" router="/" />
      </div>
    </>
  );
};

export default Error404;
