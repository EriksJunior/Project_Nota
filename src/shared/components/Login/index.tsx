import { CardGeneral } from "./components/LoginCard";
import { LoginCarrousel } from "./components/LoginImg";
import { LoginCard, LoginGeneral, LoginImg } from "./styles";


export function Login(){
  return(
    <LoginGeneral>
      <LoginImg>
      <LoginCarrousel/> 
      </LoginImg>
      <LoginCard>
        <CardGeneral/>
      </LoginCard>
    </LoginGeneral>
  )
}