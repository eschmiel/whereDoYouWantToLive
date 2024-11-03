import { Button, Container, IconButton, Stack, useTheme } from "@mui/material";

export const Footer = () => {
    const { colors } = useTheme()
    const {drawerBGColor} = colors
    
    return (
    // <Container  sx={{bottom:'0px'}}>
        <Stack justifyContent='space-between' direction="row" alignItems='flex-end' sx={{bottom: '0px'}}>
            <Button variant="schmiel">SCHMIEL</Button>
            <Stack justifyContent='space-around' width="100px" direction="row">
                <Button sx={{
                    height:"60px", 
                    width:"60px", 
                    borderRadius:'20px 20px 0px 0px', 
                    border: `3px solid ${drawerBGColor}`, 
                    [":hover"]: {height: '100px', width: '100px'},
                    transition: 'height .2s, width .2s'
                }}>
                    <img src="./oldManZelda.png" height= "90%" width="90%"/>
                </Button>
            </Stack>
       </Stack>
    // </Container>
    )
}