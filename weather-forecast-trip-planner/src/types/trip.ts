export interface TripPreferences {
  startDate: string;
  endDate: string;
  weatherCondition: string;
  activities: string[];
}

export interface TripDestination {
  id: string;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  bestTimeToVisit: string;
  averageTemp: number;
  activities: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}