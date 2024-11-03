//https://geo-jobe.com/mapthis/creating-custom-arcgis-map-widgets-as-react-components/
//https://geo-jobe.com/mapthis/creating-custom-arcgis-map-widgets-as-react-components-part-2/
//https://dev.to/imkarthikeyan/integrating-esri-maps-into-your-react-app-2e1h
import './app.css'
import "@arcgis/core/assets/esri/themes/dark/main.css"

import { Box, Container, Stack, ThemeProvider } from '@mui/material'
import { mainBGColor, theme } from './muiTheme'

import { Footer } from './components/Footer'
import { Content } from './components/Content'


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={mainBGColor} sx={{height:'100vh', width: '100%', margin:'0px', overflow: 'hidden', ['@media (max-height: 520px)']: {overflow:'visible'}}}>
        <Container sx={{height: '100%'}} >
          <Stack justifyContent="space-between" sx={{height: "100%", margin: '0px'}}>
            <Content />
            <Footer />
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
    
  )
}

export default App