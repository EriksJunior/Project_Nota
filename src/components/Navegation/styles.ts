import styled from 'styled-components'

export const Container = styled.div`
  display: flex; 
  width: 100%; 
  height: auto; 
  background: #1C1C1C; 
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  gap: 20px;
  
  @media screen and (max-width: 361px){
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`

export const Content = styled.div`
  width: 50%;
  display: flex;
  gap: 20px;

  @media screen and (max-width: 361px){
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`

export const SettingsContent = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;

  @media screen and (max-width: 361px){
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`