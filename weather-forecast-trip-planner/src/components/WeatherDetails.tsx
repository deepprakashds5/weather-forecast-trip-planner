import React from 'react';
import { Droplets, Wind, Thermometer, Gauge } from 'lucide-react';
import { formatWindSpeed } from '../utils/formatters';

interface WeatherDetailsProps {
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  pressure: number;
}

export const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  feelsLike,
  humidity,
  windSpeed,
  pressure,
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-800/50 backdrop-blur-md rounded-xl p-4">
      <div className="flex items-center gap-3">
        <Thermometer className="text-blue-400" />
        <div>
          <p className="text-sm text-gray-400">Feels like</p>
          <p className="font-semibold">{Math.round(feelsLike)}°C</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Droplets className="text-blue-400" />
        <div>
          <p className="text-sm text-gray-400">Humidity</p>
          <p className="font-semibold">{humidity}%</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Wind className="text-blue-400" />
        <div>
          <p className="text-sm text-gray-400">Wind speed</p>
          <p className="font-semibold">{formatWindSpeed(windSpeed)}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Gauge className="text-blue-400" />
        <div>
          <p className="text-sm text-gray-400">Pressure</p>
          <p className="font-semibold">{pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};