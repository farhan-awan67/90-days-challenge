import React from "react";
import humidityImage from "../assets/humidity.png";
import windImage from "../assets/wind.png";

const WeatherCard = ({
  cityName,
  temperature,
  weather,
  image,
  windSpeed,
  humidity,
}) => {
  return (
    <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl text-center text-white shadow-lg space-y-3">
      <h2 className="text-2xl font-semibold">{cityName}</h2>
      <img src={image} alt="Clear" className="mx-auto w-20 h-20" />
      <p className="text-4xl font-bold">{temperature}°C</p>
      <p className="text-lg">{weather}</p>
      <div className="flex items-center justify-evenly gap-2">
        <div className="flex items-center gap-2">
          <img
            className="w-9 h-9 object-cover"
            src={humidityImage}
            alt="humidity image"
          />
          <div className="info">
            <h2 className="font-bold">{humidity} %</h2>
            <p className="tracking-tighter">Humididty</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            className="w-9 h-9 object-cover"
            src={windImage}
            alt="humidity image"
          />
          <div className="info">
            <h2 className="font-bold">{windSpeed} m/s</h2>
            <p className="tracking-tighter">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
