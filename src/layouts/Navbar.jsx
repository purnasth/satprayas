import React, { useState, useEffect } from 'react';
import { MdOutlineRoomService, MdStarRate } from 'react-icons/md';
import { PiChefHatBold } from 'react-icons/pi';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../components/ui/Logo';
import ContactInfo from '../components/ui/ContactInfo';
import useFetchAPI from '../hooks/useFetchAPI';
import { TbHeartHandshake, TbMenu2 } from 'react-icons/tb';
import { PiHandHeartFill } from 'react-icons/pi';

const Navbar = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: navLinks = [],
    isLoading,
    isError,
  // } = useFetchAPI('navLinks', `${apiUrl}menu`);
  } = useFetchAPI('navLinks', `/api/navLinks.json`);

  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Close nav on route change
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }, [location]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (e) => {
    e.preventDefault();
    navigate('/contact#contactForm');
    setTimeout(() => {
      document.querySelector('#contactForm')?.scrollIntoView();
    }, 0);
  };

  // Render fallback for loading or error states
  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  return (
    <>
      <header
        className={`pointer-events-none fixed top-0 z-50 flex w-full items-start p-4 transition-all duration-1000 ease-in-out`}
      >
        <div className="pointer-events-auto flex-1">
          <button
            onClick={toggleNav}
            className="transition-300 inline-flex w-fit items-center justify-center gap-2 rounded-full border border-green-700 bg-white px-4 py-2 text-green-700 hover:border-green-700/80 hover:bg-green-700 hover:text-light"
            aria-label="Menu"
            title="Menu"
          >
            <TbMenu2 className="text-xl" />
            <span>Menu</span>
          </button>
        </div>

        <Logo
          aprops={`flex flex-1 justify-center transition-1000 pointer-events-auto object-contain origin-top pointer-events-auto ${
            visible ? '-translate-y-2' : '-translate-y-[200%]'
          }
          ${window.scrollY > 0 ? 'scale-90' : 'scale-100'}
          `}
          className={`transition-1000 h-16 w-auto rounded-xl bg-white object-contain p-1 md:h-28`}
        />
        <div className="pointer-events-auto flex flex-1 items-end justify-end">
          <Link
            to="#contactForm"
            className={`transition-300 inline-flex w-fit items-center justify-center gap-1 rounded-full border border-green-700 bg-white px-4 py-2 text-green-700 hover:border-green-700/80 hover:bg-green-700 hover:text-light`}
            aria-label="Reservation"
            title="Reservation"
            onClick={handleScroll}
          >
            Host an Event
            <PiHandHeartFill className="text-xl" />
          </Link>
        </div>
      </header>

      <div
        className={`transition-700 fixed inset-0 z-30 flex flex-1 items-end justify-end bg-black/50 backdrop-blur-sm ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <nav
        className={`transition-700 fixed left-0 top-0 h-screen w-full overflow-y-auto bg-light md:w-[28rem] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } z-50`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 flex items-center justify-center gap-2 text-4xl text-black"
          aria-label="Close"
          title="Close"
        >
          &times;
        </button>

        <div className="justify -evenly flex size-full flex-col items-start gap-0 px-4 text-dark md:px-8">
          <div className="mt-12 w-full">
            {/* <span className="text-xs uppercase text-dark/50">Web Pages</span> */}

            <ul className="links mt-6 flex flex-col items-start justify-start gap-2 md:gap-4">
              {navLinks.map((link) => (
                <li className="group w-full" key={link.id}>
                  <NavLink
                    to={link.link}
                    className={({ isActive }) =>
                      `navlink ${isActive ? 'text-orange-500' : 'text-dark'}`
                    }
                    aria-label={link.title}
                  >
                    {link.title}
                    <PiChefHatBold className="translate-x-4 rounded-full text-xl opacity-0 transition-all duration-300 group-hover:-translate-x-0 group-hover:opacity-100" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <hr className="my-8 w-full border-dark/20" />
          <div className="w-full space-y-4">
            <span className="text-xs uppercase text-dark/50">Contact Info</span>
            <div className="space-y-8">
              <ContactInfo align="items-start justify-start" />
            </div>
          </div>
          <div className="mt-12 flex w-full items-center justify-between border-t-2 border-dark/10">
            <span className="flex gap-0 text-base text-dark">
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
            </span>
            <p className="my-4 text-sm text-dark/50">
              <strong className="font-bold text-dark">5.0</strong>/ 0 review
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
