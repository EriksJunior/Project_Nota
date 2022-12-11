import styled from "styled-components";
import { FloatingLabel, FormControl, FormSelect , Form } from 'react-bootstrap';

export const FormBtn = styled(Form)`
.form-floating>.form-select {
  padding-top: 0.525rem!important;
  padding-bottom: 0.175rem!important;
}
`


export const FloatingLabelBtn = styled(FloatingLabel)`
  color: black!important;
  font-size: 12px!important;
  padding-top: 0.525rem!important;

`

export const FormControlBtn = styled(FormControl)`
  background-color: #f5f5f5!important;
  color: black!important;
  height: 40px!important;
`

export const FormSelectBtn = styled(FormSelect)`
  background-color: #f5f5f5!important;
  color: grey !important;
  font-weight: bolder!important;
  height: 40px!important;

`