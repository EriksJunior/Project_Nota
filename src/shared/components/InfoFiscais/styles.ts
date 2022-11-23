import styled from "styled-components";
import { Card , Nav } from 'react-bootstrap';


export const CardInfoFiscale = styled(Card)`
align-content: center;
display: flex;
justify-content: center;
width: 80%;
height: auto;
margin-top: 25px;
background-color: #DCDCDC;

.form-floating>.form-select {
  padding-top: 1.225rem;
  padding-bottom: 0.625rem;
}
`

export const NavFiscale = styled(Nav)`

  .nav-item{
    width:100%;
  }

  .nav-link{
    color: black !important;
    font-weight: bold;
    @media screen and (min-width: 320px) and (max-width: 800px){
      display:flex;
    
  }
  }

  .nav-link.active{
    color: black;

  }
`