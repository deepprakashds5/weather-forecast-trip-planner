import React from 'react';
import { MapPin, Calendar, ThermometerSun, Share2 } from 'lucide-react';
import type { TripDestination } from '../../types/trip';

interface TripResultsProps {
  destinations: TripDestination[];
  onShare: (destination: TripDestination) => void;
}

export const TripResults: React.FC<TripResultsProps> = ({ destinations, onShare }) => {
  if (destinations.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <MapPin className="text-blue-400" />
        Recommended Destinations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="bg-gray-800/50 backdrop-blur-md rounded-xl overflow-hidden"
          >
            <img
              src={destination.imageUrl}
              alt={destination.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-4">
              <div>
                <h3 className="text-xl font-semibold">{destination.name}</h3>
                <p className="text-gray-400">{destination.country}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar size={16} className="text-blue-400" />
                  <span>Best time to visit: {destination.bestTimeToVisit}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ThermometerSun size={16} className="text-blue-400" />
                  <span>Average temperature: {destination.averageTemp}°C</span>
                </div>
              </div>

              <p className="text-sm text-gray-300">{destination.description}</p>

              <div className="flex items-center gap-2">
                {destination.activities.map((activity) => (
                  <span
                    key={activity}
                    className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
                  >
                    {activity}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onShare(destination)}
                className="w-full mt-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Share2 size={16} />
                Share Trip Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};