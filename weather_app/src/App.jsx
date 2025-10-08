import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import axios from "axios";
import cloudImage from "./assets/clouds.png";
import clearImage from "./assets/clear.png";
import drizzleImage from "./assets/drizzle.png";

import mistImage from "./assets/mist.png";
import rainImage from "./assets/rain.png";
import snowImage from "./assets/snow.png";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [image, setImage] = useState(cloudImage);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    try {
      const currentCity = cityName || "new york"; // fallback to "mardan"
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${currentCity}&appid=${
        import.meta.env.VITE_API_KEY
      }`;
      const response = await axios.get(apiUrl);
      setWeather(response.data);
    } catch (err) {
      alert("City not found!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!weather) return;

    switch (weather.weather[0].main) {
      case "Clouds":
        setImage(cloudImage);
        break;
      case "Clear":
        setImage(clearImage);
        break;
      case "Rain":
        setImage(rainImage);
        break;
      case "Drizzle":
        setImage(drizzleImage);
        break;
      case "Snow":
        setImage(snowImage);
        break;
      case "Mist":
        setImage(mistImage);
        break;
      default:
        setImage(cloudImage);
        break;
    }
  }, [weather]);

  useEffect(() => {
    fetchWeather(); // fetch default on first load
  }, []);

  const searchByCity = () => {
    if (!city.trim()) return;
    fetchWeather(city);
    setCity("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-yellow-400 to-orange-500">
      <div className="max-w-sm w-full space-y-6">
        <SearchBar city={city} setCity={setCity} searchByCity={searchByCity} />
        {loading ? (
          <p className="text-center text-white">Loading...</p>
        ) : (
          <WeatherCard
            cityName={weather?.name}
            temperature={weather?.main.temp}
            weather={weather?.weather[0].description}
            image={image}
            windSpeed={weather?.wind.speed}
            humidity={weather?.main.humidity}
          />
        )}
      </div>
    </div>
  );
};

export default App;
