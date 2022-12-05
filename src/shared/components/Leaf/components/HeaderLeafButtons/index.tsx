import { useContext } from 'react';
import { LeafContext } from '../../../../context/leaf/leaf';

// import { Row, Col } from 'react-bootstrap';
import { ContentButtons, BButton } from '../../styles';
import { PedidoLeaf } from '../../../../../interface/ILeaf';

export function HeaderLeafButtons() {
  const {handleSaveOrUpdate, pedido, handleShow} = useContext(LeafContext) as {handleSaveOrUpdate: () => void, pedido: PedidoLeaf, handleShow: () => void}
  
  return (
    <ContentButtons>
        <BButton variant="" type="button" onClick={handleSaveOrUpdate}>Salvar</BButton>
        <BButton variant="" type="button" onClick={() => window.open(pedido.response.danfe, "_blank", "width=900, height=600, left=350, top=150, bottom=200, popup=true")}>Imprimir</BButton>
        <BButton variant="" type="button" onClick={handleShow}>Pesquisar</BButton>
    </ContentButtons>
  )
}