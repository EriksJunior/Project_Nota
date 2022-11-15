import { Button, Dropdown } from "react-bootstrap";
import { IoHome, IoNewspaper, IoHelpCircleOutline , IoEnter } from "react-icons/io5";
import { BiBox, BiUser } from "react-icons/bi"; 
import { BsPen, BsTrash } from "react-icons/bs";
import styled from "styled-components";


export const IconBiBox = styled(BiBox)`
color: #461269;
`

export const IconBiUser = styled(BiUser)`
color: #461269;
`

export const IconIoHome = styled(IoHome)`
color: #8A2BE2;
}
`

export const IconIoEnter = styled(IoEnter)`
color: #8A2BE2;
`

export const IconIoNewspaper = styled(IoNewspaper)`
color: #8A2BE2;
`

export const IconIoHelpCircleOutline = styled(IoHelpCircleOutline)`
color: #8A2BE2;
`

export const IconBsPen = styled(BsPen)`
color: #8A2BE2;
`

export const IconBsTrash = styled(BsTrash)`
color: #8A2BE2;
`

export const ButtonBt = styled(Button)`
  background-color: transparent	;
  color: #c0c0c0;
  display: flex;
  font-weight: bold;
  outline: none;
  width: auto;

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
