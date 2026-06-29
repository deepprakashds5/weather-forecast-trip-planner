import { asianDestinations } from './asia';
import { europeanDestinations } from './europe';
import { americanDestinations } from './americas';
import { oceaniaDestinations } from './oceania';
import type { TripDestination } from '../../types/trip';

export const destinations: TripDestination[] = [
  ...asianDestinations,
  ...europeanDestinations,
  ...americanDestinations,
  ...oceaniaDestinations
];