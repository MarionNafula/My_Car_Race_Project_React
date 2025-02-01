import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex items-center bg-white shadow-lg rounded-full p-2 w-full max-w-lg border-2 border-gray-200 hover:border-blue-500 transition duration-300">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search cars..."
        className="w-full px-4 py-2 rounded-full outline-none text-gray-700 focus:ring-2 focus:ring-blue-500"
      />
      <button
        className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-5 py-2 rounded-full ml-2 transition duration-300 transform hover:scale-105 active:scale-95 shadow-md"
      >
        <FaSearch className="text-lg" />
        <span className="ml-2 font-semibold">Search</span>
      </button>
    </div>
  );
};

export default SearchBar;
