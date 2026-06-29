import type { TripDestination } from '../../types/trip';

export const europeanDestinations: TripDestination[] = [
  {
    id: 'europe-1',
    name: 'Santorini',
    country: 'Greece',
    description: 'Stunning island with white-washed buildings and spectacular sunsets.',
    imageUrl: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=1920',
    bestTimeToVisit: 'June to September',
    averageTemp: 25,
    activities: ['beach', 'photography', 'sightseeing', 'sailing'],
    coordinates: { lat: 36.3932, lng: 25.4615 }
  },
  {
    id: 'europe-2',
    name: 'Zermatt',
    country: 'Switzerland',
    description: 'Premier skiing destination with breathtaking mountain views.',
    imageUrl: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&q=80&w=1920',
    bestTimeToVisit: 'December to April',
    averageTemp: 0,
    activities: ['skiing', 'hiking', 'photography', 'mountaineering'],
    coordinates: { lat: 46.0207, lng: 7.7491 }
  },
  {
    id: 'europe-3',
    name: 'Amalfi Coast',
    country: 'Italy',
    description: 'Dramatic coastline with colorful villages and Mediterranean charm.',
    imageUrl: 'https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?auto=format&fit=crop&q=80&w=1920',
    bestTimeToVisit: 'May to October',
    averageTemp: 24,
    activities: ['beach', 'sightseeing', 'food', 'sailing'],
    coordinates: { lat: 40.6333, lng: 14.6029 }
  },
  {
    id: 'europe-4',
    name: 'Iceland',
    country: 'Iceland',
    description: 'Land of fire and ice with stunning natural phenomena.',
    imageUrl: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&q=80&w=1920',
    bestTimeToVisit: 'June to August',
    averageTemp: 12,
    activities: ['photography', 'hiking', 'adventure', 'northern-lights'],
    coordinates: { lat: 64.9631, lng: -19.0208 }
  }
];