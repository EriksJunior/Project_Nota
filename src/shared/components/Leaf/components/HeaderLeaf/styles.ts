import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  margin: 0;
  padding: 0;
  height: 24vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 15px;

  @media screen and (max-width: 1199px){
  display: flex;
  height: 27vh;
  gap: 10px;
  }

  @media screen and (max-width: 991px){
  display: flex;
  height: 24vh;
  gap: 10px;
  }

  @media screen and (max-width: 767px){
  display: flex;
  flex-direction: column;
  height: 35vh;
  .switchToSmallerscreens {
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 575px){
  display: flex;
  height: 41vh;
  gap: 10px;
  }

  .form-select{
    height: 48px;
  }
  .form-floating>.form-select{
    padding-top: 1.325rem;
    padding-bottom: 0.175rem;
  }
  .form-floating{
    height: 48px;
  }
    .form-floating>.form-control{
      @media screen and (min-width: 320px) and (max-width: 566px){
        max-width:506px;
        min-width: 250px;
      
    }

    
    
  }
`