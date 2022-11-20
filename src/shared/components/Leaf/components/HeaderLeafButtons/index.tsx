import { useContext } from 'react';
import { LeafContext } from '../../../../context/leaf/leaf';

// import { Row, Col } from 'react-bootstrap';
import { ContentButtons, BButton } from '../../styles';
import { PedidoLeaf } from '../../../../../interface/ILeaf';

export function HeaderLeafButtons() {
  const {handleSaveOrUpdate, pedido, handleShow} = useContext(LeafContext) as {handleSaveOrUpdate: () => void, pedido: PedidoLeaf, handleShow: () => void}
  
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
      <BButton variant="" type="button" onClick={handleShow}>Pesquisar</BButton>
    </ContentButtons>
  )
}