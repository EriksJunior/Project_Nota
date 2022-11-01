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

      <SettingsContent>
        <Settings />
      </SettingsContent>
    </Container>
  )
}