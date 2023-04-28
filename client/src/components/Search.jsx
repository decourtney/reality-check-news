import React, { useState } from 'react';

const Search = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center space-x-2">
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for news..." className="rounded-l-lg py-2 px-4 border-t border-b border-l text-gray-800 border-gray-200 bg-white" />
      <button type="submit" className="px-4 py-2 font-bold text-white bg-[#8AFF63] rounded-r-lg hover:bg-blue-700">Search</button>
    </form>
  );
};

export default Search;
