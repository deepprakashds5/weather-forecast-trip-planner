import { destinations } from '../data/destinations';
import type { TripPreferences, TripDestination } from '../types/trip';

const calculateDestinationScore = (
  destination: TripDestination,
  preferences: TripPreferences
): number => {
  let score = 0;

  // Activity match score (40%)
  const activityMatchCount = preferences.activities.filter(activity =>
    destination.activities.includes(activity)
  ).length;
  score += (activityMatchCount / preferences.activities.length) * 40;

  // Weather condition match score (40%)
  const weatherScore = (() => {
    switch (preferences.weatherCondition) {
      case 'snowy':
        return destination.averageTemp <= 0 ? 40 : 0;
      case 'mild':
        return destination.averageTemp >= 15 && destination.averageTemp <= 25 ? 40 : 
               destination.averageTemp < 15 ? 40 - (15 - destination.averageTemp) * 2 :
               40 - (destination.averageTemp - 25) * 2;
      case 'sunny':
        return destination.averageTemp > 25 ? 40 : 40 - (25 - destination.averageTemp);
      default:
        return 20;
    }
  })();
  score += weatherScore;

  // Season match score (20%)
  const currentMonth = new Date().getMonth();
  const [startMonth, endMonth] = getBestTimeMonths(destination.bestTimeToVisit);
  const isInSeason = currentMonth >= startMonth && currentMonth <= endMonth;
  score += isInSeason ? 20 : 0;

  return score;
};

const getBestTimeMonths = (bestTimeToVisit: string): [number, number] => {
  const months = {
    'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
    'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
  };
  
  const [start, end] = bestTimeToVisit.split(' to ').map(m => months[m as keyof typeof months]);
  return [start, end];
};

export const findDestinations = async (
  preferences: TripPreferences
): Promise<TripDestination[]> => {
  // Score and sort destinations
  const scoredDestinations = destinations
    .map(destination => ({
      destination,
      score: calculateDestinationScore(destination, preferences)
    }))
    .sort((a, b) => b.score - a.score)
    .map(({ destination }) => destination);

  return scoredDestinations;
};