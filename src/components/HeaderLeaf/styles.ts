import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  margin: 0;
  padding: 0;
  height: 10vh;

  @media screen and (max-width: 1199px){
  display: flex;
  height: 15vh;
  gap: 10px;
  }

  @media screen and (max-width: 991px){
  display: flex;
  height: 15vh;
  gap: 10px;
  }

  @media screen and (max-width: 575px){
  display: flex;
  height: 40vh;
  gap: 10px;
  }
`