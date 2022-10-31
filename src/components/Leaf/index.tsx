import { useContext } from 'react';
import { LeafContext } from '../../context/leaf';
import { Accordion, Button } from 'react-bootstrap';

import { DataLeafProducts } from './components/DataLeafProducts';
import { GeneralLeafInformation } from './components/GeneralLeafInformation';
import { HeaderLeaf } from './components/HeaderLeaf';

import { ContentLeaf } from '../Styles/general';
import { StyledAccordion } from './styles';
import { ProdutosLeaf, PedidoLeaf } from '../../interface/ILeaf';

interface LeafProps {

}

export function Leaf(props: LeafProps) {
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
    </div>
  );
}
