import React, { useState, useEffect } from "react";
import HomePageHeader from "./HomePage/HomePageHeader";

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append(
          "Cookie",
          "WAPIZMHSession=en43w1dqvzmp03v3w5ezxsnu; weatherapiannon=j9jBhd9QQ_3t7A552Ceueb9ECGMjCzuUjJnTBoY-_EZeWExFZ-dqcUrSHZYTqkhcjPxHiFphofcA8Da6hhgaRevPog6LYShC8oSrXCCsUGH0nk05XBEzxPJTmuzd9B7Twpgdcw2"
        );

        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        const response = await fetch(
          "http://api.weatherapi.com/v1/forecast.json?key=c1fa599bff55488eb02211050242501&q=London&days=1&aqi=no&alerts=no",
          requestOptions
        );
        const data = await response.json();
        console.log("Fetched Weather Data:", data); // Verileri konsola yazdırma
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <HomePageHeader></HomePageHeader>
      <h2>Weather Information</h2>
      {weatherData && (
        <div>
          <p>
            Location: {weatherData.location.name},{" "}
            {weatherData.location.country}
          </p>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
          <p>Date: {weatherData.forecast.date}</p>
          <h3>Forecast</h3>
          <ul>
            {weatherData.forecast.forecastday.map((day, index) => (
              <li key={index}>
                Date: {day.date}, Max Temp: {day.day.maxtemp_c}°C, Min Temp:{" "}
                {day.day.mintemp_c}°C
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
