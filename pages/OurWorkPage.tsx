import React from 'react';
import { RibbonWatermark } from '../components/icons/RibbonWatermark';
import { useDonationModal } from '../context/DonationModalContext';

/**
 * Interface defining the props for the WorkCard component.
 */
interface WorkCardProps {
  title: string;
  description: string;
  icon: React.ReactElement;
}

/**
 * A reusable card component to display a specific area of the organization's work.
 * @param {WorkCardProps} props - The props for the component.
 */
const WorkCard: React.FC<WorkCardProps> = ({ title, description, icon }) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
    <div className="flex-shrink-0 w-12 h-12 bg-scso-purple-100 text-scso-purple-600 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-scso-purple-800 mb-2">{title}</h3>
    <p className="text-gray-600 flex-grow">{description}</p>
  </div>
);

/**
 * The 'Our Work' page.
 * It details the key programs and initiatives undertaken by the organization.
 */
const OurWorkPage: React.FC = () => {
  // Hook to control the donation modal
  const { openModal } = useDonationModal();

  // Array of objects containing the details for each work area.
  const ourWork = [
    {
      title: "Support for Patients & Families",
      description: "We understand that a cancer diagnosis affects the entire family. Our team provides comprehensive support including counseling services, navigation through the complex healthcare system, and direct financial assistance for treatment and daily necessities. We organize support groups where patients and families can share experiences and find strength in community.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    },
    {
      title: "Health Awareness & Volunteering",
      description: "Prevention and early detection are critical. We run continuous public awareness campaigns using social media, local radio, and community events. Our passionate volunteers are trained to conduct educational workshops in schools, universities, and public spaces, empowering people with life-saving knowledge.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
    },
    {
      title: "Community Engagement",
      description: "We believe in the power of community. Our outreach programs build strong local networks of support, connecting patients with survivors and volunteers. We work with community leaders and elders to destigmatize cancer and encourage open conversations about health and well-being.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    },
    {
      title: "Cancer Registration & Prevention",
      description: "Data is essential for effective healthcare planning. We are pioneering efforts to establish a cancer registry in Somaliland, collecting vital, anonymized data on cancer types and prevalence. This information helps us advocate for better resources and tailor our prevention strategies to the specific needs of our population.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
    },
    {
      title: "Research & Collaboration",
      description: "We actively foster a culture of research and collaboration by organizing seminars for healthcare professionals and working closely with scientific institutions. By forging partnerships with international cancer organizations, we aim to bring global best practices and innovative treatments to Somaliland.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
    }
  ];

  return (
    <div className="relative py-20 bg-scso-purple-50 overflow-hidden">
      {/* Decorative background image with low opacity */}
      <div className="absolute inset-0 -z-20">
        <img 
          src="https://images.unsplash.com/photo-1519732161343-4ac54452136e?q=80&w=2070&auto=format&fit=crop" 
          alt="" 
          className="w-full h-full object-cover opacity-20" 
        />
      </div>
      <RibbonWatermark className="-z-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-scso-purple-900 mb-4">Our Work</h1>
          <p className="text-lg text-gray-600 mb-16">
            We focus on a multi-faceted approach to improve lives through direct support, public awareness, data-driven advocacy, and strategic collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mapping through the ourWork array to render a WorkCard for each item */}
          {ourWork.map((item, index) => (
            <WorkCard key={index} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </div>

        {/* Closing motivational message section */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-scso-purple-800">No one has to face cancer alone.</h2>
          <p className="mt-4 text-xl text-gray-600">Your support can light up a life and bring hope to a family in need.</p>
          <button
            onClick={openModal}
            className="mt-8 inline-block bg-scso-purple-600 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-scso-purple-700 transform hover:scale-105 transition-transform duration-300"
          >
            Support Our Mission
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurWorkPage;
