import LandingPage from "./Components/LandingPage";
import WeatherForecast from "./Components/WeatherForecast";
import "./Components/LandingPage.css";
import { MyContext } from "./Components/MyContext";
import React, { useState } from "react";
import TabComponent from "./Components/TabComponent";

export default function App() {
  const [data, setData] = useState([]);
  const [selectedCity, setSelectedCity] = useState({
    id: 2,
    name: "Mumbai",
    backgroundUrl:
      "https://cdn.pixabay.com/photo/2015/01/23/12/43/gateway-of-india-609076_1280.jpg",
    categories: null,
    weather: {
      temp: 28,
      main: "Mist",
      icon: "http://openweathermap.org/img/w/50d.png"
    }
  });
  const [searchedCity, setSearchedCity] = useState("Mumbai");
  const [placesData, setPlacesData] = useState([{id:1, name:"Mumbai"}]);

  return (
    <MyContext.Provider
      value={{
        data,
        setData,
        selectedCity,
        setSelectedCity,
        searchedCity,
        setSearchedCity, placesData, setPlacesData
      }}
    >
      <div className="App">
        <WeatherForecast />

        <LandingPage />
        <TabComponent/>
      </div>
    </MyContext.Provider>
  );
}
