import React from 'react';
import { Cloud, Droplets, Wind } from 'lucide-react';
import { formatTemperature, formatWindSpeed } from '../utils/formatters';

interface WeatherCardProps {
  city: string;
  country: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  description: string;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({
  city,
  country,
  temperature,
  humidity,
  windSpeed,
  description,
}) => {
  return (
    <div className="bg-gray-800 rounded-2xl p-6 text-white">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-3xl font-bold">{city}</h2>
          <p className="text-gray-400">{country}</p>
        </div>
        <div className="text-right">
          <p className="text-4xl font-bold">{formatTemperature(temperature)}</p>
          <p className="text-gray-400 capitalize">{description}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center gap-2">
          <Cloud className="text-blue-400" />
          <div>
            <p className="text-sm text-gray-400">Temperature</p>
            <p className="font-semibold">{formatTemperature(temperature)}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Droplets className="text-blue-400" />
          <div>
            <p className="text-sm text-gray-400">Humidity</p>
            <p className="font-semibold">{humidity}%</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Wind className="text-blue-400" />
          <div>
            <p className="text-sm text-gray-400">Wind speed</p>
            <p className="font-semibold">{formatWindSpeed(windSpeed)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};