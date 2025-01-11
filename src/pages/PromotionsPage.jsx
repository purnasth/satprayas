import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Title from '../components/ui/Title';
// import { offersContent } from '../constants/data';
import fire from '../assets/logos/fire.svg';
import UniversalFooter from '../layouts/UniversalFooter';
import OffersEnquiry from '../components/ui/OffersEnquiry';
import useFetchAPI from '../hooks/useFetchAPI';
import Meta from '../utils/Meta';

const PromotionsPage = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: offersContent,
    isLoading,
    isError,
  } = useFetchAPI('offers', `${apiUrl}offers`);

  const [showOffersEnquiry, setShowOffersEnquiry] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Toggle form visibility and update the URL accordingly
  const toggleOffersEnquiry = (title = '') => {
    setSelectedOffer(title);
    setShowOffersEnquiry((prevState) => {
      const newState = !prevState;
      if (newState) {
        navigate('/offers#enquiry'); // Update URL to include #enquiry
      } else {
        navigate('/offers'); // Reset URL when form is closed
      }
      return newState;
    });
  };

  // Open the form automatically if URL contains #enquiry
  useEffect(() => {
    if (location.hash === '#enquiry') {
      setShowOffersEnquiry(true);
    }
  }, [location]);

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  // const { meta_title, meta_description, meta_keywords } = offersContent;

  return (
    <>
      <Meta
        meta_title="Special Offers & Promotions | Satprayas Nepal"
        canonicalUrl="https://satprayas-nepal.com/offers"
      />

      <main className="px-4 lg:px-8">
        <Title
          title="Special Offers & Promotions"
          description="Check out our special offers and promotions. We have something for everyone. Grab your favorite deal before it's gone!"
        />
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {offersContent.map((content, index) => (
            <div
              key={index}
              className="transition-300 group relative outline outline-1 outline-offset-[12px] outline-dark/0 hover:outline-offset-0"
            >
              {/* <div className="overlay transition-300 absolute inset-0 -z-0 bg-black/70 outline outline-1 -outline-offset-[12px] outline-light/40 group-hover:bg-black/80 group-hover:outline-offset-0" /> */}
              <div className="overlay transition-300 absolute inset-0 -z-0 bg-gradient-to-t from-black/50 to-transparent outline outline-1 -outline-offset-[12px] outline-light/40 group-hover:outline-offset-0" />
              <img
                src={content.image}
                alt={content.title}
                className="-z-10 aspect-square w-full object-cover shadow"
              />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-end px-12 py-8 text-center text-light">
                {/* <span className="text-sm font-light uppercase tracking-wider">
                  {content.offer}
                </span>
                <div>
                  <h2 className="text-shadow-dark-glow text-xl leading-relaxed md:text-4xl">
                    {content.title}
                  </h2>
                  <p className="line-clamp-2 text-sm opacity-80">
                    {content.description}
                  </p>
                </div> */}
                <button
                  onClick={() => toggleOffersEnquiry(content.title)}
                  className="transition-300 flex items-center gap-2 rounded-full border border-light/50 bg-light/10 px-4 py-2 text-light backdrop-blur group-hover:bg-light/30"
                  type="button"
                  aria-label="Enquiry Now"
                  title="Enquiry Now"
                >
                  <img
                    src={fire}
                    alt="Fire"
                    className="transition-300 size-4 scale-75 group-hover:scale-100"
                  />
                  Enquiry Now
                  <img
                    src={fire}
                    alt="Fire"
                    className="transition-300 size-4 scale-75 group-hover:scale-100"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <UniversalFooter />
      {showOffersEnquiry && (
        <OffersEnquiry
          onClose={() => {
            setShowOffersEnquiry(false);
            navigate('/offers');
          }}
          offerTitle={selectedOffer}
        />
      )}
    </>
  );
};

export default PromotionsPage;
