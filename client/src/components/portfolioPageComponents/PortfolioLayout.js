import React, { useState } from 'react'
import { PortfolioContainer, PortfolioWrapper, PortfolioRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap } from './PortfolioElements'
import { Button } from '../ButtonElements'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

// const images = [
//     {
//         label: 'San Francisco – Oakland Bay Bridge, United States',
//         imgPath: require('../../images/weddingSlides/gabby_wedding_1.webp').default,
//     },
//     {
//         label: 'Bird',
//         imgPath: require('../../images/weddingSlides/gabby_wedding_2.webp').default,
//     },
//     {
//         label: 'Bali, Indonesia',
//         imgPath: require('../../images/weddingSlides/hillary_wedding_1.webp').default,
//     },
//     {
//         label: 'Goč, Serbia',
//         imgPath: require('../../images/weddingSlides/hillary_wedding_2.webp').default,
        
//     },
//   ];

const PortfolioLayout = ({ lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, primary, dark, dark2 }) => {
    const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "weddingSlides"}}) {
        nodes {
          childImageSharp {
            gatsbyImageData(
              formats: AUTO, 
              height: 555,
              width: 555,
              placeholder: BLURRED,
              layout: FIXED
            )
          }
        }
      }
    }
    `)

    const theme = useTheme()

    const [activeStep, setActiveStep] = useState(0)
    // const handleNext = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // };
    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };
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
                                {data?.allFile?.nodes?.map((image, index) => (
                                    <div key={index}>
                                        {Math.abs(activeStep - index) <= 2 ? (
                                        <Box
                                            sx={{
                                            height: 455,
                                            display: 'block',
                                            maxWidth: 555,
                                            objectFit: 'cover',
                                            // objectPosition: '0 80%',
                                            overflow: 'hidden',
                                            width: '100%',
                                            }}>
                                            <GatsbyImage image={image?.childImageSharp?.gatsbyImageData} alt='slideshow'/>
                                            </Box>
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