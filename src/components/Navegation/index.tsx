import { Company } from '../../page/Company'
import { ClientModal } from '../Cliente/index'
import { ProductsModal } from '../Products/index'

import { Div } from './styles'
export function Navegation() {
  return (
    <Div>
      <ClientModal />
      <ProductsModal />
      <Company/>
    </Div>
  )
}