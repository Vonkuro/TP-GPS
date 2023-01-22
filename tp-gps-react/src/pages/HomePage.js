import SearchBar from "./searchbar/SearchBar";
import React from "react";
import InfoDisplay from "./infodisplay/InfoDisplay";
import "./HomePage.css";
import Map from './map/Map';


class HomePage extends React.Component
{
    constructor(props){
        super(props);
  
        this.state = {
          coordinate: [[]],
        };
        this.handles = {
            coordinateHandler : this.coordinateHandler.bind(this),
        }
    }


    coordinateHandler(value){
        this.setState({coordinate : value});
    };

    render()
    {
        return (
        <>
        <div className="homeContainer">
            <div className="centerContainer">
                <SearchBar handler={this.handles.coordinateHandler}/>
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