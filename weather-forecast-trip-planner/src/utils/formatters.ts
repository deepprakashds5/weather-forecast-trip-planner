export const formatTemperature = (temp: number): string => 
  `${Math.round(temp)}°`;

export const formatWindSpeed = (speed: number): string =>
  `${Math.round(speed * 3.6)} km/h`;

export const formatDate = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
};

export const formatTime = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};