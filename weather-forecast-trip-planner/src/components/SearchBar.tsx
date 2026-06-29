import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search city or postcode"
        className="w-full bg-gray-800 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
    </form>
  );
};