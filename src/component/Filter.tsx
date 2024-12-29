import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface FilterProps {
  region: string;
  onRegionChange: (value: string) => void;
}

const Filter: React.FC<FilterProps> = ({ region, onRegionChange }) => {
  return (
    <div className="relative w-full max-w-xs">
      <select
        className="w-full px-4 py-2 border rounded-md appearance-none dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={region}
        onChange={(e) => onRegionChange(e.target.value)}
      >
        <option value="">All Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <MdKeyboardArrowDown
        className="absolute text-gray-500 transform -translate-y-1/2 pointer-events-none top-1/2 right-3"
        size={20}
      />
    </div>
  );
};

export default Filter;
