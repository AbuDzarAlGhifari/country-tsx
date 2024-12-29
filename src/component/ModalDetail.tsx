import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdClose } from 'react-icons/md';
import { Country } from '../types/country';

interface ModalDetailProps {
  country: Country;
  onClose: () => void;
}

const ModalDetail: React.FC<ModalDetailProps> = ({ country, onClose }) => {
  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    languages,
    currencies,
    timezones,
    latlng,
    demonym,
    tld,
    borders,
    area,
    gdp,
    government,
    anthem,
    climate,
  } = country;

  const languagesList = Object.values(languages || {}).join(', ');
  const currenciesList = Object.values(currencies || {})
    .map((currency) => currency.name)
    .join(', ');
  const timezoneList = timezones ? timezones.join(', ') : 'N/A';
  const borderCountries = borders?.join(', ') || 'No borders';
  const tldList = tld?.join(', ') || 'N/A';
  const coordinates = latlng ? `Lat: ${latlng[0]}, Lng: ${latlng[1]}` : 'N/A';

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
          className="relative w-11/12 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 md:w-2/3 lg:w-1/2 max-h-[80vh] overflow-y-auto scrollbar-hide"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={onClose}
            className="absolute p-2 bg-gray-300 rounded-full top-4 right-4 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
          >
            <MdClose size={24} className="text-gray-800 dark:text-white" />
          </button>

          <div className="w-full h-48 mb-4 overflow-hidden rounded-md">
            <img
              src={flags.png}
              alt={name.common}
              className="object-contain w-full h-full"
            />
          </div>

          <h2 className="mt-2 text-2xl font-bold">{name.common}</h2>
          <p className="mt-2 text-sm">
            Population: {population.toLocaleString()}
          </p>
          <p className="text-sm">Region: {region}</p>
          <p className="text-sm">Subregion: {subregion}</p>
          <p className="text-sm">Capital: {capital?.[0]}</p>
          {languages && (
            <p className="text-sm ">Languages: {languagesList || 'N/A'}</p>
          )}
          {currencies && (
            <p className="text-sm">Currencies: {currenciesList || 'N/A'}</p>
          )}
          <p className="text-sm">Timezones: {timezoneList}</p>
          <p className="text-sm">Coordinates: {coordinates}</p>
          <p className="text-sm">Demonym: {demonym || 'N/A'}</p>
          <p className="text-sm">Top Level Domain: {tldList}</p>
          <p className="text-sm">Bordering Countries: {borderCountries}</p>
          <p className="text-sm">
            Area: {area ? `${area.toLocaleString()} km²` : 'N/A'}
          </p>
          {gdp && <p className="text-sm">GDP: ${gdp} Billion</p>}
          {government && (
            <p className="text-sm">Government Type: {government}</p>
          )}
          {anthem && (
            <p className="text-sm">
              National Anthem:{' '}
              <a href={anthem} target="_blank" rel="noopener noreferrer">
                Listen here
              </a>
            </p>
          )}
          {climate && <p className="text-sm">Climate: {climate}</p>}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ModalDetail;
