import SearchBar from "./searchbar/SearchBar";
import React from "react";
import MeteoDisplay from "./infodisplay/meteoDisplay/MeteoDisplay";

class HomePage extends React.Component
{

    render()
    {
        return (
        <>
            <SearchBar/>
            <MeteoDisplay city="Cuges-les-pins" latitude={43} longitude={5}/>
        </>
        );
    };
};

export default HomePage;