import { Settings } from '../../../page/Settings'
import { ClientModal } from '../Cliente/index'
import { ProductsModal } from '../Products/index'

import { Container, Content, SettingsContent } from './styles'
export function Navegation() {
  return (
    <Container>
      <Content>
        <ClientModal />
        <ProductsModal />
      </Content>
      <h1 style={{ color:"white"}}> Empresa </h1>
      <SettingsContent>
        <Settings />
      </SettingsContent>
    </Container>
  )
}