import styled from "styled-components";
import { FormControl, Offcanvas, OffcanvasHeader, OffcanvasTitle, OffcanvasBody, Button, Row, Col, FormSelect } from 'react-bootstrap';

export const OffcanvasBt = styled(Offcanvas)`
width: 50%!important;

  @media screen and (max-width: 1000px){
    width: 60%!important;
  }

  @media screen and (max-width: 848px){
    width: 70%!important;
  }

  @media screen and (max-width: 727px){
    width: 100%!important;
  }

  @media screen and (max-width: 575px){
    .btnPesquisar{
      margin-top: 10px;
    }
  }


`

export const OffcanvasHeaderBt = styled(OffcanvasHeader)`
background-color: blueviolet!important;
`

export const OffcanvasTitleBt = styled(OffcanvasTitle)`
color: white!important;
font-weight: bold!important;
font-size: 36px!important;
justify-content: center!important;
padding-left: 50px!important;
`

export const OffcanvasBodyBt = styled(OffcanvasBody)`
background-color: #f5f5f5!important;
color: LightGrey!important;
font-weight: bolder!important;
`

export const FormControlBt = styled(FormControl)`

`

export const ButtonBt = styled(Button)`

`

export const RowBt = styled(Row)`
`

export const ColBt = styled(Col)`

`

export const FormSelectBt = styled(FormSelect)`
  color: black!important;
  font-weight: bolder!important;
  height: 38px!important;
`