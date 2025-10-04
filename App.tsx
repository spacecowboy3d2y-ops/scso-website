import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OurWorkPage from './pages/OurWorkPage';
import ContactPage from './pages/ContactPage';
import { DonationModalProvider } from './context/DonationModalContext';
import DonationModal from './components/DonationModal';

/**
 * The main application component.
 * It sets up the routing structure, global context providers, and overall layout of the site,
 * including the Header, main content area, Footer, and the site-wide Donation Modal.
 */
const App: React.FC = () => {
  return (
    // The DonationModalProvider makes the modal's state (open/closed) accessible to any component.
    <DonationModalProvider>
      <HashRouter>
        {/* Main container with a flex column layout to ensure the footer sticks to the bottom */}
        <div className="flex flex-col min-h-screen bg-white text-gray-800 font-sans">
          <Header />
          {/* The main content area grows to fill available space */}
          <main className="flex-grow">
            <Routes>
              {/* Route definitions for each page of the website */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/our-work" element={<OurWorkPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
        {/* The DonationModal is rendered here, outside the main flow, so it can overlay any page. */}
        <DonationModal />
      </HashRouter>
    </DonationModalProvider>
  );
};

export default App;
