
import { Box, Checkbox, FormControlLabel, FormGroup, IconButton, Stack, Typography, useTheme } from '@mui/material'
import { MapComponent } from './Map'
import { useState } from 'react'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

export const Content = () => {
    const {colors} = useTheme()
    const [questionNum, setQuestionNum] = useState(0)
    const [noWantToLive, setNoWantToLive] = useState(false)
    const [noCurrentLive, setNoCurrentLive] = useState(false)
    const [noHome, setNoHome] = useState(false)
    

    const questions = [
        "Where do you want to live?",
        "Where do you live?",
        "Where do you call home?"
    ]

    const noValueCheckboxLabels = [
        "I do not want to live anywhere",
        "I do not live anywhere",
        "I do not have a home"
    ]

    const handleDecrement = () => setQuestionNum(questionNum - 1)
    const handleIncrement = () => setQuestionNum(questionNum + 1)

    const getCurrentQuestionValue = () => {
        if(questionNum == 0) return noWantToLive
        if(questionNum == 1) return noCurrentLive
        if(questionNum == 2) return noHome   
    }

    const handleCheckboxChange = () => {
        if(questionNum == 0) setNoWantToLive(!noWantToLive)
        if(questionNum == 1) return setNoCurrentLive(!noCurrentLive)
        if(questionNum == 2) return setNoHome(!noHome)
    }

    return (
        <Box sx={{paddingTop:"40px", ['@media (max-height: 620px)']: {padding: "20px"}}}>
            <Typography variant="h4" align="center">
                {questions[questionNum]}
            </Typography>
            <Box display="flex" justifyContent='center' marginTop={'40px'} sx={{['@media (max-height: 620px)']: {marginTop: "20px"}}}>
                <MapComponent />
            </Box>
            <Box display="flex" justifyContent='center'>
                <FormGroup>
                    <FormControlLabel sx={{color:colors.drawerBGColor}} label={noValueCheckboxLabels[questionNum]} control={
                        <Checkbox 
                            sx={{
                                color:colors.drawerBGColor, 
                                '&.Mui-checked': {
                                    color: colors.drawerBGColor,
                                }
                            }}
                            checked={getCurrentQuestionValue()}
                            onChange={handleCheckboxChange}
                        />} 
                    />
                </FormGroup>
            </Box>

            <Stack direction="row" justifyContent="center" marginTop="20px">
                { !!questionNum &&
                    <IconButton size="large" onClick={handleDecrement}>
                        <ArrowCircleLeftOutlinedIcon sx={{color:colors.drawerBGColor, fontSize: '40px'}}/>
                    </IconButton>
                }
                { questionNum < questions.length-1 &&
                    <IconButton size="large" onClick={handleIncrement} disabled={!getCurrentQuestionValue()}>
                        <ArrowCircleRightOutlinedIcon sx={{color: getCurrentQuestionValue() ? colors.drawerBGColor: "#ececec", fontSize: '40px'}}/>
                    </IconButton>
                }
                { questionNum == questions.length-1 &&
                    <IconButton size="large" onClick={handleIncrement} disabled={!getCurrentQuestionValue()}>
                        <CheckBoxOutlinedIcon sx={{color: getCurrentQuestionValue() ? colors.drawerBGColor: "#ececec", fontSize: '40px'}}/>
                    </IconButton>
                }
            </Stack>
        </Box>
    )
}

