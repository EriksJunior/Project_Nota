import styled from "styled-components";
import { Card, Nav } from 'react-bootstrap';


export const CardInfoFiscale = styled(Card)`
width: 100%;
display: flex;
height: 79vh;
background-color: #F5F5F5;
.card-body{
  border: 1px solid #8A2BE2;
}


.form-floating>.form-select {
  padding-top: 1.325rem!important;
  padding-bottom: 0.175rem!important;
  border: 1px solid #8A2BE2;

}
.form-control{
  border: 1px solid #8A2BE2;
}

`

export const NavFiscale = styled(Nav)`

  .nav-item{
    width:100%;
    max-height: 70vh;

  }
  .nav-link{
    background-color: #F5F5F5	;
    display: flex;
    border: 1px solid white !important;
    max-height: 75vh;
    color: black !important;
    font-weight: bold;
    @media screen and (min-width: 320px) and (max-width: 800px){
      display:flex;

    }
  }

  .nav-link.active{
    color: black;
    width: 100%;

  }
`