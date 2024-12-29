import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchAllCountries } from '../utils/api';
import { Country } from '../types/country';
import CardCountry from '../component/CardCountry';
import ModalDetail from '../component/ModalDetail';
import SearchBar from '../component/SearchBar';
import Filter from '../component/Filter';
import SkeletonCard from '../component/SkeletonCard';
import { MdArrowUpward } from 'react-icons/md';

const Home: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [displayedCountries, setDisplayedCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState<string>('');
  const [region, setRegion] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [showScrollUp, setShowScrollUp] = useState<boolean>(false);

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true);
      const data = await fetchAllCountries();
      setCountries(data);
      setDisplayedCountries(data.slice(0, visibleCount));
      setLoading(false);
    };
    getCountries();
  }, []);

  useEffect(() => {
    setDisplayedCountries(countries.slice(0, visibleCount));
  }, [visibleCount, countries]);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollUp(true);
    } else {
      setShowScrollUp(false);
    }

    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 50
    ) {
      if (!loadingMore && visibleCount < countries.length) {
        setLoadingMore(true);
        setTimeout(() => {
          setVisibleCount((prev) => prev + 12);
          setLoadingMore(false);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loadingMore, visibleCount, countries]);

  const handleCardClick = (country: Country) => {
    setSelectedCountry(country);
  };

  const closeModal = () => {
    setSelectedCountry(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="p-4">
      <div className="flex flex-col justify-between gap-2 mb-4 sm:flex-row">
        <SearchBar search={search} onSearchChange={setSearch} />
        <Filter region={region} onRegionChange={setRegion} />
      </div>

      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {loading
          ? Array.from({ length: 12 }, (_, index) => (
              <SkeletonCard key={index} />
            ))
          : displayedCountries
              .filter(
                (country) =>
                  country.name.common
                    .toLowerCase()
                    .includes(search.toLowerCase()) &&
                  (region ? country.region === region : true)
              )
              .map((country) => (
                <motion.div
                  key={country.name.common}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div onClick={() => handleCardClick(country)}>
                    <CardCountry country={country} />
                  </div>
                </motion.div>
              ))}
      </motion.div>

      {loadingMore && (
        <div className="flex justify-center mt-4">
          <p className="text-gray-500">Loading more...</p>
        </div>
      )}

      {selectedCountry && (
        <ModalDetail country={selectedCountry} onClose={closeModal} />
      )}

      {showScrollUp && (
        <button
          onClick={scrollToTop}
          className="fixed p-3 text-white transition bg-gray-700 rounded-full shadow-lg bottom-10 right-10"
        >
          <MdArrowUpward size={24} />
        </button>
      )}
    </div>
  );
};

export default Home;
