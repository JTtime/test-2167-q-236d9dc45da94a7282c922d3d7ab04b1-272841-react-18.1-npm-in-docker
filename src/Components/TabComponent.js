import React, { useState, useContext } from 'react';
import { MyContext } from './MyContext';
import "./Footer.css";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('places');
const [place, setPlace] = useState({id: 1, name: "India gate", openAt: "9am", closeAt: "5pm"})
  const {
    data,
        setData,
        selectedCity,
        setSelectedCity,
        searchedCity,
        setSearchedCity, placesData, setPlacesData
  } = useContext(MyContext);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setPlace(placesData[0])
  };

  return (
    <div className="container">
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'places' ? 'active' : ''}`}
          onClick={() => handleTabClick('places')}
        >
          Places
        </button>
        <button
          className={`tab ${activeTab === 'hotels' ? 'active' : ''}`}
          onClick={() => handleTabClick('hotels')}
        >
          Hotels
        </button>
        <button
          className={`tab ${activeTab === 'restaurants' ? 'active' : ''}`}
          onClick={() => handleTabClick('restaurants')}
        >
          Restaurants
        </button>
        <button
          className={`tab ${activeTab === 'offices' ? 'active' : ''}`}
          onClick={() => handleTabClick('offices')}
        >
          offices
        </button>
      </div>
      <div className="content">
        <div
          className={`tab-content ${activeTab === 'places' ? 'active contentGrid' : ''}`}
          id="content1"
        >
                      
          <div>{selectedCity?.name}</div>
          <div>{place.name}</div>
          <div>Tab 1</div>
        </div>
        <div
          className={`tab-content ${activeTab === 'hotels' ? 'active contentGrid' : ''}`}
          id="content2"
        >
          <div>{selectedCity?.name}</div>
          <div>{place.openAt}</div>

          <div>Tab 2</div>
        </div>
        <div
          className={`tab-content ${activeTab === 'restaurants' ? 'active contentGrid' : ''}`}
          id="content3"
        >
          <div>{selectedCity?.name}</div>
          <div>{place.closeAt}</div>
          <div>Tab 3</div>
        </div>
        <div
          className={`tab-content ${activeTab === 'offices' ? 'active contentGrid' : ''}`}
          id="content4"
        >
        <div>{selectedCity?.name}</div>
        <div>{place.entryFee}</div>
          <div>Tab 4</div>
        </div>
      </div>
    </div>
  )
};

export default TabComponent;
