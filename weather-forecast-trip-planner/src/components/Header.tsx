import React from 'react';
import { Settings } from 'lucide-react';
import { SearchBar } from './SearchBar';

interface HeaderProps {
  onSearch: (city: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Weather Forecast</h1>
        <button className="p-2 hover:bg-gray-800/50 rounded-full transition-colors">
          <Settings size={24} />
        </button>
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};