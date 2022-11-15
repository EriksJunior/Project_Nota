import styled from "styled-components";
import { Card } from 'react-bootstrap';


export const LogoEmpresa = styled.div`
  align-items: center;
  align-content: center;
  display: flex;


`

export const CardCompany = styled(Card)`
align-content: center;
display: flex;
justify-content: center;
width: 80%;
height: auto;
margin-top: 25px;
`


export const ButtonContent = styled.div`
  align-items: center;
  align-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`

export const ButtonReturn = styled.div`
background: #D3D3D3;
border-radius: 10px;
border-left: 2px solid #8A2BE2;
border-right: 2px solid #8A2BE2;
:hover{
  background: #8A2BE2;
  color: white;
}

`

export const ButtonAtt = styled.div`
  background: #D3D3D3;
  border-radius: 10px;
  border-left: 2px solid #8A2BE2;
  border-right: 2px solid #8A2BE2;
  :hover{
    background: #8A2BE2;
    color: white;
  }
`

