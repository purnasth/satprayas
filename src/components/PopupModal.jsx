import React, { useState, useEffect } from 'react';

const PopupModal = ({ onClose, children }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const closeWithAnimation = () => {
    setShowModal(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`transition-700 fixed inset-0 z-50 flex items-center justify-center bg-dark/70 backdrop-blur ${
        showModal ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={closeWithAnimation}
    >
      <div
        className={`transition-700 relative w-full max-w-xs transform bg-light px-6 py-14 shadow-lg ${
          showModal ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeWithAnimation}
          className="absolute right-5 top-5 text-xl text-gray-700"
          aria-label="Close"
        >
          &#x2715;
        </button>
        {children}
      </div>
    </div>
  );
};

export default PopupModal;
