import { Settings } from '../../../page/Settings'
import { ClientModal } from '../Client/index'
import { ProductsModal } from '../Products/index'
import { Link } from "react-router-dom";

import { Container, Content, SettingsContent, TextCompany } from './styles'
export function Navegation() {
  return (
    <Container>
      <Content>
        <ClientModal />
        <ProductsModal />
      </Content>
      <TextCompany as={Link} to="/"> Empresa </TextCompany>
      <SettingsContent>
        <Settings />
      </SettingsContent>
    </Container>
  )
}