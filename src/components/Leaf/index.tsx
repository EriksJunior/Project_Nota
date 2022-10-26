import { Accordion, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'

import { DataLeafProducts } from '../DataLeafProducts';
import { GeneralLeafInformation } from '../GeneralLeafInformation';
import { HeaderLeaf } from '../HeaderLeaf';

import { ContentLeaf } from '../Styles/general';
import { StyledAccordion } from './styles';
interface LeafProps {

}

export function Leaf(props: LeafProps) {
  const dispath = useDispatch()
  const idCliente = useSelector(state => state)

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

        <Button className="mt-5" onClick={() => console.log(idCliente)}>Salvar</Button>
      </ContentLeaf>
    </div>
  );
}
