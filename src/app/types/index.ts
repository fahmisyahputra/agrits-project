// Add custom types here

// Example type for navigation links
export type NavLink = {
    href: string;
    label: string;
  };
  
  // Example type for rice health data
  export type RiceHealthData = {
    location: string;
    healthIndex: number;
    temperature: number;
    humidity: number;
    rainfall: number;
    timestamp: Date;
  };
  
  // Example type for weather data
  export type WeatherData = {
    location: string;
    temperature: number;
    humidity: number;
    rainfall: number;
    forecast: string;
    timestamp: Date;
  };