import { useContext } from 'react';
import { LeafContext } from '../../../../context/leaf/leaf';

import { Row, Col } from 'react-bootstrap';
import { ContentButtons, BButton } from '../../styles';
import { PedidoLeaf } from '../../../../../interface/ILeaf';

export function HeaderButtons() {
  const {pedido} = useContext(LeafContext) as {pedido: PedidoLeaf}
  
  return (
    <ContentButtons>
      {/* <Row>
        <Col> */}
          <BButton variant="" type="button" onClick={() => console.log(pedido)}>Salvar</BButton>
        {/* </Col>
        <Col> */}
          <BButton variant="" type="button">Imprimir</BButton>
        {/* </Col>
      </Row> */}
    </ContentButtons>
  )
}