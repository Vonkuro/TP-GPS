import SearchBar from "./searchbar/SearchBar";
import React from "react";
import InfoDisplay from "./infodisplay/InfoDisplay";

class HomePage extends React.Component
{

    render()
    {
        return (
        <>
            <SearchBar/>
            <InfoDisplay/>
        </>
        );
    };
};

export default HomePage;