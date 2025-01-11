import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fire from '../../assets/logos/fire.svg';
import ReCAPTCHA from 'react-google-recaptcha';
import { submitForm } from '../../utils/api';
import OrCallUs from './OrCallUs';

const offersForm = [
  { name: 'fullName', type: 'text', label: 'Full Name', required: true },
  { name: 'email', type: 'email', label: 'Email', required: true },
  { name: 'phoneNumber', type: 'text', label: 'Phone Number', required: true },
  { name: 'message', type: 'textarea', label: 'Message', required: true },
];

const schema = yup.object().shape({
  fullName: yup.string().required('Enter your full name*'),
  email: yup.string().email('Invalid email').required('Enter your email*'),
  phoneNumber: yup.string().required('Enter your phone number*'),
  message: yup.string().required('Enter your message*'),
});

const OffersEnquiry = ({ offerTitle, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const closeWithAnimation = () => {
    setShowModal(false);
    setTimeout(onClose, 300);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    if (!recaptchaToken) {
      toast.error('Please complete the reCAPTCHA verification.');
      return;
    }

    try {
      await submitForm('offers-form', {
        ...data,
        recaptchaToken,
        offerTitle,
      });
      toast.success('Form submitted successfully!');
    } catch (error) {
      toast.error(error);
    }
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  return (
    <>
      <div
        className={`transition-700 fixed inset-0 z-50 flex items-center justify-center bg-dark/50 backdrop-blur-sm ${
          showModal ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeWithAnimation}
      >
        <div
          className={`transition-700 relative w-full max-w-xl transform rounded-lg bg-light p-6 shadow-lg ${
            showModal ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={closeWithAnimation}
            className="absolute right-5 top-5 text-xl text-gray-700"
            aria-label="Close"
            title="Close"
          >
            &#x2715;
          </button>
          <div className="space-y-2">
            <h3 className="font-body text-xl font-bold">Enquiry Form</h3>
            <p>Send your information and query.</p>
          </div>
          <h4 className="my-4 font-body text-xl font-bold">
            {offerTitle || 'Special Offer'}
          </h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            {offersForm.map((input) => (
              <div key={input.name} className="relative mb-4">
                <label htmlFor={input.name} className="block text-dark/80">
                  {input.label}
                  {input.required && <span className="text-red-500">*</span>}
                </label>
                {input.type === 'textarea' ? (
                  <textarea
                    {...register(input.name)}
                    rows={2}
                    id={input.name}
                    className={`w-full rounded-none border-b border-dark/20 bg-transparent py-0 text-base font-semibold text-dark focus:border-dark focus:outline-none sm:py-2 md:text-xl ${
                      errors[input.name] ? 'border-red-500' : 'border-gray-200'
                    } `}
                  />
                ) : (
                  <input
                    {...register(input.name)}
                    type={input.type}
                    id={input.name}
                    className={`w-full rounded-none border-b border-dark/20 bg-transparent py-0 text-base font-semibold text-dark focus:border-dark focus:outline-none sm:py-2 md:text-xl ${
                      errors[input.name] ? 'border-red-500' : 'border-gray-200'
                    } `}
                  />
                )}
                {errors[input.name] && (
                  <p className="pointer-events-none absolute bottom-[6px] select-none text-sm text-red-500 md:bottom-3">
                    {errors[input.name].message}
                  </p>
                )}
              </div>
            ))}
            <ReCAPTCHA
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              onChange={handleRecaptchaChange}
            />
            <button
              type="submit"
              aria-label="Submit"
              title="Submit"
              className={`transition-300 group my-4 flex items-center gap-2 rounded-full border border-orange-300 bg-orange-300 px-5 py-2 font-semibold hover:bg-orange-200/80 hover:text-orange-500 ${
                isSubmitting ? 'cursor-not-allowed opacity-75' : ''
              }`}
              disabled={isSubmitting}
            >
              <img
                src={fire}
                alt="Fire"
                className="filter-black transition-300 size-4 scale-75 object-contain group-hover:scale-100 group-hover:filter-none"
              />
              {isSubmitting ? 'Sending...' : 'Submit'}
              <img
                src={fire}
                alt="Fire"
                className="filter-black transition-300 size-4 scale-75 object-contain group-hover:scale-100 group-hover:filter-none"
              />
            </button>
            {/* <p className="mt-4 text-sm text-dark/80">
              or Call us at
              <a
                href="tel:+12509861755"
                className="mx-1 font-body font-bold underline underline-offset-2"
              >
                +1 250 986 1755
              </a>
              for direct booking.
            </p> */}
            <OrCallUs />
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default OffersEnquiry;
