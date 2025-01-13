import React from 'react';
import Form from './ui/Form';
import ContactInfo from './ui/ContactInfo';
import celebration from '../assets/svg/celebrations.svg';

const Contact = () => {
  return (
    <section className="container p-0">
      <div className="mx-auto grid grid-cols-1 content-center items-center gap-4 p-6 md:grid-cols-2 lg:gap-16 lg:gap-y-0 xl:w-full">
        <div className="rounded-lg bg-light p-6 shadow-md md:p-12 lg:p-16">
          <div className="mx-auto flex max-w-lg flex-col items-center justify-center gap-4 text-center">
            <h3 className="text-3xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-6xl lg:leading-snug">
              Looking to host an event?
            </h3>
            <p className="mb-4 text-pretty text-sm text-dark/60">
              One of the best ways to help Satprayas Nepal is by hosting your
              own event to benefit Satprayas Nepal in your hometown. Event types
              are flexible, therefore allowing you to combine your passion for
              helping children in need with your outside interests. We'll work
              with you to create fun and exciting event.
            </p>
          </div>
          <div className="hidden w-full md:block">
            <img
              src={celebration}
              alt="Celebrations"
              className="size-full object-cover"
              draggable="false"
            />
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
