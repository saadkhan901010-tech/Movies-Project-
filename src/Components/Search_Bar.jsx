import React from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Search Icon (Absolute Positioned) */}
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>

      {/* Input Field */}
      <input
        type="text"
        className="block w-full pl-11 pr-10 py-3 text-sm md:text-base text-gray-900 bg-[#eceaea] rounded-full shadow-lg border-none focus:ring-4 focus:ring-orange-500 placeholder-gray-400 transition-all duration-300 ease-in-out outline-none"
        placeholder="Search movies, shows..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Clear Button (Only visible when typing) */}
      {searchTerm && (
        <button
          onClick={() => setSearchTerm('')}
          className="absolute inset-y-0 right-0 pr-3 flex items-center group"
        >
          <div className="p-1 bg-gray-200 rounded-full group-hover:bg-gray-300 transition-colors">
            <X className="h-4 w-4 text-gray-600" />
          </div>
        </button>
      )}
    </div>
  );
};

export default SearchBar;