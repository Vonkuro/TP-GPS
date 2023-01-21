
import MeteoDisplay from "./meteoDisplay/MeteoDisplay";

function InfoDisplay(props)
{

    return(
        <>
        <p>Informations Itinéraire</p>
        <MeteoDisplay city="Cuges-les-pins" latitude={43} longitude={5}/>    
        <MeteoDisplay city="Cuges-les-pins" latitude={43} longitude={5}/>
        </>
    )
}

export default InfoDisplay;