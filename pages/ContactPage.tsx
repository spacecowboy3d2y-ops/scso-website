import React from 'react';
import { RibbonWatermark } from '../components/icons/RibbonWatermark';

/**
 * A form component that opens the user's default email client to send a message.
 * It's a simple and effective way to handle contact forms without a backend.
 */
const ContactForm: React.FC = () => {
  return (
    <form 
      action="mailto:Scso.Official@gmail.com" 
      method="POST" 
      encType="text/plain"
      className="space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <div className="relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          </div>
          <input type="text" name="name" id="name" required placeholder="John Doe" className="mt-1 block w-full px-3 py-2 pl-10 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-scso-purple-500 focus:border-scso-purple-500" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <div className="relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </div>
          <input type="email" name="email" id="email" required placeholder="you@example.com" className="mt-1 block w-full px-3 py-2 pl-10 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-scso-purple-500 focus:border-scso-purple-500" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea name="message" id="message" rows={5} required placeholder="Your message here..." className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-scso-purple-500 focus:border-scso-purple-500"></textarea>
      </div>
      <div>
        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-scso-purple-600 hover:bg-scso-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-scso-purple-500 transition-colors">
          Send Message
        </button>
      </div>
      <p className="text-xs text-center text-gray-500 pt-2">
        Note: This action will open your default email application.
      </p>
    </form>
  );
};


/**
 * A reusable card component to display contact information with an icon.
 * @param {object} props - The component props.
 */
const ContactInfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactElement; }> = ({ title, children, icon }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-scso-purple-100 text-scso-purple-600 rounded-lg flex items-center justify-center">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <div className="text-gray-600">{children}</div>
        </div>
    </div>
);

/**
 * The Contact and Donate page.
 * Provides multiple ways for users to support the cause and get in touch.
 */
const ContactPage: React.FC = () => {
  return (
    <div className="relative py-20 bg-scso-purple-50 overflow-hidden">
       <RibbonWatermark />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-scso-purple-900 mb-4">Contact & Donate</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your support is vital. Reach out to us with any questions or contribute to our cause through the methods below.
          </p>
        </div>

        {/* Donation Section */}
        <div className="mt-16 bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-scso-purple-800 mb-8">Donate Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="bg-scso-purple-50 border-2 border-scso-purple-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-scso-purple-700">ZAAD</h3>
              <p className="text-4xl font-bold text-gray-800 mt-2 tracking-wider">063-8812723</p>
            </div>
            <div className="bg-scso-purple-50 border-2 border-scso-purple-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-scso-purple-700">E-Dahab</h3>
              <p className="text-4xl font-bold text-gray-800 mt-2 tracking-wider">746560</p>
            </div>
          </div>
        </div>

        {/* Get in Touch Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          {/* Contact Details */}
          <div className="space-y-8">
             <h2 className="text-2xl font-bold text-scso-purple-800 mb-6">Our Details</h2>
             <ContactInfoCard title="Address" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}>
                <p>Jigjiga Yare, Hargeisa, Somaliland</p>
            </ContactInfoCard>
             <ContactInfoCard title="Email" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}>
                <a href="mailto:Scso.Official@gmail.com" className="text-scso-purple-600 hover:underline">Scso.Official@gmail.com</a>
            </ContactInfoCard>
             <ContactInfoCard title="Telephone" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}>
                <p><a href="tel:+252638760934" className="hover:text-scso-purple-700">+252 63-8760934</a></p>
                <p><a href="tel:+252638981511" className="hover:text-scso-purple-700">+252 63-8981511</a></p>
            </ContactInfoCard>
          </div>
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
             <h2 className="text-2xl font-bold text-scso-purple-800 mb-6">Send Us a Message</h2>
             <ContactForm />
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-scso-purple-800 mb-8">Our Location</h2>
          {/* The map container is set to a square aspect ratio and centered with a max-width for a balanced layout. */}
          <div className="max-w-3xl mx-auto aspect-square bg-gray-200 rounded-2xl shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62547.23439401918!2d44.01919532658142!3d9.559384639908122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1628bface234559d%3A0x1952a5136884641!2sHargeisa!5e0!3m2!1sen!2sso!4v1677324311850!5m2!1sen!2sso"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SCSO Location in Hargeisa"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;