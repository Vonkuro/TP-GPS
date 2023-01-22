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
          coordinate: [["Lille",50.6138111,3.0423599],["Paris",48.8640493,2.3310526]],
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
                <Map coordinate= {this.state.coordinate}/>
            </div>
            <div className="rightContainer">
                <InfoDisplay coordinate= {this.state.coordinate}/>
            </div>
        </div>
        
        
        </>
        );
    };
};

export default HomePage;