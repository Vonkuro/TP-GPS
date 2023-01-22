import React from 'react';
import './Map.css';
import cities from '../data/cities.json'
import { MapContainer, TileLayer,Marker, Popup } from 'react-leaflet';
import Routing from './Routing';

function Map(props){
    const positionLille = [50.629250, 3.057256]
    return (
        
        <div className='mapContainer'>
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
            <Routing start ={ props.coordinate[0] } end = { props.coordinate[1]}/>
            
            
        </MapContainer>
        </div>

    )


}

export default Map;