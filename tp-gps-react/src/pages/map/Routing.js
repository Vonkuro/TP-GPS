import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

function Routing(props) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(props.start[1],props.start[2]), L.latLng(props.end[1],props.end[2])],
      routeWhileDragging: true,
      collapsible: true,
      autoRoute: true,
      language : 'fr'
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map, props]);

  return null;
}

export default Routing;