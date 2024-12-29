import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdClose } from 'react-icons/md';
import { Country } from '../types/country';

interface ModalDetailProps {
  country: Country;
  onClose: () => void;
}

const ModalDetail: React.FC<ModalDetailProps> = ({ country, onClose }) => {
  const { flags, name, population, region, subregion, capital } = country;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-11/12 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 md:w-2/3 lg:w-1/2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Ganti tombol close dengan ikon */}
          <button
            onClick={onClose}
            className="absolute p-2 bg-gray-300 rounded-full top-4 right-4 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
          >
            <MdClose size={24} className="text-gray-800 dark:text-white" />
          </button>
          <img
            src={flags.png}
            alt={name.common}
            className="object-cover w-full h-48 rounded-md"
          />
          <h2 className="mt-4 text-2xl font-bold">{name.common}</h2>
          <p className="mt-2 text-sm">
            Population: {population.toLocaleString()}
          </p>
          <p className="text-sm">Region: {region}</p>
          <p className="text-sm">Subregion: {subregion}</p>
          <p className="text-sm">Capital: {capital?.[0]}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ModalDetail;
