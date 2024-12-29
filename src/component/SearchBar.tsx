import React from 'react';
import { FiSearch } from 'react-icons/fi';

interface SearchBarProps {
  search: string;
  onSearchChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, onSearchChange }) => {
  return (
    <div className="relative w-full max-w-xs">
      <input
        type="text"
        placeholder="Search country name"
        className="w-full px-4 py-2 pl-10 border rounded-md dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <FiSearch
        className="absolute text-gray-500 transform -translate-y-1/2 top-1/2 left-3"
        size={20}
      />
    </div>
  );
};

export default SearchBar;
