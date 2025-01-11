import React from 'react';
import error from '../assets/error.svg';
import FireButton from '../components/ui/FireButton';
import Meta from '../utils/Meta';

const Error404 = () => {
  return (
    <>
      <Meta
        title="404 Not Found | Satprayas Nepal"
        meta_description="We searched everywhere but couldn't find what you're looking for. Let's find a better place for you to go."
        canonicalUrl="https://satprayas-nepal.com/"
      />
      <div className="flex h-screen flex-col items-center justify-center">
        <img
          src={error}
          alt="Error 404"
          className="mb-8 h-auto w-96 select-none object-contain md:h-[60vh] md:w-auto"
          draggable="false"
        />
        <FireButton value="Go Home" router="/" />
      </div>
    </>
  );
};

export default Error404;
