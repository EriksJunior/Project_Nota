import Carousel from 'react-bootstrap/Carousel';
import styled from "styled-components";

export const CarouselStyled = styled(Carousel)`
  align-content: center;
  align-items: center;
  background:#1C1C1C;
  box-shadow: 8px 8px 20px black;
  border-radius: 20px;
  display: flex;
  height: 70vh;
  justify-content: center;
  margin-top: 50px;
  width: 100%;

.carousel-caption {
  padding-bottom: 9.25rem !important;
  color: black;
}
`