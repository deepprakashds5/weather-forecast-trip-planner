import type { TripDestination } from '../types/trip';

export const destinations: TripDestination[] = [
  {
    id: '1',
    name: 'Bali',
    country: 'Indonesia',
    description: 'Tropical paradise perfect for beach lovers and cultural enthusiasts.',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1920',
    bestTimeToVisit: 'April to October',
    averageTemp: 27,
    activities: ['beach', 'hiking', 'photography', 'surfing'],
    coordinates: {
      lat: -8.4095,
      lng: 115.1889
    }
  },
  {
    id: '2',
    name: 'Zermatt',
    country: 'Switzerland',
    description: 'Premier skiing destination with breathtaking mountain views.',
    imageUrl: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&q=80&w=1920',
    bestTimeToVisit: 'December to April',
    averageTemp: 0,
    activities: ['skiing', 'hiking', 'photography'],
    coordinates: {
      lat: 46.0207,
      lng: 7.7491
    }
  },
  {
    id: '3',
    name: 'Kyoto',
    country: 'Japan',
    description: 'Ancient capital with perfect weather for exploring temples and gardens.',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1920',
    bestTimeToVisit: 'March to May',
    averageTemp: 20,
    activities: ['sightseeing', 'photography', 'cultural'],
    coordinates: {
      lat: 35.0116,
      lng: 135.7681
    }
  },
  {
    id: '4',
    name: 'Santorini',
    country: 'Greece',
    description: 'Stunning island with white-washed buildings and spectacular sunsets.',
    imageUrl: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=1920',
    bestTimeToVisit: 'June to September',
    averageTemp: 25,
    activities: ['beach', 'photography', 'sightseeing', 'sailing'],
    coordinates: {
      lat: 36.3932,
      lng: 25.4615
    }
  },
  {
    id: '5',
    name: 'Queenstown',
    country: 'New Zealand',
    description: 'Adventure capital with year-round outdoor activities and stunning landscapes.',
    imageUrl: 'https://images.unsplash.com/photo-1589196728426-11656b445663?auto=format&fit=crop&q=80&w=1920',
    bestTimeToVisit: 'December to February',
    averageTemp: 16,
    activities: ['hiking', 'skiing', 'photography', 'adventure'],
    coordinates: {
      lat: -45.0312,
      lng: 168.6626
    }
  }
];