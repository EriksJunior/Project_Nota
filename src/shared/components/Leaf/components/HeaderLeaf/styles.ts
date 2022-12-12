import styled from "styled-components";
import { FloatingLabel, FormControl } from "react-bootstrap";

export const Container = styled.div`
  width: 80vw;
  margin: 0;
  padding: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 10px;
  margin-bottom: 20px;

  @media screen and (max-width: 767px) {
    .switchToSmallerscreens {
      margin-top: 10px;
    }
  }

  .form-select {
    // font-size: 12px;
    height: 40px;
  }
  .form-floating > .form-select {
    padding-top: 1.125rem !important;
    padding-bottom: 0.175rem !important;
  }
  .form-floating {
    padding-top: 0.425rem !important;
    height: 40px;
  }
  .form-floating > .form-control {
    @media screen and (min-width: 320px) and (max-width: 566px) {
      max-width: 506px;
      min-width: 250px;
    }
  }
`;

export const FloatingLabelBt = styled(FloatingLabel)`
  color: black !important;
  font-size: 14px !important;
`;

export const FormControlBt = styled(FormControl)`
  background-color: #f5f5f5 !important;
  color: #666 !important;
  height: 40px !important;
`;
