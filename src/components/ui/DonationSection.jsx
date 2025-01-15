import React from 'react';
import DonationButton from './DonationButton';
import donation from '../../assets/svg/happyDonation.svg';

const DonationSection = () => {
  return (
    <main>
      <div className="relative mx-auto flex w-fit items-center justify-evenly rounded-2xl bg-orange-100/80 shadow-sm">
        {/* <div className="absolute bottom-0 left-0 right-0 -z-10 h-2/3 w-full rounded-2xl border bg-light shadow"></div> */}
        {/* <div className="absolute inset-0 -z-10 size-full bg-[url('https://media.istockphoto.com/id/1949882446/vector/teal-orange-grainy-background-banner-noise-texture-glowing-color-gradient-vibrant-dark.jpg?s=612x612&w=0&k=20&c=jsSZREbmeJc2h5IHF2xZi4lx7syOI7jSow0E_wr7fcY=')] bg-cover opacity-70 mix-blend-multiply blur-[100px]" /> */}
        <div className="space-y-6 text-pretty p-16">
          <h2 className="text-3xl">Be the reason a child smiles today!</h2>
          <p className="max-w-xl text-base text-gray-600">
            Your support can open doors to education, healthcare, and acceptance
            for children with disabilities. Together, we can build a future
            where every child feels seen, valued, and empowered.
          </p>

          <div className="w-fit origin-left scale-110 pt-5">
            <DonationButton value="Make a donation" router="/contact" />
          </div>
        </div>

        <div className="flex">
          <img
            src={donation}
            alt="Celebrations"
            className="h-96 w-full origin-bottom translate-y-[15px] scale-150 object-cover"
            draggable="false"
          />
        </div>
      </div>
    </main>
  );
};

export default DonationSection;
