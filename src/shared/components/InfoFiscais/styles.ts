import styled from "styled-components";
import { Card , Nav } from 'react-bootstrap';


export const CardInfoFiscale = styled(Card)`
align-content: center;
display: flex;
justify-content: center;
width: 80%;
height: auto;
margin-top: 25px;
`

export const NavFiscale = styled(Nav)`

  .nav-item{
    background: #A9A9A9;
    width:100%;
  }

  .nav-link{
    color: black;
    @media screen and (min-width: 320px) and (max-width: 800px){
      display:flex;
    
  }
  }

  .nav-link.active{
    color: black;

  }
`