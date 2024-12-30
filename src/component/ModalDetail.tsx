import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdClose } from 'react-icons/md';
import { Country } from '../types/country';
import { fetchCountryNamesByCodes } from '../utils/api';

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

  const [borderCountryNames, setBorderCountryNames] = useState<string[]>([]);

  useEffect(() => {
    const fetchBorders = async () => {
      if (borders?.length) {
        const names = await fetchCountryNamesByCodes(borders);
        setBorderCountryNames(names);
      } else {
        setBorderCountryNames(['No borders']);
      }
    };
    fetchBorders();
  }, [borders]);

  const languagesList = Object.values(languages || {}).join(', ') || 'N/A';
  const currenciesList =
    Object.values(currencies || {})
      .map((currency) => currency.name)
      .join(', ') || 'N/A';
  const timezoneList = timezones?.join(', ') || 'N/A';
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
          className="relative w-11/12 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 md:w-2/3 lg:w-3/4 max-h-[80vh] overflow-y-auto scrollbar-hide"
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

          <h2 className="mt-2 text-2xl font-bold text-center">
            {name.common.toUpperCase()}
          </h2>

          <div className="grid grid-cols-12 gap-5 mt-4">
            <div className="col-span-6 space-y-2">
              <div className="grid grid-cols-3 gap-2">
                <span className="font-semibold">Population</span>
                <span className="col-span-2">
                  : {population.toLocaleString()}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="font-semibold">Region</span>
                <span className="col-span-2">: {region}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="font-semibold">Subregion</span>
                <span className="col-span-2">: {subregion}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="font-semibold">Capital</span>
                <span className="col-span-2">: {capital?.[0] || 'N/A'}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="font-semibold">Languages</span>
                <span className="col-span-2">: {languagesList}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="font-semibold">Currencies</span>
                <span className="col-span-2">: {currenciesList}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="font-semibold">Area</span>
                <span className="col-span-2">
                  : {area ? `${area.toLocaleString()} km²` : 'N/A'}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="font-semibold">Coordinates</span>
                <span className="col-span-2">: {coordinates}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="font-semibold">Timezones</span>
                <span className="col-span-2">: {timezoneList}</span>
              </div>
            </div>
            <div className="col-span-6 space-y-2">
              <div className="grid grid-cols-3 gap-2">
                <span className="font-semibold">Top Level Domain</span>
                <span className="col-span-2">: {tldList}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="font-semibold">Bordering Countries</span>
                <span className="col-span-2">
                  : {borderCountryNames.join(', ')}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="font-semibold">GDP</span>
                <span className="col-span-2">
                  : {gdp ? `$${gdp} Billion` : 'N/A'}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="font-semibold">Demonym</span>
                <span className="col-span-2">: {demonym || 'N/A'}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="font-semibold">Government Type</span>
                <span className="col-span-2">: {government || 'N/A'}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="font-semibold">National Anthem</span>
                <span className="col-span-2">
                  :{' '}
                  {anthem ? (
                    <a
                      href={anthem}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      Listen here
                    </a>
                  ) : (
                    'N/A'
                  )}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="font-semibold">Climate</span>
                <span className="col-span-2">: {climate || 'N/A'}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ModalDetail;
