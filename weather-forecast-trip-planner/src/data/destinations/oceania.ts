import type { TripDestination } from '../../types/trip';

export const oceaniaDestinations: TripDestination[] = [
  {
    id: 'oceania-1',
    name: 'Queenstown',
    country: 'New Zealand',
    description: 'Adventure capital with year-round outdoor activities and stunning landscapes.',
    imageUrl: 'https://images.unsplash.com/photo-1589196728426-11656b445663?auto=format&fit=crop&q=80&w=1920',
    bestTimeToVisit: 'December to February',
    averageTemp: 16,
    activities: ['hiking', 'skiing', 'photography', 'adventure'],
    coordinates: { lat: -45.0312, lng: 168.6626 }
  },
  {
    id: 'oceania-2',
    name: 'Great Barrier Reef',
    country: 'Australia',
    description: 'World\'s largest coral reef system with incredible marine life.',
    imageUrl: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&q=80&w=1920',
    bestTimeToVisit: 'June to October',
    averageTemp: 25,
    activities: ['diving', 'snorkeling', 'beach', 'sailing'],
    coordinates: { lat: -18.2871, lng: 147.6992 }
  },
  {
    id: 'oceania-3',
    name: 'Bora Bora',
    country: 'French Polynesia',
    description: 'Tropical paradise with luxury overwater bungalows.',
    imageUrl: 'https://images.unsplash.com/photo-1598127895781-09be77821597?auto=format&fit=crop&q=80&w=1920',
    bestTimeToVisit: 'May to October',
    averageTemp: 29,
    activities: ['beach', 'snorkeling', 'luxury', 'romance'],
    coordinates: { lat: -16.5004, lng: -151.7415 }
  }
];