import React from 'react';

const Title = ({ title, description }) => {
  return (
    <>
      <div className="mx-auto mt-16 mb-8 flex max-w-2xl flex-col items-center justify-center gap-4 text-center md:mb-24 md:mt-0">
        <h3 className="text-3xl capitalize leading-snug sm:text-3xl md:text-4xl lg:text-7xl lg:leading-snug">
          {title}
        </h3>
        <p className="max-w-lg text-center text-sm text-dark/60">
          {description}
        </p>
      </div>
    </>
  );
};

export default Title;
