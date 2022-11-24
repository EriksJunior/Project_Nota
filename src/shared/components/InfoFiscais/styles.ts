import { Card, Carousel } from "react-bootstrap";
import styled from "styled-components";

export const CardSearch = styled(Card)`

display: flex;
flex-direction: column;
gap: 50px;
width: 80%;
height: 70vh;
margin-top: 25px;
background-color: #DCDCDC;
`

export const CarouselStyled = styled(Carousel)`
height: 80vh;

.carousel-control-next, .carousel-control-prev {
  color : red;
  width: 5%;
}

`