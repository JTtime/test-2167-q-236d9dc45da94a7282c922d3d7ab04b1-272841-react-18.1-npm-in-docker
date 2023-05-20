import React, { useEffect, useContext, useState } from "react";
import { MyContext } from "./MyContext";
import "./LandingPage.css";

export default function LandingPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const {
        data,
        setData,
        selectedCity,
        setSelectedCity,
        setSearchedCity,
        searchedCity, setPlacesData, placesData
    } = useContext(MyContext);
    


    const fetchData = async () => {
        const data = await fetch(
            "https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1458/data.json"
        );
        const result = await data.json();
        setData(result);
        console.log(result);
    };
    

    useEffect(() => {
        fetchData();
        console.log(data);
    }, []);

    useEffect(() => {
        const currentCity = data.find(item => item.name.toLowerCase() === searchedCity.toLowerCase());
        setSelectedCity({ ...selectedCity, ...currentCity });
    }, [searchedCity]);

    useEffect(()=> {
        const city = data.find(city=>city.name===selectedCity.name)
        setPlacesData(city?.categories.places)
    },[selectedCity])

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        console.log(searchTerm)
    }

    const handleClick = (event) => {
        event.preventDefault();
        const matchingCity = data.find((city) =>
            city.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setSearchedCity(matchingCity?.name)
        setSearchTerm("");

    }

    return (
        <div className="mainLanding" style={{ backgroundImage: `url(${selectedCity.backgroundUrl})` }}>
            <h1 className="city-title">{selectedCity.name}</h1>

            <div class="input-container">
                <input type="text" placeholder="Explore Cities" value={searchTerm} onChange={handleSearch} />
                <button type="button" onClick={(e)=>handleClick(e)}>Search</button>
            </div>

        </div>
    );
}
