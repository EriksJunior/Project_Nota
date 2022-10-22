import { Button, Dropdown } from "react-bootstrap";
import { BiBox, BiUser } from "react-icons/bi";
import styled from "styled-components";

export const IconBiBox = styled(BiBox)`
color: #461269;
`

export const IconBiUser = styled(BiUser)`
color: #461269;
`

export const ButtonBt = styled(Button)`
  background-color: transparent	;
  color: #c0c0c0;
  outline: none;
  font-weight: bold;
  width: auto;
  display: flex;

  &:hover {
    border-bottom: solid 2px #9d74e0;
    color: white;
  }

  &:hover .icon {
    color: #8A2BE2;
  }
  `

export const DropDownBt = styled(Dropdown)`
  inset: 0px -28px auto auto;
  margin: 0 !important;
  `
