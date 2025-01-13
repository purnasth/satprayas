import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import LogoBar from '../components/ui/LogoBar';
// import Cuisine from '../components/Cuisine';
import Facility from '../components/Facility';
import Offers from '../components/Offers';
import Gallery from '../components/Gallery';
import OurMenu from '../components/OurMenu';
import Reservation from '../components/ui/Reservation';
import UniversalFooter from '../layouts/UniversalFooter';
import useFetchAPI from '../hooks/useFetchAPI';
import Meta from '../utils/Meta';
import Popup from '../components/Popup';
import Contact from '../components/Contact';

const Home = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: siteRegulars,
    isLoading,
    isError,
    // } = useFetchAPI('siteRegulars', `${apiUrl}site-regulars`);
  } = useFetchAPI('siteRegulars', `/api/siteregulars.json`);

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  const { meta_title, meta_description, meta_keywords, canonicalUrl } =
    siteRegulars;

  return (
    <>
      <Meta
        meta_title={meta_title}
        meta_description={meta_description}
        meta_keywords={meta_keywords}
        canonicalUrl={canonicalUrl}
      />
      <Popup />
      <Hero />
      <About />
      {/* <Cuisine /> */}
      <LogoBar />
      <OurMenu />
      <Reservation />
      <Facility />
      <Offers />
      <Gallery limit={10} />
      <Contact />
      <UniversalFooter />
    </>
  );
};

export default Home;
