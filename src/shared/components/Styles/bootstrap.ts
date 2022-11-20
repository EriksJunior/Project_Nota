import styled from "styled-components";

import { Button, Dropdown, Offcanvas, OffcanvasTitle, OffcanvasHeader, OffcanvasBody } from "react-bootstrap";
import { IoHome, IoNewspaper, IoHelpCircleOutline, IoEnter } from "react-icons/io5";
import { BiBox, BiUser } from "react-icons/bi";
import { BsPen, BsTrash } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";

export const IconBiBox = styled(BiBox)`
color: #461269;
`

export const IconBiUser = styled(BiUser)`
color: #461269;
`

export const IconIoHome = styled(IoHome)`
color: #8A2BE2;
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

export const IconEdit = styled(TbEdit)`
color: #8A2BE2;
:hover{
  color: green;
}
`

export const IconBsTrash = styled(BsTrash)`
color: #8A2BE2;
:hover{
  color: red;
}
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

export const OffcanvasBt = styled(Offcanvas)`
  width: 50vw;
`

export const OffcanvasHeaderBt = styled(OffcanvasHeader)`
  background-color: blueviolet;
`

export const OffcanvasTitleBt = styled(OffcanvasTitle)`
  color: white;
  font-weight: bold;
  font-size: 36px;
  justify-content: center;
  padding-left: 50px;
`

export const OffcanvasBodyBt = styled(OffcanvasBody)`
  background-color: #f5f5f5;
  color: LightGrey;
  font-weight: bolder;
`
