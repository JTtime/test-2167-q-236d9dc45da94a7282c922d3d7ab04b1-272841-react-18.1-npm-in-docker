import React, { useContext } from "react";
import { MyContext } from "./MyContext";

export default function WeatherForecast() {
  const { selectedCity, setSelectedCity } = useContext(MyContext);
  const temperature = selectedCity?.weather?.temp;
  return (
    <div className="weather">
       {selectedCity && <img alt="weather-condition" src={selectedCity.weather.icon}/>}
      {selectedCity && <div> {selectedCity?.weather?.temp}</div>}
      {selectedCity && <div>{selectedCity?.weather?.main}</div>}

    </div>
  );
}
