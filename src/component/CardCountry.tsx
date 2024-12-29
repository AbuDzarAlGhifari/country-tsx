import React from 'react';
import { motion } from 'framer-motion';
import { Country } from '../types/country';

interface CardCountryProps {
  country: Country;
}

const CardCountry: React.FC<CardCountryProps> = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  return (
    <motion.div
      className="p-4 transition bg-white rounded-lg shadow-md cursor-pointer dark:bg-gray-800 hover:shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <img
        src={flags.png}
        alt={name.common}
        className="object-cover w-full h-32 rounded-md"
      />
      <h2 className="mt-2 text-lg font-bold">{name.common}</h2>
      <p className="text-sm">Population: {population.toLocaleString()}</p>
      <p className="text-sm">Region: {region}</p>
      <p className="text-sm">Capital: {capital?.[0]}</p>
    </motion.div>
  );
};

export default CardCountry;
