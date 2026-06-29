export const getWeatherBackground = (weatherCode: string): string => {
  const timeOfDay = weatherCode.includes('n') ? 'night' : 'day';
  
  const backgrounds = {
    // Clear sky
    '01d': 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?auto=format&fit=crop&q=80&w=1920',
    '01n': 'https://images.unsplash.com/photo-1532978879514-6cb2cac0c60a?auto=format&fit=crop&q=80&w=1920',
    // Few clouds
    '02d': 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?auto=format&fit=crop&q=80&w=1920',
    '02n': 'https://images.unsplash.com/photo-1505322022379-7c3353ee6291?auto=format&fit=crop&q=80&w=1920',
    // Rain
    '09d': 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&q=80&w=1920',
    '09n': 'https://images.unsplash.com/photo-1501999635878-71cb5379c2d8?auto=format&fit=crop&q=80&w=1920',
    // Thunderstorm
    '11d': 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?auto=format&fit=crop&q=80&w=1920',
    '11n': 'https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?auto=format&fit=crop&q=80&w=1920',
  };

  // Default backgrounds for time of day if specific weather condition not found
  const defaultBackgrounds = {
    day: 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?auto=format&fit=crop&q=80&w=1920',
    night: 'https://images.unsplash.com/photo-1532978879514-6cb2cac0c60a?auto=format&fit=crop&q=80&w=1920',
  };

  return backgrounds[weatherCode] || defaultBackgrounds[timeOfDay];
};