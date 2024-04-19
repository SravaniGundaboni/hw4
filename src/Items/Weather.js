// src/App.jsx

import React, { useState, useEffect } from 'react';

function App() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric'
      );
      const data = await response.json();
      setTemperature(data.main.temp);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <h1>Current Temperature</h1>
      <p>{temperature ? `${temperature}°C` : 'Loading...'}</p>
    </div>
  );
}

export default App;
// ok