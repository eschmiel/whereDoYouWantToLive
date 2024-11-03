import { Button, Container, IconButton, Stack, useTheme } from "@mui/material";

export const Footer = () => {
    const { colors } = useTheme()
    const {drawerBGColor} = colors
    
    return (
    // <Container  sx={{bottom:'0px'}}>
        <Stack justifyContent='space-between' direction="row" alignItems='flex-end' sx={{bottom: '0px'}}>
            <Button variant="schmiel">SCHMIEL</Button>
            <Stack justifyContent='space-evenly' width='400px' direction="row" alignItems='flex-end'>
                <Button sx={{
                    height:"60px", 
                    width:"230px", 
                    padding:"15px",
                    borderRadius:'20px 20px 0px 0px', 
                    border: `3px solid ${drawerBGColor}`, 
                    [":hover"]: {height: '100px', width: '270px', color:'black' },
                    transition: 'height .2s, width .2s',
                    alignItems: 'center', 
                    justifyContent: "center", 
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    color:colors.drawerBGColor
                }}
                >
                    Learn About People
                </Button>
                <Button sx={{
                    height:"60px", 
                    width:"60px", 
                    borderRadius:'20px 20px 0px 0px', 
                    border: `3px solid ${drawerBGColor}`, 
                    [":hover"]: {height: '100px', width: '100px'},
                    transition: 'height .2s, width .2s'
                }}
                    href="https://github.com/eschmiel/whereDoYouWantToLive"
                >
                    <img src="./oldManZelda.png" height= "90%" width="90%"/>
                </Button>
            </Stack>
       </Stack>
    // </Container>
    )
}
