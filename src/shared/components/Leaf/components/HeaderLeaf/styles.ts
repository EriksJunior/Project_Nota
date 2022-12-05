import styled from "styled-components";
import { FloatingLabel, FormControl } from "react-bootstrap";

export const Container = styled.div`
  width: 80vw;
  margin: 0;
  padding: 0;
  height: 29vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 15px;
  margin-bottom:-80px;

  @media screen and (min-width: 1440px) {
    display: flex;
    height: 31vh;
    gap: 10px;
  }

  @media screen and (max-width: 1440px) {
    display: flex;
    height: 31vh;
    gap: 10px;
  }

  @media screen and (max-width: 1199px) {
    display: flex;
    height: 29vh;
    gap: 10px;
  }

  @media screen and (max-width: 991px) {
    display: flex;
    height: 29vh;
    gap: 10px;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    height: 48vh;
    .switchToSmallerscreens {
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 575px) {
    display: flex;
    height: auto;
    gap: 10px;
  }

  .form-select {
    height: 48px;
  }
  .form-floating > .form-select {
    padding-top: 1.325rem !important;
    padding-bottom: 0.175rem !important;
  }
  .form-floating {
    height: 48px;
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
  height: 48px !important;
`;
