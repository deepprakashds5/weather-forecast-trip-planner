import React, { useState, useEffect } from 'react';
import { WeatherCard } from './components/WeatherCard';
import { WeatherDetails } from './components/WeatherDetails';
import { HourlyForecast } from './components/HourlyForecast';
import { DailyForecast } from './components/DailyForecast';
import { Background } from './components/Background';
import { Header } from './components/Header';
import { ErrorMessage } from './components/ErrorMessage';
import { TripPlanner } from './components/TripPlanner/TripPlanner';
import { fetchWeatherData, processDaily } from './utils/weather-service';
import { getWeatherBackground } from './utils/weather';
import type { WeatherData, ForecastData } from './types/weather';

export default function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [error, setError] = useState<string>('');
  const [showTripPlanner, setShowTripPlanner] = useState(false);

  const handleSearch = async (city: string) => {
    try {
      const { weatherData, forecastData } = await fetchWeatherData(city);
      setWeather(weatherData);
      setForecast(forecastData);
      setError('');
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
    }
  };

  useEffect(() => {
    handleSearch('London');
  }, []);

  const getHourlyData = () => {
    if (!forecast) return [];
    return forecast.list.slice(0, 24).map(item => ({
      time: new Date(item.dt * 1000).toLocaleTimeString('en-US', { 
        hour: '2-digit',
        hour12: true 
      }),
      temp: item.main.temp,
      icon: item.weather[0].icon,
      pop: item.pop
    }));
  };

  const getDailyForecasts = () => {
    if (!forecast) return [];
    return processDaily(forecast);
  };

  const backgroundImage = weather 
    ? getWeatherBackground(weather.weather[0].icon)
    : getWeatherBackground('01d');

  return (
    <Background imageUrl={backgroundImage}>
      <div className="p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <Header onSearch={handleSearch} />
          
          {error && <ErrorMessage message={error} />}

          {weather && (
            <>
              <WeatherCard
                city={weather.name}
                country={weather.sys.country}
                temperature={weather.main.temp}
                description={weather.weather[0].description}
                icon={weather.weather[0].icon}
                humidity={weather.main.humidity}
                windSpeed={weather.wind.speed}
              />

              <WeatherDetails
                feelsLike={weather.main.feels_like}
                humidity={weather.main.humidity}
                windSpeed={weather.wind.speed}
                pressure={weather.main.pressure}
              />

              <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">24-Hour Forecast</h2>
                <HourlyForecast hourlyData={getHourlyData()} />
              </div>

              <DailyForecast forecasts={getDailyForecasts()} />

              <button
                onClick={() => setShowTripPlanner(!showTripPlanner)}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors"
              >
                {showTripPlanner ? 'Hide Trip Planner' : 'Plan a Weather-Perfect Trip'}
              </button>

              {showTripPlanner && <TripPlanner />}
            </>
          )}
        </div>
      </div>
    </Background>
  );
}