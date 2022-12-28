import React, { useState } from 'react'
import { PortfolioContainer, PortfolioWrapper, PortfolioRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './PortfolioElements'
import { Button } from '../ButtonElements'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath: require('../../images/weddingSlides/gabby_wedding_1.webp').default,
    },
    {
        label: 'Bird',
        imgPath: require('../../images/weddingSlides/gabby_wedding_2.webp').default,
    },
    {
        label: 'Bali, Indonesia',
        imgPath: require('../../images/weddingSlides/hillary_wedding_1.webp').default,
    },
    {
        label: 'Goč, Serbia',
        imgPath: require('../../images/weddingSlides/hillary_wedding_2.webp').default,
        
    },
  ];

const PortfolioLayout = ({ lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2 }) => {

    const theme = useTheme()

    const [activeStep, setActiveStep] = useState(0)
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
    <>
        <PortfolioContainer lightBg={lightBg} id={id}>
            <PortfolioWrapper>
                <PortfolioRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to={id}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <Box sx={{maxWidth: 555, textAlign: 'center'}}>
                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents>
                                {images.map((step, index) => (
                                    <div key={step.label}>
                                        {Math.abs(activeStep - index) <= 2 ? (
                                        <Box
                                            component="img"
                                            sx={{
                                            height: 455,
                                            display: 'block',
                                            maxWidth: 555,
                                            objectFit: 'cover',
                                            // objectPosition: '0 80%',
                                            overflow: 'hidden',
                                            width: '100%',
                                            }}
                                            src={step.imgPath}
                                            alt={step.label}/>
                                        ) : null}
                                    </div>
                                ))}
                        </AutoPlaySwipeableViews>
                        </Box>
                    </Column2>
                </PortfolioRow>
            </PortfolioWrapper>
        </PortfolioContainer>
    </>
    )
}

export default PortfolioLayout;