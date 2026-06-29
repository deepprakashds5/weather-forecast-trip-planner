import React from 'react';
import { Cloud, Droplets } from 'lucide-react';
import type { DailyForecast } from '../types/weather';

interface DailyForecastProps {
  forecasts: DailyForecast[];
}

export const DailyForecast: React.FC<DailyForecastProps> = ({ forecasts }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">7-Day Forecast</h2>
      <div className="space-y-4">
        {forecasts.map((day, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2 border-b border-gray-700 last:border-0"
          >
            <div className="flex items-center gap-4">
              <span className="w-24 text-gray-400">{day.date}</span>
              <img
                src={`https://openweathermap.org/img/wn/${day.weather.icon}.png`}
                alt={day.weather.description}
                className="w-10 h-10"
              />
              <span className="capitalize">{day.weather.description}</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                <Droplets size={16} className="text-blue-400" />
                <span>{Math.round(day.pop * 100)}%</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-400">{Math.round(day.temp.min)}°</span>
                <span>{Math.round(day.temp.max)}°</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};