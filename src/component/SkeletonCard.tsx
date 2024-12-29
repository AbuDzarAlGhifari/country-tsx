import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg shadow-md dark:bg-gray-700 animate-pulse">
      <div className="w-full h-32 bg-gray-300 rounded-md dark:bg-gray-600"></div>
      <div className="h-4 mt-4 bg-gray-300 rounded dark:bg-gray-600"></div>
      <div className="w-3/4 h-4 mt-2 bg-gray-300 rounded dark:bg-gray-600"></div>
      <div className="w-1/2 h-4 mt-2 bg-gray-300 rounded dark:bg-gray-600"></div>
    </div>
  );
};

export default SkeletonCard;
