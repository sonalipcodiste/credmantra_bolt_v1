import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CalendlyModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    // When modal is open, prevent scrolling on the body
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Don't render anything if the modal is closed
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-50 backdrop-blur-sm"
              onClick={onClose}
            ></motion.div>

            {/* Modal dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative inline-block w-full max-w-4xl px-4 pt-5 pb-4 mx-auto my-8 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:align-middle"
            >
              {/* Close button */}
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none"
                  onClick={onClose}
                >
                  <span className="sr-only">Close</span>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal title */}
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold gradient-text font-merriweather">
                  Schedule a Demo
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Choose a convenient time for a personalized demonstration of Cred Mantra
                </p>
              </div>

              {/* Calendly inline widget */}
              <div 
                className="calendly-inline-widget"
                style={{ minWidth: '320px', height: '650px' }}
              >
                <iframe
                  src="https://calendly.com/credmantra-info?background_color=f6fcff&text_color=4b5563&primary_color=005a8b"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Select a time for your demo"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CalendlyModal;