import React from 'react';
import './Map.css';
import cities from '../data/cities.json';
import { MapContainer, TileLayer,Marker } from 'react-leaflet';
import Routing from './Routing';

function Map(){
    console.log(cities)
    const positionLille = [50.629250, 3.057256]
    return (

        <div className='map-container'>
        

        <MapContainer center={positionLille} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* {cities.map(villes=>(
                <Marker key={villes.id}
                position={[villes.gps.latitude, villes.gps.longitude]}>
                </Marker>

            ))}  */}
            <Routing />
        </MapContainer>

    </div>

    )


}

export default Map;