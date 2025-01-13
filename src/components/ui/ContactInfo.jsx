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
    // } = useFetchAPI('contactInfo', `${apiUrl}location`);
  } = useFetchAPI('contactInfo', `/api/contactInfo.json`);

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
                      className="inline-block text-sm font-semibold hover:underline"
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
                  className="inline-block text-sm font-semibold hover:underline"
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

      <div className="my-6 flex items-center gap-4">
        <span className="text-xs uppercase tracking-wider text-dark/50">
          Follow Us:{' '}
        </span>
        <ul className={`flex ${align} gap-3`}>
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
                      <IconComponent className="size-9 rounded-full border border-dark/30 p-2 text-base text-dark transition-all duration-200 ease-linear group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-light" />
                    ) : item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="size-9 rounded-full border border-dark/30 object-contain p-2 transition-all duration-200 ease-linear group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-light"
                      />
                    ) : null}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default ContactInfo;
