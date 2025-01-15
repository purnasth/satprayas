import React from 'react';
// import bgCuisine from '../assets/images/bg_cuisine.png';
import { MdFacebook, MdStarRate } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';
import TestimonialSlider from '../components/ui/TestimonialSlider';
// import { navLinks } from '../constants/data';
import Logo from '../components/ui/Logo';
import ContactInfo from '../components/ui/ContactInfo';
import useFetchAPI from '../hooks/useFetchAPI';
import { Link } from 'react-router-dom';
import { FaDonate } from 'react-icons/fa';

const UniversalFooter = () => {
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
    // } = useFetchAPI('siteRegulars', `${apiUrl}site-regulars`);
  } = useFetchAPI('siteRegulars', `/api/siteregulars.json`);

  const isLoading = navLoading || regularsLoading;
  const isError = navError || regularsError;

  if (isLoading) return null;

  if (isError) {
    console.error({ navError, regularsError });
    return null;
  }

  const { sitetitle } = siteRegulars;

  return (
    <main className="h-auto overflow-hidden bg-light p-0 md:h-screen">
      {/* <div className="absolute bottom-0 h-3/4 w-full bg-red-600 -z-10"></div> */}
      {/* <div
        className="pointer-events-none absolute bottom-0 -z-10 size-full origin-bottom scale-75 bg-[url(http://localhost:5173/assets/svg/donation.svg)] bg-contain bg-bottom bg-no-repeat opacity-50 mix-blend-normal"
        // style={{ backgroundImage: `url(${bgCuisine})` }}
      ></div> */}

      {/* <div className="pointer-events-none absolute inset-0 -z-10 size-full bg-gradient-to-t from-light/50 to-transparent"></div> */}
      <section className="container relative flex size-full flex-col items-center justify-evenly">
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-8 lg:gap-0">
          <div className="z-10 col-span-2 space-y-8">
            <Logo className="h-40 w-auto object-contain" />
            <ContactInfo align="justify-start items-start text-left" />
          </div>

          <div className="col-span-1 w-full lg:col-span-3">
            {/* <span className="text-xs font-bold uppercase text-dark/70">
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
            </ul> */}
            {/* <h3 className="mb-8 text-3xl underline">Bank Details</h3> */}
            <span className="mt-2 flex items-center justify-center text-center text-xs font-bold uppercase tracking-wider text-dark/70 lg:text-center">
              Make a Donation
            </span>
            <p className="mt-4 flex size-12 items-center justify-center rounded-full bg-orange-600 p-1 text-center text-2xl text-white">
              <FaDonate />
            </p>
            <table className="mt-8 w-full table-auto text-left">
              <tbody>
                <tr>
                  <td className="py-2 font-semibold">Bank Name:</td>
                  <td className="py-2">Himalayan Bank Ltd.</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Bank Address:</td>
                  <td className="py-2">Bhaktapur Branch, Nepal</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Swift Code:</td>
                  <td className="py-2">HIMANPKA</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Account Number:</td>
                  <td className="py-2">004-04699420011</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Contact:</td>
                  <td className="py-2">+977 9851063716, +977 9851247627</td>
                </tr>
              </tbody>
            </table>

            <p className="mt-12 max-w-sm">
              Donations from you are what allow Satprayas Nepal to survive and
              florish.
            </p>
          </div>

          <div className="col-span-1 lg:col-span-3">
            <div className="w-full text-left lg:text-center">
              {/* <img
                src="https://www.manigrambishrambatika.com/template/web/img/testi-qoute-1.png"
                alt=""
              /> */}
              <span className="text-left text-xs font-bold uppercase tracking-wider text-dark/70 lg:text-center">
                Success Stories
              </span>

              <TestimonialSlider />
            </div>

            <ul className="links mt-4 flex flex-wrap items-start justify-between gap-2 md:mt-11 md:gap-x-8">
              {navLinks.slice(1).map((link) => (
                <li className="group" key={link.id}>
                  <Link
                    to={link.link}
                    className="text-sm font-medium underline hover:no-underline"
                    aria-label={link.title}
                  >
                    {link.title.split(' ')[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="my-12 flex w-full flex-col items-start justify-start gap-2 text-base md:flex-row md:justify-between md:text-base lg:mb-0 lg:mt-16 lg:items-center lg:justify-between lg:text-sm">
          <span>
            © {new Date().getFullYear()}{' '}
            <strong className="font-semibold">{sitetitle}</strong> | All Rights
            Reserved
          </span>
          <span>
            Website by: &nbsp;
            <a
              className="font-semibold"
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

export default UniversalFooter;
