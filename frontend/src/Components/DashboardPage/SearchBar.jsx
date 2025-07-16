// SearchBar.jsx
import React from 'react';

const SearchBar = () => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-2">Recent Applications</h2>
    <input
      type="search"
      placeholder="🔍 Search Applications"
      className="w-full p-3 border-2 border-[#2c3e50] bg-indigo-100 text-indigo-900 rounded-md text-base"
    />
  </div>
);

export default SearchBar;