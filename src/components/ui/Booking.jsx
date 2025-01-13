import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineRoomService } from 'react-icons/md';
import useFetchAPI from '../../hooks/useFetchAPI';
import { PiHandHeartFill } from 'react-icons/pi';
import PopupModal from '../PopupModa';

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

  const handleButtonClick = () => {
    setShowQrModal(true);
  };

  const closeModal = () => {
    setShowQrModal(false);
  };

  const { booking_code, booking_QR } = siteRegulars;

  return (
    <>
      <button
        type="button"
        onClick={handleButtonClick}
        className={`${
          showButton ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        } transition-300 fixed bottom-4 right-1/2 z-40 inline-flex translate-x-1/2 translate-y-0 scale-100 items-center justify-center gap-2 rounded-full border border-green-700 bg-dark/50 bg-green-600 px-6 py-2 text-light shadow backdrop-blur-sm hover:bg-light hover:text-green-700`}
        title="Donate Us"
        aria-label="Donate Us"
      >
        <span className="text-base font-semibold tracking-wide">Donate Us</span>
        <PiHandHeartFill className="animate-bounce text-xl" />
      </button>

      {showQrModal && (
        <PopupModal onClose={closeModal}>
          <div className="text-center">
            <img
              src={booking_QR}
              alt="WhatsApp QR Code"
              className="w-full p-10 pt-0"
            />
            <div className="space-y-5 px-6">
              <div className="space-y-2">
                <span
                  className={`inline-flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-green-700`}
                >
                  Make a Donation
                  <PiHandHeartFill className="text-base" />
                </span>
                <p className="text-center text-xs">
                  Scan the QR code to make a donation and be the light in
                  someone's life.
                </p>
              </div>
              <Link
                // to={booking_code}
                to="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-300 inline-flex rounded-full border border-green-700 px-5 py-2 text-center text-sm tracking-wider text-green-700 hover:bg-green-700 hover:text-light"
              >
                or Explore More
              </Link>
            </div>
          </div>
        </PopupModal>
      )}
    </>
  );
};

export default WhatsApp;
