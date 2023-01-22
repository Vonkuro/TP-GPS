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
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

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
        <div className='searchContainer container '>
            <form onSubmit={formHandler} >
                <div class="row g-2 align-items-center justify-content-evenly">
                    <div class="col-md">
                        <div class="form-floating">
                            <TextInput
                                id="start"
                                class="form-control"
                                name = "start"
                                Component="input"
                                trigger={[""]} 
                                options={getCities()} 
                                minChars={1}
                                onSelect = {(value) =>{startHandler(value)}}
                            />
                            <label for="start">Départ</label>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="form-floating">
                            <TextInput
                                id="end"
                                class="form-control"
                                name = "destination"
                                Component="input"
                                trigger={[""]} 
                                options={getCities()} 
                                minChars={1}
                                onSelect = {(value) =>{endHandler(value)}}
                            />
                            <label for="end">Destination</label>
                        </div>
                    </div>
                    <div class="col-md">
                        <input class="btn btn-success btn-lg" type="submit" value="Voyager"/>
                    </div>
                </div>
            </form>
        </div>
    );
  }

  export default SearchBar;