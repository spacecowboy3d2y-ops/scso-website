import React, { createContext, useState, useContext, ReactNode } from 'react';

/**
 * Defines the shape of the context data.
 * This includes the modal's open/closed state and functions to control it.
 */
interface DonationModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

/**
 * Creates the React Context with an initial undefined value.
 * This will be replaced by the provider's value.
 */
const DonationModalContext = createContext<DonationModalContextType | undefined>(undefined);

/**
 * The Provider component that will wrap the application.
 * It holds the state for the modal and provides it to all child components.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered within the provider.
 */
export const DonationModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // The provider passes down the state and functions as an object.
  const value = { isModalOpen, openModal, closeModal };

  return (
    <DonationModalContext.Provider value={value}>
      {children}
    </DonationModalContext.Provider>
  );
};

/**
 * A custom hook for consuming the Donation Modal Context.
 * This makes it easy for components to access the modal's state and controls
 * without needing to use `useContext` directly. It also provides a helpful error
 * message if used outside of the provider.
 */
export const useDonationModal = () => {
  const context = useContext(DonationModalContext);
  if (context === undefined) {
    throw new Error('useDonationModal must be used within a DonationModalProvider');
  }
  return context;
};
