// Ideas for implementation
// One main functional component
// Two autocompletion inputs
// A button
// Send the info to the map component
//      Use a Callback props
//          a handler that wrapp over a setState of HomePage
// The list of all the potential town
import TextInput from 'react-autocomplete-input';
import 'react-autocomplete-input/dist/bundle.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SearchBar.css";

function SearchBar(props) {

    const [cities, setCities] = useState([]);
    const [startCity, setStartCity] = useState([]);
    const [endCity, setEndCity] = useState([]);

    useEffect( ()=> {
        async function fetchDate(){
            const requestCities = await axios.get("http://localhost:2727/api/cities/source");
            setCities(requestCities.data.data);
        }
        fetchDate();
    },[]);

    const getCities = () =>
    {
        try{
            let names = [];
            cities.forEach(cities => {
                names.push(cities.name + ": " + cities.insee_code);
            } );
            return names;
        }
        catch{
            return [];
        }
        
    }

    const formHandler = (event) => 
    {
        event.preventDefault();
        props.handler([startCity,endCity]);
    }

    const startHandler = (value) =>
    {
        setStartCity(localFinder(value));
    }

    const endHandler = (value) =>
    {
        setEndCity(localFinder(value));
    }

    const localFinder = (value) =>
    {
        for (const index in cities)
        {
            if (value.includes(cities[index].insee_code))
            {
                return [cities[index].name, cities[index].gps_lat, cities[index].gps_lng];
            }
        }
    }
    return (
        <div className='searchContainer'>
        <form onSubmit={formHandler}>
        <label>Départ</label>
        <TextInput
            name = "start"
            Component="input"
            trigger={[""]} 
            options={getCities()} 
            minChars={1}
            onSelect = {(value) =>{startHandler(value)}}
        />
        <label>Destination</label>
        <TextInput
            name = "destination"
            Component="input"
            trigger={[""]} 
            options={getCities()} 
            minChars={1}
            onSelect = {(value) =>{endHandler(value)}}
        />
        <input type="submit" value="Voyager"/>
        </form>
        
        </div>
    );
  }

  export default SearchBar;