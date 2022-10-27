import { useContext } from 'react';
import { LeafContext } from '../../context/leaf';
import { Accordion, Button } from 'react-bootstrap';

import { DataLeafProducts } from '../DataLeafProducts';
import { GeneralLeafInformation } from '../GeneralLeafInformation';
import { HeaderLeaf } from '../HeaderLeaf';

import { ContentLeaf } from '../Styles/general';
import { StyledAccordion } from './styles';
import { ProdutosLeaf, PedidoLeaf } from '../../interface/ILeaf';

interface LeafProps {

}

export function Leaf(props: LeafProps) {
  const { produto, pedido } = useContext(LeafContext) as { produto: ProdutosLeaf, pedido: PedidoLeaf }

  function teste() {
    console.log('line 22 component leaf', pedido)
  }

  return (
    <div >
        <ContentLeaf>
          <HeaderLeaf />

          <StyledAccordion defaultActiveKey="0" style={{ width: "80vw", height: "auto" }}>
            <Accordion.Item eventKey="0">
              <DataLeafProducts />
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <GeneralLeafInformation />
            </Accordion.Item>
          </StyledAccordion>
        </ContentLeaf>

        <Button onClick={teste}>Salvar</Button>
    </div>
  );
}
