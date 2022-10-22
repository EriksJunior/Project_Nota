import { Button, Dropdown } from "react-bootstrap";
import styled from "styled-components";

export const ButtonBt = styled(Button) `
  background-color: transparent	;
  color: #8A2BE2;
  outline: none;
  font-weight: bold;
  width: auto;
  display: flex;

  &:hover {
    border-bottom: solid 2px #9d74e0;
    color: #9d74e0;
  }
  `

  export const DropDownBt = styled(Dropdown) `
  inset: 0px -28px auto auto;
  `