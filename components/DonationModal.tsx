import React, { useState, useEffect, useRef } from 'react';
import { useDonationModal } from '../context/DonationModalContext';

/**
 * A modal component for handling donations.
 * It provides preset amounts, a custom input, and payment information.
 * The modal is controlled by the `useDonationModal` context.
 */
const DonationModal: React.FC = () => {
  const { isModalOpen, closeModal } = useDonationModal();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);

  // Donation amount options
  const amounts = [10, 25, 50, 100];

  // Effect to handle closing the modal when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen, closeModal]);

  // Handler for selecting a preset amount
  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  // Handler for changes in the custom amount input
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAmount(null);
    setCustomAmount(e.target.value);
  };
  
  // Return null if the modal is not open to prevent it from rendering
  if (!isModalOpen) {
    return null;
  }

  return (
    // Backdrop overlay
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 transition-opacity duration-300" role="dialog" aria-modal="true">
      {/* Modal panel */}
      <div ref={modalRef} className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative transform transition-all duration-300 scale-100">
        {/* Close Button */}
        <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800" aria-label="Close donation modal">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <h2 className="text-3xl font-bold text-center text-scso-purple-800 mb-2">Support Our Mission</h2>
        <p className="text-center text-gray-600 mb-2">Your contribution makes a difference.</p>
        <p className="text-center text-gray-500 text-sm mb-8">
          Every donation, no matter how small, brings hope and tangible relief to a patient and their family. Your generosity fuels our work.
        </p>

        {/* Amount Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {amounts.map((amount) => (
            <button
              key={amount}
              onClick={() => handleAmountClick(amount)}
              className={`p-4 rounded-lg font-bold text-lg border-2 transition-colors ${selectedAmount === amount ? 'bg-scso-purple-600 text-white border-scso-purple-600' : 'bg-scso-purple-50 text-scso-purple-800 border-scso-purple-200 hover:border-scso-purple-500'}`}
            >
              ${amount}
            </button>
          ))}
        </div>

        {/* Custom Amount Input */}
        <div className="mb-8">
            <label htmlFor="custom-amount" className="sr-only">Custom Amount</label>
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 text-lg">$</span>
                 <input
                    type="number"
                    id="custom-amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="Or enter custom amount"
                    className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg text-lg focus:ring-scso-purple-500 focus:border-scso-purple-500"
                />
            </div>
        </div>
        
        {/* Payment Details */}
        <div className="bg-scso-purple-50 rounded-lg p-6">
           <h3 className="text-xl font-semibold text-center text-scso-purple-700 mb-4">Donate via Mobile Money</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                <div>
                    <p className="font-semibold text-scso-purple-600">ZAAD</p>
                    <p className="text-2xl font-bold text-gray-800 tracking-wider">063-8812723</p>
                </div>
                 <div>
                    <p className="font-semibold text-scso-purple-600">E-Dahab</p>
                    <p className="text-2xl font-bold text-gray-800 tracking-wider">746560</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;