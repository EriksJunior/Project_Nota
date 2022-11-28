import { CardGeneral } from "./components/LoginCard";
import { LoginCarrousel } from "./components/LoginImg";
import { LoginCard, LoginGeneral, LoginImg } from "./styles";
import fundo from '../../../assets/fundo.jpg'


export function Login(){
  return(
    <LoginGeneral >
      {/* <LoginImg>
      <LoginCarrousel/> 
      </LoginImg> */}
      <LoginCard>
        <CardGeneral/>
      </LoginCard>
    </LoginGeneral>
  )
}