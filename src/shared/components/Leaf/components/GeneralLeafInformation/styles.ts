import styled from "styled-components";
import { FloatingLabel, FormControl, FormSelect , Form } from 'react-bootstrap';

export const FormEnd = styled(Form)`
.form-floating>.form-select {
  padding-top: 1.025rem!important;
  padding-bottom: 0.175rem!important;
}
`


export const FloatingLabelEnd = styled(FloatingLabel)`
  color: black!important;
  font-size: 12px!important;
  padding-top: 0.525rem!important;

`

export const FormControlEnd = styled(FormControl)`
  background-color: #f5f5f5!important;
  color: black!important;
  height: 40px!important;
`

export const FormSelectEnd = styled(FormSelect)`
  background-color: #f5f5f5!important;
  color: grey !important;
  font-weight: bolder!important;
  height: 40px!important;

`
