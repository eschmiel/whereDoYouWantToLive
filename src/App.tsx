//https://geo-jobe.com/mapthis/creating-custom-arcgis-map-widgets-as-react-components/
//https://geo-jobe.com/mapthis/creating-custom-arcgis-map-widgets-as-react-components-part-2/
//https://dev.to/imkarthikeyan/integrating-esri-maps-into-your-react-app-2e1h
import './app.css'

import { Box, Button, Container, IconButton, Stack, ThemeProvider, Typography } from '@mui/material'
import { theme } from './muiTheme'

import "@arcgis/core/assets/esri/themes/dark/main.css"
import { MapComponent } from './components/Map'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h4" align="center" sx={{marginTop:"100px"}}>
          Where do you want to live?
        </Typography>
        <Box display="flex" justifyContent='center' marginTop={'65px'}>
          <MapComponent />
        </Box>

        <Stack position='absolute' sx={{bottom:'0px'}} justifyContent='space-between' direction="row">
          <Button variant="schmiel">SCHMIEL</Button>
          <IconButton>
            
          </IconButton>
        </Stack>
      </Container>
    </ThemeProvider>
  )
}

export default App