import type { TripDestination } from '../../types/trip';

export const asianDestinations: TripDestination[] = [
  {
    id: 'asia-1',
    name: 'Kyoto',
    country: 'Japan',
    description: 'Ancient capital with perfect weather for exploring temples and gardens.',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1920',
    bestTimeToVisit: 'March to May',
    averageTemp: 20,
    activities: ['sightseeing', 'photography', 'cultural', 'temples'],
    coordinates: { lat: 35.0116, lng: 135.7681 }
  },
  {
    id: 'asia-2',
    name: 'Bali',
    country: 'Indonesia',
    description: 'Tropical paradise perfect for beach lovers and cultural enthusiasts.',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1920',
    bestTimeToVisit: 'April to October',
    averageTemp: 27,
    activities: ['beach', 'hiking', 'photography', 'surfing', 'cultural'],
    coordinates: { lat: -8.4095, lng: 115.1889 }
  },
  {
    id: 'asia-3',
    name: 'Seoul',
    country: 'South Korea',
    description: 'Dynamic city blending modern technology with traditional culture.',
    imageUrl: 'https://images.unsplash.com/photo-1538485399081-7c8ed7c189c7?auto=format&fit=crop&q=80&w=1920',
    bestTimeToVisit: 'March to May',
    averageTemp: 22,
    activities: ['cultural', 'shopping', 'photography', 'food'],
    coordinates: { lat: 37.5665, lng: 126.9780 }
  },
  {
    id: 'asia-4',
    name: 'Maldives',
    country: 'Maldives',
    description: 'Paradise islands with crystal clear waters and luxury resorts.',
    imageUrl: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=1920',
    bestTimeToVisit: 'November to April',
    averageTemp: 30,
    activities: ['beach', 'snorkeling', 'diving', 'luxury'],
    coordinates: { lat: 3.2028, lng: 73.2207 }
  }
];