import React, { useEffect, useState } from "react";
import axios from "axios";
import './MeteoDisplay.css'

function MeteoDisplay(props)
{
    const [wind, setWind] = useState(0);
    const [precipitations, setPrecipitations] = useState(0);
    const [temperature, setTemperature] = useState(0);

    useEffect( ()=> {
        async function fetchDate(){
            const latitude = Math.round(props.latitude);
            const longitude = Math.round(props.longitude);
            const querryMeteo = "https://public.opendatasoft.com/api/records/1.0/search/?dataset=arome-0025-sp1_sp2&q=&rows=1&geofilter.distance="+latitude+"%2C"+longitude+"%2C1";

            const requestMeteo = await axios.get(querryMeteo);

            let newWind = requestMeteo.data.records[0].fields["10m_wind_speed"];
            newWind = roundWithDecimal(newWind,2);

            let newPrecipitations = requestMeteo.data.records[0].fields.total_precipitation;
            newPrecipitations = roundWithDecimal(newPrecipitations,1);

            let newTemperature = requestMeteo.data.records[0].fields.minimum_temperature_at_2_metres;
            newTemperature = roundWithDecimal(newTemperature,1);

            setWind(newWind);
            setPrecipitations(newPrecipitations);
            setTemperature(newTemperature);
        }
        fetchDate();
    },[props]);

    const roundWithDecimal = (numberToBeRounded, numberOfDecimal) => 
    {
        let newNumber = numberToBeRounded;
        const roundingRate = Math.pow(10, numberOfDecimal);
        newNumber = newNumber * roundingRate;
        newNumber = Math.round(newNumber);
        newNumber = newNumber / roundingRate;
        return newNumber;
    }


    return (
        <>
        <div className="card meteo">
            <div class="card-body">
            <h3 class="card-title">Météo à {props.city}</h3>
            <h5>Température : {temperature}°C</h5>
            <h5>Précipitations : {precipitations}%</h5>
            <h5>Vitesse du vent : {wind}m/s</h5>
            </div>
        </div>
        </>
    );
}

export default MeteoDisplay;