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

.form-floating>.form-select {
  padding-top: 1.325rem!important;
   padding-bottom: 0.175rem!important;
}
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
border: 1px solid #8A2BE2;
:hover{
  background: #8A2BE2;
  color: white;
}
`

export const ButtonAtt = styled.div`
  background: #D3D3D3;
  border-radius: 10px;
  border: 1px solid #8A2BE2;
  :hover{
    background: #8A2BE2;
    color: white;
  }
`

