import React from 'react';
import Form from './ui/Form';
import ContactInfo from './ui/ContactInfo';
import RestaurantTime from './ui/RestaurantTime';

const Contact = () => {
  return (
    <section className="container p-0">
      <div className="mx-auto grid grid-cols-1 gap-4 p-6 md:grid-cols-2 lg:gap-16 lg:gap-y-0 xl:w-full">
        <div className="">
          <div className="mb-8 flex max-w-lg flex-col items-start justify-start gap-4 text-left lg:mb-24">
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
          <hr className="my-8 w-full border-dark/20" />
          <div className="hidden w-full space-y-4 md:block">
            <span className="text-xs uppercase text-dark/50">Contact Info</span>
            <div className="space-y-8">
              <ContactInfo align="items-start justify-start" />
            </div>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
