import React from 'react';
import { formatTemperature } from '../utils/formatters';

interface HourlyForecastProps {
  hourlyData: Array<{
    time: string;
    temp: number;
    icon: string;
  }>;
}

export const HourlyForecast: React.FC<HourlyForecastProps> = ({ hourlyData }) => {
  return (
    <div className="flex gap-4 overflow-x-auto py-4 px-2">
      {hourlyData.map((hour, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-gray-800 rounded-xl p-4 min-w-[80px]"
        >
          <span className="text-gray-400 text-sm">{hour.time}</span>
          <img
            src={`https://openweathermap.org/img/wn/${hour.icon}.png`}
            alt="weather icon"
            className="w-8 h-8"
          />
          <span className="font-semibold text-white">{formatTemperature(hour.temp)}</span>
        </div>
      ))}
    </div>
  );
};