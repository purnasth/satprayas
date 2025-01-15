import React from 'react';
import Title from '../components/ui/Title';
// import Nearby from '../components/ui/Nearby';
// import Footer from '../components/Footer';
import useFetchAPI from '../hooks/useFetchAPI';
import Meta from '../utils/Meta';
import Contact from '../components/Contact';
import UniversalFooter from '../layouts/UniversalFooter';
import Donation from '../components/Donation';

const ContactPage = () => {
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

  const { contact_meta_title } = siteRegulars;

  return (
    <>
      <Meta
        meta_title={contact_meta_title}
        canonicalUrl={'https://satprayash.org.np/contact'}
      />

      <main>
        <Title
          title="Satprayas Nepal"
          description="Seeking additional information or ways to contribute? Access our banking details, contact address, and event hosting form. Donate and empower a child & transform a future."
        />
        <Donation />
        {/* <Nearby /> */}
        <Contact />
      </main>
    </>
  );
};

export default ContactPage;
