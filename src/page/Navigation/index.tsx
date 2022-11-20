import { Login } from '../../shared/components/Login';
import { Navegation } from '../../shared/components/Navegation/index'

interface NavegationProps {
  visible: boolean;
}

export function PageNavegation({ visible }:NavegationProps) {
  return (
    <>
    { visible ? (
    <Navegation />
    ): <></>
  }
    </>
 ) 
}