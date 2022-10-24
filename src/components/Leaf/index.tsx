import { Accordion } from 'react-bootstrap';

import { GeneralLeafData } from '../GeneralLeafData';
import { DataLeafProducts } from '../DataLeafProducts';
import { GeneralLeafInformation } from '../GeneralLeafInformation';

import { ContentLeaf } from '../Styles/general';
import { StyledAccordion } from './styles';

interface LeafProps {

}

export function Leaf(props: LeafProps) {
  return (
    <div >
      <ContentLeaf>
        <StyledAccordion defaultActiveKey="0" style={{ width: "80vw", height: "90vh" }}>
          <Accordion.Item eventKey="0">
            <GeneralLeafData />
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <DataLeafProducts />
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <GeneralLeafInformation />
          </Accordion.Item>
        </StyledAccordion>
      </ContentLeaf>
    </div>
  );
}
