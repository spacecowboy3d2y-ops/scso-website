import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LogoIcon } from './icons/LogoIcon';
import { useDonationModal } from '../context/DonationModalContext';

/**
 * Renders the navigation links for the header.
 * It dynamically applies styles for active and inactive links.
 * @param {object} props - The component props.
 * @param {string} [props.className] - Optional additional class names.
 */
const NavLinks: React.FC<{ className?: string }> = ({ className }) => {
    const linkStyle = "px-4 py-2 rounded-md text-sm font-medium transition-colors";
    const activeLinkStyle = "bg-scso-purple-100 text-scso-purple-800";
    const inactiveLinkStyle = "text-gray-600 hover:bg-scso-purple-100 hover:text-scso-purple-800";

    return (
        <>
            <NavLink to="/" className={({isActive}) => `${linkStyle} ${isActive ? activeLinkStyle : inactiveLinkStyle}`}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => `${linkStyle} ${isActive ? activeLinkStyle : inactiveLinkStyle}`}>About Us</NavLink>
            <NavLink to="/our-work" className={({isActive}) => `${linkStyle} ${isActive ? activeLinkStyle : inactiveLinkStyle}`}>Our Work</NavLink>
            <NavLink to="/contact" className={({isActive}) => `${linkStyle} ${isActive ? activeLinkStyle : inactiveLinkStyle}`}>Contact</NavLink>
        </>
    );
};

/**
 * The main header component for the website.
 * It follows a standard layout: Logo on the left, navigation in the center,
 * and the primary call-to-action (Donate) on the right.
 */
const Header: React.FC = () => {
  // State to manage the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);
  // Hook to control the global donation modal
  const { openModal } = useDonationModal();

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Left Section: Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center transition-transform duration-200 ease-in-out hover:scale-105" aria-label="Somaliland Cancer Support Organization Homepage">
              <LogoIcon className="h-16 w-auto" />
            </Link>
          </div>
          
          {/* Centered Desktop Navigation */}
          <div className="hidden md:block">
             <nav className="flex items-center space-x-2">
                <NavLinks />
            </nav>
          </div>
          
          {/* Right Section: Donate Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
               <button onClick={openModal} className="px-5 py-2.5 bg-scso-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-scso-purple-700 focus:outline-none focus:ring-2 focus:ring-scso-purple-500 focus:ring-opacity-75 transition-all">
                Donate
              </button>
            </div>
             {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-scso-purple-700 hover:bg-scso-purple-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-scso-purple-500"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger Icon */}
                <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Close Icon */}
                <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <NavLinks />
            <button onClick={openModal} className="mt-4 w-11/12 text-center px-5 py-2.5 bg-scso-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-scso-purple-700 focus:outline-none focus:ring-2 focus:ring-scso-purple-500 focus:ring-opacity-75 transition-all">
              Donate
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;