import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  margin: 0;
  padding: 0;
  height: 17vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 15px;

  @media screen and (max-width: 1199px){
  display: flex;
  height: 16vh;
  gap: 10px;
  }

  @media screen and (max-width: 991px){
  display: flex;
  height: 16vh;
  gap: 10px;
  }

  @media screen and (max-width: 767px){
  display: flex;
  flex-direction: column;
  height: 31vh;
  .switchToSmallerscreens {
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 575px){
  display: flex;
  height: 31vh;
  gap: 10px;
  }
`