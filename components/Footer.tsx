import React from 'react';
import { Link } from 'react-router-dom';

/**
 * A reusable component for social media icons in the footer.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The SVG icon to display.
 */
const SocialIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <a href="#" className="text-gray-400 hover:text-scso-purple-500 transition-colors">
        {children}
    </a>
);

/**
 * The main footer component for the website.
 * Contains contact information, quick links, social media icons, and copyright notice.
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Details Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-scso-purple-300">Somaliland Cancer Support Organization (SCSO)</h3>
            <p className="mt-4 text-gray-400 max-w-md">
              The first non-profit in Somaliland dedicated to cancer support. We help patients, families, and raise awareness to fight cancer together.
            </p>
          </div>
          {/* Quick Links Navigation */}
          <div>
            <h4 className="font-semibold tracking-wider uppercase text-scso-purple-200">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="hover:text-scso-purple-300 transition-colors">About Us</Link></li>
              <li><Link to="/our-work" className="hover:text-scso-purple-300 transition-colors">Our Work</Link></li>
              <li><Link to="/contact" className="hover:text-scso-purple-300 transition-colors">Contact & Donate</Link></li>
            </ul>
          </div>
          {/* Contact Information */}
          <div>
            <h4 className="font-semibold tracking-wider uppercase text-scso-purple-200">Contact Us</h4>
            <address className="mt-4 not-italic space-y-2 text-gray-400">
              <p>Jigjiga Yare, Hargeisa, Somaliland</p>
              <p><a href="mailto:Scso.Official@gmail.com" className="hover:text-scso-purple-300">Scso.Official@gmail.com</a></p>
              <p><a href="tel:+252638760934" className="hover:text-scso-purple-300">+252 63-8760934</a></p>
            </address>
          </div>
        </div>
        {/* Bottom Bar with Copyright and Social Icons */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} SCSO. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            {/* Placeholder social icons */}
            <SocialIcon>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </SocialIcon>
            <SocialIcon>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
            </SocialIcon>
             <SocialIcon>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 8.118a4.024 4.024 0 100 8.048 4.024 4.024 0 000-8.048zm0 6.696a2.672 2.672 0 110-5.344 2.672 2.672 0 010 5.344zm6.338-7.737a.95.95 0 100-1.9.95.95 0 000 1.9z" clipRule="evenodd" /></svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;