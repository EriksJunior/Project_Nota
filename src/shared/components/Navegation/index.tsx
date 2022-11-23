import { Settings } from '../../../page/Settings'
import { ClientModal } from '../Client/index'
import { ProductsModal } from '../Products/index'

import { Link } from "react-router-dom";

import { ClientProvider } from '../../context/client/client';
import { ProductProvider } from '../../context/Product/product';

import { Container, Content, SettingsContent, TextCompany } from './styles'


export function Navegation() {

  return (
    <Container>
      <Content>
        <ClientProvider>
          <ClientModal />
        </ClientProvider>
        <ProductProvider>
          <ProductsModal />
        </ProductProvider>
      </Content>
          <TextCompany as={Link} to="/"> Empresa </TextCompany>
          <SettingsContent>
            <Settings />
          </SettingsContent>
    </Container>
  )
}