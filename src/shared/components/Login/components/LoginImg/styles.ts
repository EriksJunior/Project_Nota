import Carousel from 'react-bootstrap/Carousel';
import styled from "styled-components";

export const CarouselStyled = styled(Carousel)`
  align-content: center;
  align-items: center;
  background:#1C1C1C;
  box-shadow: 8px 8px 20px black;
  border-radius: 20px;
  display: flex;
  height: 90vh;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  width: 90%;

.carousel-caption {
  padding-bottom: 0.25rem !important;
  color: black;
}

@media screen and (min-width: 800px) and (max-width: 1099px){
  height: 60vh; 
}

@media screen and (min-width: 1100px) and (max-width: 1400px){
  height: 60vh;
  width: 90%;
}

@media screen and (min-width: 320px) and (max-width: 790px){
  display:none; 
}
`