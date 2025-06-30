// components/SearchBar.jsx
import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="xl:p-30 p-20 border border-[#D8D8D8] mb-24  ">
      <h4 className="xl:text-2xl text-xl font-semibold pb-20 text-secondary capitalize font-sora">Search Blog</h4>
      <input
        type="text"
        placeholder="Search posts..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full h-60 pl-24 border border-[#d8d8d8] placeholder:text-gary outline-none"
      />
    </div>
  );
};

export default SearchBar;