import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const Preloader = ({ onFinish }: { onFinish: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
      onFinish();
    }, 1000); // Preloader duration
    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ clipPath: 'inset(50% 50% 50% 50%)', opacity: 0 }}
          transition={{
            clipPath: { duration: 3.2, ease: 'easeInOut' },
            opacity: { duration: 0.5, ease: 'easeInOut' },
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white text-dark"
          style={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center"
          >
            <h1 className="font-body text-4xl md:text-7xl font-bold">
              We Are Opening Soon
            </h1>
            {/* <p className="mt-4 text-lg text-gray-600">
              Bringing joy, one dish at a time.
            </p> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
