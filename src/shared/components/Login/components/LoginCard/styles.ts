import styled from "styled-components";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";

export const CardStyled = styled(Card)`
align-content: center;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
width: 100%;
height: 100vh;

color: #DCDCDC;
background: rgba(255, 254, 254, 0.1);
backdrop-filter: blur (10px);
-webkit-backdrop-filter: blur(10px);
// border-radius: 20px;

@media screen and (min-width: 320px) and (max-width: 1099px){
  height: 60vh;
  width:100%;
 
}

@media screen and (min-width: 1100px) and (max-width: 1400px){
  height: 60vh;
  width:100%;
}
`

export const ButtonLogin = styled(Button)`

color: white;
background: #8A2BE2;
border-radius: 10px;
box-shadow: 2px 2px 10px black;
`