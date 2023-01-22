import SearchBar from "./searchbar/SearchBar";
import React from "react";
import InfoDisplay from "./infodisplay/InfoDisplay";
import "./HomePage.css";
import Map from './map/Map';


class HomePage extends React.Component
{
    render()
    {
        return (
        <>
        <div className="homeContainer">
            <div className="centerContainer">
                <SearchBar/>
                <Map/>
            </div>
            <div className="rightContainer">
                <InfoDisplay/>
            </div>
        </div>
        
        
        </>
        );
    };
};

export default HomePage;