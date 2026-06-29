import React, { useState } from 'react';
import { Calendar, Compass, Activity } from 'lucide-react';
import type { TripPreferences } from '../../types/trip';

interface TripPlannerFormProps {
  onSubmit: (preferences: TripPreferences) => void;
}

export const TripPlannerForm: React.FC<TripPlannerFormProps> = ({ onSubmit }) => {
  const [preferences, setPreferences] = useState<TripPreferences>({
    startDate: '',
    endDate: '',
    weatherCondition: '',
    activities: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800/50 backdrop-blur-md rounded-xl p-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <Compass className="text-blue-400" />
        Plan Your Weather-Perfect Trip
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Start Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="date"
              value={preferences.startDate}
              onChange={(e) => setPreferences({ ...preferences, startDate: e.target.value })}
              className="w-full bg-gray-700 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">End Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="date"
              value={preferences.endDate}
              onChange={(e) => setPreferences({ ...preferences, endDate: e.target.value })}
              className="w-full bg-gray-700 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              min={preferences.startDate || new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Weather Preference</label>
          <select
            value={preferences.weatherCondition}
            onChange={(e) => setPreferences({ ...preferences, weatherCondition: e.target.value })}
            className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select weather condition</option>
            <option value="sunny">Sunny and Warm</option>
            <option value="mild">Mild and Pleasant</option>
            <option value="cool">Cool and Crisp</option>
            <option value="snowy">Snowy</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Activities</label>
          <div className="flex flex-wrap gap-2">
            {['hiking', 'beach', 'skiing', 'sightseeing', 'photography'].map((activity) => (
              <label key={activity} className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={preferences.activities.includes(activity)}
                  onChange={(e) => {
                    const newActivities = e.target.checked
                      ? [...preferences.activities, activity]
                      : preferences.activities.filter(a => a !== activity);
                    setPreferences({ ...preferences, activities: newActivities });
                  }}
                  className="form-checkbox h-4 w-4 text-blue-400 rounded border-gray-500 bg-gray-700"
                />
                <span className="ml-2 text-sm text-gray-300 capitalize">{activity}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        <Activity size={18} />
        Find Perfect Destinations
      </button>
    </form>
  );
};