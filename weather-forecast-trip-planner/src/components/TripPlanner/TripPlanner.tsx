import React, { useState } from 'react';
import { TripPlannerForm } from './TripPlannerForm';
import { TripResults } from './TripResults';
import { findDestinations } from '../../utils/trip-recommendations';
import type { TripPreferences, TripDestination } from '../../types/trip';

export const TripPlanner: React.FC = () => {
  const [destinations, setDestinations] = useState<TripDestination[]>([]);

  const handleSubmit = async (preferences: TripPreferences) => {
    const recommendations = await findDestinations(preferences);
    setDestinations(recommendations);
  };

  const handleShare = (destination: TripDestination) => {
    // Implement sharing functionality
    const shareText = `Check out my trip plan to ${destination.name}! Perfect weather for ${destination.activities.join(', ')}`;
    if (navigator.share) {
      navigator.share({
        title: 'My Trip Plan',
        text: shareText,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="space-y-8">
      <TripPlannerForm onSubmit={handleSubmit} />
      <TripResults destinations={destinations} onShare={handleShare} />
    </div>
  );
};