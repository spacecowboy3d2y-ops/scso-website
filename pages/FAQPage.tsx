
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <h3 className="text-lg font-semibold text-scso-purple-800">{question}</h3>
        <span className="text-scso-purple-500 transform transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
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

const FAQPage: React.FC = () => {
    const faqs = [
        {
            q: "What does SCSO do?",
            a: "We provide vital medical, social, and emotional support for cancer patients and their families in Somaliland. Our work also includes raising public awareness and promoting prevention strategies."
        },
        {
            q: "How can I donate?",
            a: "You can easily and securely donate through mobile money. ZAAD: 063-8812723 or E-Dahab: 746560. Your contribution makes a huge difference."
        },
        {
            q: "Is SCSO a hospital?",
            a: "No, we are a non-profit charity organization. We work alongside healthcare providers to support patients, but we do not provide clinical treatment ourselves. Our focus is on awareness, support, and advocacy."
        },
        {
            q: "Can I volunteer?",
            a: "Yes! We are always looking for passionate individuals to join our cause. Please contact us via email at Scso.Official@gmail.com to learn about volunteering opportunities."
        },
        {
            q: "Where are you located?",
            a: "Our office is located at Jigjiga Yare Rd, Hargeisa, Somaliland. You can find more details on our contact page."
        }
    ];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-scso-purple-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-center text-gray-600 mb-12">
            Find answers to common questions about our organization and how you can help.
          </p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
