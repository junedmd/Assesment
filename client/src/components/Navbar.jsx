import React, { useState } from "react";

function Navbar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(search);
      setSearch("") 
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="bg-gray-100 p-4 flex justify-center items-center">
      <input
        type="text"
        placeholder="Search your projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={handleKeyPress}
        className="w-80 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition"
      >
        Search
      </button>
    </div>
  );
}

export default Navbar;
