import React from 'react';
import { Link } from 'react-router-dom';
import { useDonationModal } from '../context/DonationModalContext';

/**
 * The home page of the website.
 * Features a compelling hero section, an introduction to the organization's mission,
 * a summary of core focus areas, and calls-to-action for user involvement.
 */
const HomePage: React.FC = () => {
  // Hook to control the global donation modal
  const { openModal } = useDonationModal();

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-scso-purple-50 pt-24 pb-32 text-center">
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-scso-purple-900 mb-4 leading-tight">
            Hope, Strength, and Support.
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-8">
            SCSO is Somaliland's first non-profit dedicated to providing comprehensive support for cancer patients and their families.
          </p>
          <button
            onClick={openModal}
            className="inline-block bg-scso-purple-600 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-scso-purple-700 transform hover:scale-105 transition-transform duration-300"
          >
            Support Our Cause
          </button>
        </div>
      </section>
      
      {/* Introduction Section with Image */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-scso-purple-800 mb-4">No One Should Face Cancer Alone</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to create a community of hope and resilience. We provide crucial medical and emotional support, raise public awareness about prevention, and advocate for better cancer care throughout Somaliland.
              </p>
              <Link to="/about" className="text-scso-purple-600 font-semibold hover:underline">
                Learn More About Us &rarr;
              </Link>
            </div>
            <div>
              <img src="https://picsum.photos/seed/community/800/600" alt="Community Support" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Focus Section */}
      <section className="py-24 bg-scso-purple-50">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-scso-purple-800 mb-4">Our Core Focus</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">We concentrate our efforts on three key pillars to make the greatest impact.</p>
            <div className="grid md:grid-cols-3 gap-8">
                {/* Support Card */}
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-2xl font-bold text-scso-purple-700 mb-4">Patient Support</h3>
                    <p className="text-gray-600">Providing direct financial, emotional, and logistical support to patients and their families during their cancer journey.</p>
                </div>
                {/* Awareness Card */}
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-2xl font-bold text-scso-purple-700 mb-4">Public Awareness</h3>
                    <p className="text-gray-600">Educating communities on cancer prevention, early detection, and the importance of regular health screenings.</p>
                </div>
                {/* Research Card */}
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-2xl font-bold text-scso-purple-700 mb-4">Advocacy & Research</h3>
                    <p className="text-gray-600">Collaborating with health institutions to improve cancer care standards and contribute to vital local research.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Join Our Mission Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-scso-purple-800 mb-12">Join Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <div className="border border-gray-200 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-scso-purple-700 mb-4">Donate Today</h3>
                <p className="text-gray-600 mb-6">Your generosity provides direct relief and hope to families battling cancer. Every contribution, big or small, makes a difference.</p>
                <button onClick={openModal} className="font-semibold text-scso-purple-600 hover:underline">Make a Donation &rarr;</button>
            </div>
             <div className="border border-gray-200 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-scso-purple-700 mb-4">Become a Volunteer</h3>
                <p className="text-gray-600 mb-6">Lend your time and skills to support our events, awareness campaigns, and patient outreach programs.</p>
                <Link to="/contact" className="font-semibold text-scso-purple-600 hover:underline">Get Involved &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
