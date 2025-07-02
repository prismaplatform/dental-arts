// components/Categories.jsx
import React from 'react';

const Categories = ({ categories, onSelectCategory, selectedCategory }) => {
  return (
    <div className="xl:p-30 p-20 border border-[#D8D8D8] mb-24">
      <h4 className="xl:text-2xl text-xl font-semibold pb-20 text-secondary capitalize font-sora">
        Kategóriák
      </h4>
      <ul className="space-y-10">
        <li className="mb-10">
          <button
            onClick={() => onSelectCategory(null)}
            className={`block w-full text-left py-10 px-10 rounded-md transition duration-300 ${
              selectedCategory === null ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            Összes
          </button>
        </li>
        {categories.map(category => (
          <li key={category}>
            <button
              onClick={() => onSelectCategory(category)}
              className={`block w-full text-left py-10 px-10 rounded-md transition duration-300 ${
                selectedCategory === category ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
