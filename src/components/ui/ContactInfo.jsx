import React from 'react';
import { Link } from 'react-router-dom';
import useFetchAPI from '../../hooks/useFetchAPI';

import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { IoLogoTiktok } from 'react-icons/io5';
import { AiFillInstagram } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { TbBrandFacebook } from 'react-icons/tb';
import { FaInstagram } from 'react-icons/fa';
import { TbPhone } from 'react-icons/tb';

const iconMap = {
  FaFacebookF,
  RiInstagramFill,
  IoLogoTiktok,
  AiFillInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  TbBrandFacebook,
  FaInstagram,
  TbPhone,
};

const ContactInfo = ({ align }) => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: contactInfo = [],
    isLoading,
    isError,
  } = useFetchAPI('contactInfo', `${apiUrl}location`);

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  return (
    <>
      <ul className={`flex flex-col ${align} gap-1 text-center`}>
        {contactInfo
          .filter((item) => item.type !== 'social')
          .map((item) => (
            <li key={item.id}>
              {Array.isArray(item.title) ? (
                item.title.map((title, index) => (
                  <React.Fragment key={index}>
                    <a
                      href={item.url[index]}
                      className="inline-block text-sm font-bold hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={title}
                    >
                      {title}
                    </a>
                    {index < item.title.length - 1 && ' | '}
                  </React.Fragment>
                ))
              ) : (
                <a
                  href={item.url}
                  className="inline-block text-sm font-bold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.title}
                >
                  {item.title}
                </a>
              )}
            </li>
          ))}
      </ul>

      <ul className={`my-6 flex ${align} gap-4 text-2xl`}>
        {contactInfo
          .filter((item) => item.type === 'social')
          .map((item) => {
            const IconComponent = iconMap[item.icon];

            return (
              <li key={item.id} className="group">
                <Link
                  to={item.url}
                  rel="noreferrer noopener"
                  aria-label={item.title}
                  title={item.title}
                  target="_blank"
                >
                  {IconComponent ? (
                    <IconComponent className="text-lg transition-all duration-300 ease-linear group-hover:scale-125" />
                  ) : item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="size-5 object-contain transition-all duration-300 ease-linear group-hover:scale-125"
                    />
                  ) : null}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ContactInfo;
