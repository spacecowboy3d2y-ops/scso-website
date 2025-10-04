import React, { useState } from 'react';
import { RibbonWatermark } from '../components/icons/RibbonWatermark';

/**
 * Icon component for checkmarks used in lists.
 */
const CheckIcon = () => (
    <svg className="w-6 h-6 text-scso-purple-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

/**
 * Reusable section component for consistent styling.
 * @param {object} props - The component props.
 * @param {string} props.title - The title of the section.
 * @param {React.ReactNode} props.children - The content of the section.
 * @param {string} [props.className] - Optional additional class names.
 */
const Section: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className = '' }) => (
    <div className={`mb-12 ${className}`}>
        <h2 className="text-3xl font-bold text-scso-purple-800 mb-6 border-b-2 border-scso-purple-200 pb-2">{title}</h2>
        <div className="text-lg text-gray-700 space-y-4">
            {children}
        </div>
    </div>
);

/**
 * An individual FAQ item with an expandable answer.
 * @param {object} props - The component props.
 * @param {string} props.question - The frequently asked question.
 * @param {string} props.answer - The answer to the question.
 */
const FAQItem: React.FC<{ question: string; answer: string; }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-scso-purple-800">{question}</h3>
        <span className={`text-scso-purple-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="mt-4 text-gray-600">
          {answer}
        </p>
      </div>
    </div>
  );
};

/**
 * The About Us page.
 * Provides detailed information about the organization's identity, mission, vision, strategic goals, and answers to frequently asked questions.
 */
const AboutPage: React.FC = () => {
  const faqs = [
    { q: "What does SCSO do?", a: "We provide vital medical, social, and emotional support for cancer patients and their families in Somaliland. Our work also includes raising public awareness and promoting prevention strategies." },
    { q: "How can I donate?", a: "You can easily and securely donate through mobile money. ZAAD: 063-8812723 or E-Dahab: 746560. Your contribution makes a huge difference." },
    { q: "Is SCSO a hospital?", a: "No, we are a non-profit charity organization. We work alongside healthcare providers to support patients, but we do not provide clinical treatment ourselves. Our focus is on awareness, support, and advocacy." },
    { q: "Can I volunteer?", a: "Yes! We are always looking for passionate individuals to join our cause. Please contact us via email at Scso.Official@gmail.com to learn about volunteering opportunities." },
    { q: "Where are you located?", a: "Our office is located at Jigjiga Yare Rd, Hargeisa, Somaliland. You can find more details on our contact page." }
  ];

  return (
    <div className="relative bg-white py-20 overflow-hidden">
      <RibbonWatermark />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-center text-4xl md:text-5xl font-extrabold text-scso-purple-900 mb-12">About SCSO</h1>
          
          <Section title="Who We Are">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <p>Somaliland Cancer Support Organization (SCSO) is the first non-profit charity organization in Somaliland dedicated to cancer support. We are committed to supporting cancer patients with medical needs, social support, raising awareness, promoting prevention, and contributing to research programs.</p>
                    <p className="mt-4">Recognizing the rising number of cancer cases in Somaliland with a lack of specialized healthcare facilities, we strive to assist vulnerable individuals battling the disease and to provide much-needed aid to families affected by cancer.</p>
                </div>
                <img src="https://picsum.photos/seed/scso-team/800/600" alt="SCSO Team" className="rounded-lg shadow-lg" />
            </div>
          </Section>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
              <div>
                  <h2 className="text-3xl font-bold text-scso-purple-800 mb-6 border-b-2 border-scso-purple-200 pb-2">Our Vision</h2>
                  <p className="text-lg text-gray-700">To create a future where every individual in Somaliland has equitable access to cancer care, awareness, and prevention resources, ensuring no one faces the battle against cancer alone.</p>
              </div>
               <div>
                   <h2 className="text-3xl font-bold text-scso-purple-800 mb-6 border-b-2 border-scso-purple-200 pb-2">Our Mission</h2>
                  <p className="text-lg text-gray-700">We aspire to establish a robust healthcare system that prioritizes early detection, advanced research, and comprehensive support, fostering hope and strength within our communities.</p>
              </div>
          </div>

          <Section title="Our Strategic Goals">
            <p className="mb-6">We focus on clear, achievable goals to guide our work and measure our impact. Here's how we are turning our vision into reality:</p>
            <ul className="space-y-6">
                <li className="flex items-start">
                    <CheckIcon /> 
                    <div>
                        <span className="font-semibold">Promote cancer awareness, prevention, and early detection.</span>
                        <p className="text-base text-gray-600 mt-1">We achieve this through community workshops, social media campaigns, and distributing informational materials in local languages to empower individuals with knowledge to protect their health.</p>
                    </div>
                </li>
                <li className="flex items-start">
                    <CheckIcon />
                    <div>
                        <span className="font-semibold">Provide support, empower, and advocate for patients and their families.</span>
                        <p className="text-base text-gray-600 mt-1">Our patient navigators guide individuals through the healthcare system, while support groups and financial aid programs help alleviate the emotional and economic burdens of a cancer diagnosis.</p>
                    </div>
                </li>
                <li className="flex items-start">
                    <CheckIcon />
                    <div>
                        <span className="font-semibold">Support and contribute to research and advocacy.</span>
                         <p className="text-base text-gray-600 mt-1">By partnering with local clinics to gather anonymized data, we aim to contribute to a better understanding of cancer prevalence and treatment outcomes in Somaliland, advocating for data-driven policy changes.</p>
                    </div>
                </li>
                <li className="flex items-start">
                    <CheckIcon /> 
                    <div>
                        <span className="font-semibold">Collaborate with local and international partners.</span>
                        <p className="text-base text-gray-600 mt-1">We actively build partnerships with government health ministries, other NGOs, and corporate sponsors to pool resources and expertise, creating a unified and more effective front against cancer.</p>
                    </div>
                </li>
            </ul>
          </Section>
          
          <Section title="Frequently Asked Questions">
             {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </Section>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;
