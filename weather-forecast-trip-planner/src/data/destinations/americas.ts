import type { TripDestination } from '../../types/trip';

export const americanDestinations: TripDestination[] = [
  {
    id: 'americas-1',
    name: 'Machu Picchu',
    country: 'Peru',
    description: 'Ancient Incan citadel set high in the Andes Mountains.',
    imageUrl: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=1920',
    bestTimeToVisit: 'April to October',
    averageTemp: 18,
    activities: ['hiking', 'photography', 'cultural', 'adventure'],
    coordinates: { lat: -13.1631, lng: -72.5450 }
  },
  {
    id: 'americas-2',
    name: 'Banff',
    country: 'Canada',
    description: 'Stunning mountain landscapes and pristine wilderness.',
    imageUrl: 'https://images.unsplash.com/photo-1561134643-668f9057cce4?auto=format&fit=crop&q=80&w=1920',
    bestTimeToVisit: 'June to August',
    averageTemp: 16,
    activities: ['hiking', 'photography', 'skiing', 'wildlife'],
    coordinates: { lat: 51.1784, lng: -115.5708 }
  },
  {
    id: 'americas-3',
    name: 'Rio de Janeiro',
    country: 'Brazil',
    description: 'Vibrant city with beautiful beaches and iconic landmarks.',
    imageUrl: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80&w=1920',
    bestTimeToVisit: 'December to March',
    averageTemp: 30,
    activities: ['beach', 'cultural', 'nightlife', 'sightseeing'],
    coordinates: { lat: -22.9068, lng: -43.1729 }
  },
  {
    id: 'americas-4',
    name: 'Yellowstone',
    country: 'United States',
    description: 'World\'s first national park with unique geothermal features.',
    imageUrl: 'https://images.unsplash.com/photo-1533031685476-4779b3f7bcc8?auto=format&fit=crop&q=80&w=1920',
    bestTimeToVisit: 'May to September',
    averageTemp: 20,
    activities: ['hiking', 'wildlife', 'photography', 'camping'],
    coordinates: { lat: 44.4280, lng: -110.5885 }
  }
];