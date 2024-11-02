import { useEffect, useRef } from "react"
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView";
import { Box } from "@mui/material";

export const MapComponent = () => {
    const mapDiv = useRef(null)
    useEffect(()=> {
      if(mapDiv.current) {
        const webMap = new Map({
          basemap: 'streets-vector'
        })
  
        const view = new MapView({
          container: mapDiv.current,
          map: webMap,
          center: [-117.1490,32.7353],
          scale: 10000000
        })
  
        return () => view && view.destroy()
      }
    },[])
  
    const mapSX = {
      height: '100vh', 
      width: '100%', 
      maxHeight: '360px', 
      maxWidth: '640px'
    }
  
    return <Box className='mapDiv' ref={mapDiv} sx={mapSX} />
  }