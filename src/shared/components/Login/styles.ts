import styled from "styled-components";

export const LoginGeneral = styled.div`
align-content: center;
display: flex;
position: absolute;
justify-content: center;
width: 100vw;
height: 100vh;
background: rgb(0,0,0);
background: radial-gradient(circle, rgba(0,0,0,1) 5%, rgba(3,0,10,1) 8%, rgba(4,0,11,1) 14%, rgba(4,0,9,1) 62%, rgba(8,1,15,1) 64%, rgba(4,0,11,1) 84%, rgba(5,1,10,1) 86%, rgba(0,0,0,1) 100%);

`

export const LoginImg = styled.div`
align-content: center;
align-items: center;
display: flex;
justify-content: center;
width: 60%;

@media screen and (min-width: 320px) and (max-width: 790px){
  width: 0%;
}

`
export const LoginCard = styled.div`
align-content: center;
align-items: center;
display: flex;
justify-content: center;
width: 38%;

@media screen and (min-width: 320px) and (max-width: 790px){
width: 80%;
display: flex;
align-content: center;
align-items: center;
justify-content: center;

}

`
