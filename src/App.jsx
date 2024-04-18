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
        'https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=a076aeda63b1b76da163b5006aaf8792&units=metric'
      );
      const data = await response.json();
      setTemperature(data.main.temp);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <h1>Current Temperature in Dallas</h1>
      <p>{temperature ? `${temperature}°C` : 'Loading...'}</p>
    </div>
  );
}

export default App;
