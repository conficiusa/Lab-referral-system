import { Skeleton } from "@mui/material";
import {useJsApiLoader, GoogleMap, Marker} from "@react-google-maps/api"

const center={lat:9.3930, lng:-0.8235}
function Map() {

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey:"AIzaSyB-5SPwBIDCzSsCECxYAsP88eU0ii-jV88",
  })

  if(!isLoaded){
    return <Skeleton variant="rectangular" sx={{width:"100%", height:"100%"}} animation="wave"/>;
  }
  return (
        <GoogleMap 
        center={center} 
        zoom={16} 
        mapContainerStyle={{width:"100%", height:"100%",borderRadius:"6px"}}
        options={{
          zoomControl:false,
          streetViewControl:false,
          mapTypeControl:false

        }}>
          <Marker position={center}/>
        </GoogleMap>
  );
}

export default Map;
