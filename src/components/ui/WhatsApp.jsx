import React, { useState, useEffect } from 'react';
import { TbBrandWhatsapp } from 'react-icons/tb';
import PopupModal from '../PopupModa';
import useFetchAPI from '../../hooks/useFetchAPI';

const WhatsApp = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: siteRegulars,
    isLoading,
    isError,
    // // } = useFetchAPI('siteRegulars', `${apiUrl}site-regulars`);
  } = useFetchAPI('siteRegulars', `/api/siteregulars.json`);

  const [showButton, setShowButton] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }
  const { whatsapp_a, whatsapp_QR } = siteRegulars;

  const handleButtonClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Redirect to WhatsApp for mobile users
      window.open(`https://wa.me/${whatsapp_a}`, '_blank');
    } else {
      // Show QR code modal for desktop users
      setShowQrModal(true);
    }
  };

  const closeModal = () => {
    setShowQrModal(false);
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        // className={`${
        //   showButton ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        // } transition-300 fixed bottom-8 right-8 z-40 inline-flex h-9 items-center justify-center gap-1 rounded-full border border-green-600/30 bg-white px-4 py-2 text-green-600 hover:border-green-600 hover:bg-green-600 hover:text-light`}
        className={`${
          showButton ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        } transition-300 fixed bottom-4 right-4 z-40 inline-flex size-11 items-center justify-center gap-1 rounded-full border border-green-600 bg-light p-2 text-green-600 hover:border-green-600 hover:bg-green-600 hover:text-light`}
        title="WhatsApp"
        aria-label="WhatsApp"
      >
        <TbBrandWhatsapp className="text-3xl" />
      </button>

      {showQrModal && (
        <PopupModal onClose={closeModal}>
          <div className="text-center">
            <img
              src={whatsapp_QR}
              alt="WhatsApp QR Code"
              className="w-full p-10 pt-0"
            />
            <div className="space-y-5 px-6">
              <div className="space-y-2">
                <span
                  className={`inline-flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-green-600`}
                >
                  Whatsapp Us
                  <TbBrandWhatsapp className="text-base" />
                </span>
                <p className="text-center text-xs">
                  Scan the QR Code to chat with our team via your smartphone.
                </p>
              </div>
              <a
                href="https://web.whatsapp.com/send?phone=+9779851221636"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-300 inline-flex rounded-full border border-green-600 px-5 py-2 text-center text-sm tracking-wider text-green-600 hover:bg-green-600 hover:text-light"
              >
                or Continue on Web
              </a>
            </div>
          </div>
        </PopupModal>
      )}
    </>
  );
};

export default WhatsApp;
