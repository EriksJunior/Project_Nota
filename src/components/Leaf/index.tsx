import { Accordion } from 'react-bootstrap';

import { DataLeafProducts } from '../DataLeafProducts';
import { GeneralLeafInformation } from '../GeneralLeafInformation';
import { HeaderLeaf } from '../HeaderLeaf';

import { ContentLeaf } from '../Styles/general';
import { StyledAccordion } from './styles';
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
