import { Leaf } from '../../components/Leaf'
import {Navegation} from '../../components/Navegation/index'

export function Home(){
  return(
    <div style={{ width:"100vw" , height:"100vh" }}>
      <Navegation/>
      <Leaf/>
    </div>
  )
}