import {ClientModal} from '../Cliente/index'
import {ProductsModal} from '../Products/index'
export function Navegation(){
    return(
      <div style={{ display:"flex", width: "100%" , height: "60px", gap:"30px" , background:"#1C1C1C" , alignItems:"center"  }} >
        <ClientModal/>
        <ProductsModal/>
        
      </div>
    )
  }