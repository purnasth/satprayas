import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { submitForm } from '../../utils/api';
import ReCAPTCHA from 'react-google-recaptcha';

const schema = yup.object().shape({
  fullName: yup.string().required('Enter your full name'),
  email: yup.string().email('Invalid email').required('Enter your email'),
  phoneNumber: yup.string().required('Enter your phone number'),
  eventTitle: yup.string().required('Enter your event title'),
  eventDate: yup.string().required('Enter your event date'),
  guestsNumber: yup.string().required('Enter number of guests'),
  message: yup.string().required('Enter your message'),
});

const contactFormFields = [
  { name: 'fullName', type: 'text', label: 'Full Name', required: true },
  { name: 'email', type: 'email', label: 'Email', required: true },
  {
    name: 'phoneNumber',
    type: 'text',
    label: 'Phone Number',
    required: true,
  },
  { name: 'eventTitle', type: 'text', label: 'Event Title', required: true },
  { name: 'eventDate', type: 'date', label: 'Event Date', required: true },
  {
    name: 'guestsNumber',
    type: 'number',
    label: 'Number of Guests',
    required: true,
  },
  { name: 'message', type: 'textarea', label: 'Message', required: true },
];

const Form = () => {
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    if (!recaptchaToken) {
      toast.error('Please complete the reCAPTCHA verification.');
      return;
    }
    try {
      await submitForm('enquiry-form', {
        ...data,
        recaptchaToken,
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="scroll-mt-12"
        id="contactForm"
      >
        {contactFormFields.map((input) => (
          <div key={input.name} className="relative mb-4">
            <label htmlFor={input.name} className="mb-2 block text-dark/80">
              {input.label}
              {input.required && <span className="text-red-500">*</span>}
            </label>
            {input.type === 'textarea' ? (
              <textarea
                {...register(input.name)}
                rows={2}
                id={input.name}
                className={`w-full rounded-none border-b border-dark/20 bg-transparent py-0 text-base text-dark focus:border-dark focus:outline-none sm:py-1 md:text-xl ${
                  errors[input.name] ? 'border-red-500' : 'border-gray-200'
                } `}
              />
            ) : (
              <input
                {...register(input.name)}
                id={input.name}
                type={input.type}
                className={`w-full rounded-none border-b border-dark/20 bg-transparent py-0 text-base text-dark focus:border-dark focus:outline-none sm:py-1 md:text-xl ${
                  errors[input.name] ? 'border-red-500' : 'border-gray-200'
                } `}
              />
            )}
            {errors[input.name] && (
              <span className="pointer-events-none absolute left-0 top-1/2 m-px select-none bg-white py-0 text-sm text-red-500 md:py-1">
                {errors[input.name].message}*
              </span>
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
          className={`mt-4 rounded-full bg-orange-300 px-8 py-2 ${
            isSubmitting ? 'cursor-not-allowed opacity-75' : ''
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>

      <ToastContainer />
    </>
  );
};

export default Form;
