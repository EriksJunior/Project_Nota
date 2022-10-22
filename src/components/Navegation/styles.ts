import styled from 'styled-components'

export const Container = styled.div`
  display: flex; 
  width: 100%; 
  height: 60px; 
  background: #1C1C1C; 
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  gap: 20px;
  
  @media screen and (max-width: 361px){
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: auto;

  }
`

export const Content = styled.div`
  width: 50%;
  height: 40px;
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
    margin-right: 20px;

  @media screen and (max-width: 361px){
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`