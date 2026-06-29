import { formatDate } from './formatters';
import type { WeatherData, ForecastData, DailyForecast } from '../types/weather';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city: string) => {
  try {
    const [weatherRes, forecastRes] = await Promise.all([
      fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`),
      fetch(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`)
    ]);

    if (!weatherRes.ok || !forecastRes.ok) {
      throw new Error('City not found');
    }

    const weatherData: WeatherData = await weatherRes.json();
    const forecastData: ForecastData = await forecastRes.json();

    return { weatherData, forecastData };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Failed to fetch weather data');
  }
};

export const processDaily = (forecastData: ForecastData): DailyForecast[] => {
  const dailyMap = new Map();
  
  forecastData.list.forEach((item) => {
    const date = new Date(item.dt * 1000).toDateString();
    
    if (!dailyMap.has(date)) {
      dailyMap.set(date, {
        temps: [],
        weather: item.weather[0],
        pop: item.pop,
        date: formatDate(item.dt)
      });
    }
    
    dailyMap.get(date).temps.push(item.main.temp);
  });

  return Array.from(dailyMap.values()).slice(0, 7).map(day => ({
    date: day.date,
    temp: {
      min: Math.min(...day.temps),
      max: Math.max(...day.temps)
    },
    weather: day.weather,
    pop: day.pop
  }));
};