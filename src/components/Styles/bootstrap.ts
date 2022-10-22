import { Button } from "react-bootstrap";
import styled from "styled-components";

export const ButtonBt = styled(Button) `
  background-color: transparent	;
  color: #8A2BE2;
  outline: none;
  font-weight: bold;
  &:hover {
    color: #A020F0;
    text-decoration: underline;
    transition: 10s ease;
  }

  `
  export const teste = styled.div`
    position: relative;
    text-decoration: none;
    display: inline-block;
    &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000;
    -webkit-transition-delay: 2s; 
    transition-delay: 2s;
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
}
  `