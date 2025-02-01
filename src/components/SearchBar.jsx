import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <div className="flex items-center gap-2 p-2 bg-gray-200 rounded-md">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
