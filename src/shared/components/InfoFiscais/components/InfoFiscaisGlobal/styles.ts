import styled from "styled-components";
import { Card , Nav } from 'react-bootstrap';


export const CardInfoFiscale = styled(Card)`
width: 100%;
display: flex;
max-height: 79vh;
background-color: #DCDCDC;

.form-floating>.form-select {
  padding-top: 1.325rem!important;
   padding-bottom: 0.175rem!important;
}
`

export const NavFiscale = styled(Nav)`

  .nav-item{
    width:100%;
    max-height: 70vh;

  }
  .nav-link{
    max-height: 70vh;
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