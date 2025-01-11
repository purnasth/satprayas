import React from 'react';
import Contact from './Contact';
import bgCuisine from '../assets/images/bg_cuisine.png';
import { MdStarRate } from 'react-icons/md';

import TestimonialSlider from './ui/TestimonialSlider';

// import { navLinks } from '../constants/data';
import Logo from './ui/Logo';
import ContactInfo from './ui/ContactInfo';
import useFetchAPI from '../hooks/useFetchAPI';
import { Link } from 'react-router-dom';

const Footer = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: navLinks = [],
    isLoading: navLoading,
    isError: navError,
  } = useFetchAPI('navLinks', `${apiUrl}menu`);

  const {
    data: siteRegulars = [],
    isLoading: regularsLoading,
    isError: regularsError,
  } = useFetchAPI('siteRegulars', `${apiUrl}site-regulars`);

  const isLoading = navLoading || regularsLoading;
  const isError = navError || regularsError;

  if (isLoading) return null;

  if (isError) {
    console.error(isError);
    return null;
  }

  const { sitetitle } = siteRegulars;

  return (
    <main className="bg-orange-50 p-0">
      {/* <div className="absolute bottom-0 h-3/4 w-full bg-red-600 -z-10"></div> */}
      <div
        className="pointer-events-none absolute bottom-0 -z-10 h-3/4 w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgCuisine})` }}
      ></div>
      <Contact />

      <section className="relative px-6 lg:p-24 lg:px-6">
        <div className="pointer-events-none absolute inset-0 -z-10 size-full bg-gradient-to-t from-white to-transparent"></div>
        <div className="z-10 flex items-center justify-center">
          <Logo className="h-40 w-auto object-contain" />
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-7 lg:gap-0">
          <div className="col-span-1 w-full lg:col-span-2">
            <span className="text-xs font-bold uppercase text-dark/70">
              Quick Links
            </span>
            <ul className="links mt-4 flex flex-col items-start justify-start gap-2 md:mt-8 md:gap-4">
              {navLinks.slice(1, 6).map((link) => (
                <li className="group w-full" key={link.id}>
                  <Link
                    to={link.link}
                    className="navlink"
                    aria-label={link.title}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-3">
            <div className="w-full text-left lg:text-center">
              {/* <img
                src="https://www.manigrambishrambatika.com/template/web/img/testi-qoute-1.png"
                alt=""
              /> */}
              <span className="text-left text-xs font-bold uppercase text-dark/70 lg:text-center">
                Reviews
              </span>

              <TestimonialSlider />
            </div>

            <div className="mt-10 flex w-full items-center justify-between border-t-2 border-dark/10">
              <span className="flex gap-0 text-base text-dark">
                {Array.from({ length: 5 }).map((_, index) => (
                  <MdStarRate key={index} />
                ))}
              </span>
              <p className="my-4 text-sm text-dark/50">
                <strong className="font-bold text-dark">5.0</strong>/ 0 review
              </p>
            </div>
          </div>

          <div className="col-span-1 w-full text-left lg:col-span-2 lg:text-right">
            <span className="text-xs font-bold uppercase text-dark/70">
              Contact Info
            </span>
            <div className="mt-4 space-y-8 md:mt-8">
              <ContactInfo align="justify-start lg:justify-end items-start lg:items-end text-left lg:text-right" />
            </div>
          </div>
        </div>

        {/* <hr className="my-8 w-full border-dark/20" /> */}

        <div className="my-12 flex flex-col items-start justify-start gap-2 text-base md:flex-row md:justify-between md:text-base lg:mb-0 lg:mt-16 lg:items-center lg:justify-between lg:text-sm">
          <span>
            © {new Date().getFullYear()} {sitetitle}{' '}
          </span>
          <span>
            Website by: &nbsp;
            <a
              className="font-bold"
              href="https://www.longtail.info/"
              target="_blank"
            >
              Longtail e-Media
            </a>
          </span>
        </div>
      </section>
    </main>
  );
};

export default Footer;
