import styled from "styled-components";

export const ContentIcon = styled.div`
  padding-right: 5px;
`

export const Text = styled.div`
  margin-top: 5px;
`

export const ContentLeaf = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  padding: 10px;
  margin-top: 25px;
  flex-direction: column;
  .form-floating>.form-select {
   padding-top: 1.325rem!important;
   padding-bottom: 0.175rem!important;
}
`

export const ButtonLeaf = styled.div`
  align-items: center;
  align-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;

  @media screen and (min-width: 320px) and (max-width: 560px){
    flex-direction: column;
    width: 100%;
    gap: 20px; 
  }
`

