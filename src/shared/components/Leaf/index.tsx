import { useContext } from 'react';
import { LeafContext } from '../../context/leaf/leaf';
import { Accordion, Button } from 'react-bootstrap';

import { DataLeafProducts } from './components/DataLeafProducts';
import { GeneralLeafInformation } from './components/GeneralLeafInformation';
import { HeaderLeaf } from './components/HeaderLeaf';

import { ContentLeaf } from '../Styles/general';
import { StyledAccordion } from './styles';
import { ProdutosLeaf, PedidoLeaf } from '../../../interface/ILeaf';

export function Leaf() {
  const {pedido} = useContext(LeafContext) as {pedido: PedidoLeaf}
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

          <button onClick={() => console.log(pedido)}>SALVAR</button>
        </ContentLeaf>
    </div>
  );
}
