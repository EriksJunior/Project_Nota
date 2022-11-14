import { useContext } from 'react';
import { LeafContext } from '../../../../context/leaf/leaf';

// import { Row, Col } from 'react-bootstrap';
import { ContentButtons, BButton } from '../../styles';
import { PedidoLeaf } from '../../../../../interface/ILeaf';

export function HeaderLeafButtons() {
  const {handleSaveOrUpdate, pedido} = useContext(LeafContext) as {handleSaveOrUpdate: () => void, pedido: PedidoLeaf}
  
  return (
    <ContentButtons>
      {/* <Row>
        <Col> */}
          <BButton variant="" type="button" onClick={handleSaveOrUpdate}>Salvar</BButton>
        {/* </Col>
        <Col> */}
          <BButton variant="" type="button" onClick={() => console.log(pedido)}>Imprimir</BButton>
        {/* </Col>
      </Row> */}
    </ContentButtons>
  )
}