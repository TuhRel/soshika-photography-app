import styled from "@emotion/styled"
import { Slide } from "react-slideshow-image"

export const HeroSlides = styled(Slide)`
.each-slide-effect > div {
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  height: 350px;
}

.each-slide-effect span {
  padding: 20px;
  font-size: 20px;
  background: #efefef;
  text-align: center;
}
`