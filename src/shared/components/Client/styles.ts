import styled from "styled-components";
import { Offcanvas, OffcanvasHeader, OffcanvasTitle, OffcanvasBody, Form, FloatingLabel, FormControl, FormSelect, Button } from 'react-bootstrap';

export const OffcanvasBt = styled(Offcanvas)`
  width: 50%!important;
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

export const FormBt = styled(Form)`

`

export const FloatingLabelBt = styled(FloatingLabel)`
  color: black;
  font-size: 14px;
`

export const FormControlBt = styled(FormControl)`
  background-color: #f5f5f5;
  color: black;
  height: 48px;
`

export const FormSelectBt = styled(FormSelect)`
  background-color: #f5f5f5;
  color: black;
  font-weight: bolder;
  height: 48px;
`

export const ButtonClient = styled(Button)`
  background-color: BlueViolet;
  color: black;
  width: 300px;
`