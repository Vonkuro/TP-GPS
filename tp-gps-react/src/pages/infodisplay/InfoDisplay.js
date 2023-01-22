
import MeteoDisplay from "./meteoDisplay/MeteoDisplay";

function InfoDisplay(props)
{

    return(
        <div>
        <MeteoDisplay city={props.coordinate[0][0]} latitude={props.coordinate[0][1]} longitude={props.coordinate[0][2]}/>    
        <MeteoDisplay city={props.coordinate[1][0]} latitude={props.coordinate[1][1]} longitude={props.coordinate[1][2]}/>
        </div>
    )
}

export default InfoDisplay;