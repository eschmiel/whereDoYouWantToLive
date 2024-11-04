import { useEffect, useRef } from "react"
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView";
import { Box } from "@mui/material";

export const MapComponent = ({clickHandler = (e) => {}}) => {
    const mapDiv = useRef(null)
    useEffect(()=> {
      if(mapDiv.current) {
        const webMap = new Map({
          basemap: 'streets-vector'
        })
  
        const view = new MapView({
          container: mapDiv.current,
          map: webMap,
          center: [0,0],
          // scale: 10000000
          zoom:0,
          popupEnabled: false,
        })

        const clickHandlerWithView = (event) => {
          clickHandler(view, event)
        }

        view.on("click", clickHandlerWithView)
  
        return () => view && view.destroy()
      }
    },[])
  
    const mapSX = {
      height: '360px', 
      width: '100%', 
      maxHeight: '360px', 
      // maxWidth: '640px'
      maxWidth: '516px'
    }
  
    return <Box className='mapDiv' ref={mapDiv} sx={mapSX} />
  }