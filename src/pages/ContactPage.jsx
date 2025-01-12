import React from 'react';
import Title from '../components/ui/Title';
import Nearby from '../components/ui/Nearby';
import Footer from '../components/Footer';
import useFetchAPI from '../hooks/useFetchAPI';
import Meta from '../utils/Meta';

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
        canonicalUrl={'https://satprayas-nepal.com/contact'}
      />

      <main className="bg-orange-50">
        <Title
          title="Reach Satprayas Nepal"
          description="Get the directions to our restaurant and contact us for any reservations whether it's a small gathering or a large event."
        />
        <Nearby />
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;
