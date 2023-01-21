import React, { useEffect, useState } from "react";
import axios from "axios";

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
            console.log(requestMeteo.data.records[0].fields);

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
    },[]);

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
        <p>Météo à {props.city}</p>
        <p>Température : {temperature}°C</p>
        <p>Précipitations : {precipitations}%</p>
        <p>Vitesse du vent : {wind}m/s</p>
        </>
    );
}

export default MeteoDisplay;