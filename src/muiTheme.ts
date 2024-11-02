import { createTheme } from "@mui/material";

const defaultTheme = createTheme()


///// configuration /////


const mainBGColor = "#fefefe"
const primary = "#ba1aeb"
const primaryDark = '#8b02b5'
const drawerBGColor = "#f2f1ef"
const tertiaryColor = "#ffd700"
const white = '#FFFFFF'

const drawerWidth = 240


///// create theme /////


export const theme = createTheme({
    topMarginToClearAppBar: "130px",
    colors: {
        mainBGColor
    },
    components: {
        MuiDrawer: {
            styleOverrides: {
                root: {
                    width: drawerWidth,
                    [`& .MuiDrawer-paper`]: { 
                        width: drawerWidth, 
                        boxSizing: 'border-box', 
                        backgroundColor: drawerBGColor
                    }
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    zIndex: defaultTheme.zIndex.drawer + 1,
                    backgroundColor: primary
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    variants: [
                        {
                            props: { variant: 'schmiel'},
                            style: {
                                alignItems: 'center', 
                                justifyContent: "center", 
                                display:"flex", 
                                height: '60px',
                                width: '165px',
                                color: white,
                                fontSize: '2.2rem',
                                backgroundColor: primary,
                                fontFamily: 'impact',
                                letterSpacing: '2px',
                                borderRadius: 0,
                                "&:hover": {cursor: "pointer", backgroundColor: primaryDark}
                            }
                        }
                    ]
                }
            }
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    variants: [
                        {
                            props: {variant: 'appBar'},
                            style: {
                                width: "6rem", 
                                height: "6rem",
                                "&:hover": {
                                    cursor: "pointer",
                                    border: `2px solid ${tertiaryColor}`
                                }
                            }
                        }
                    ]
                }
            }
        }
    }
})


// backgroundColor: '#8b02b5', 
// backgroundColor: "#f2f1ef",
// backgroundColor: "#3b0053",
// color: "white"

declare module '@mui/material/styles' {
    interface Theme {
        topMarginToClearAppBar: string;
        colors: { [key: string]: string};
    }
    interface ThemeOptions {
        topMarginToClearAppBar: string;
        colors: { [key: string]: string};
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        appBar: true;
        schmiel: true;
    }
}

declare module '@mui/material/Avatar' {
    interface AvatarPropsVariantOverrides {
        appBar: true;
    }
}