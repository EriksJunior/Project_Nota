import { useContext } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import { PedidoLeaf } from '../../../../../../interface/ILeaf';
import { LeafContext } from '../../../../../context/leaf/leaf';

import { P } from './styles';


export function ModalCancelLeaf() {
  const { handleCloseModalCancelLeaf, showModalCancelLeaf, cancelLeaf, handleChangeCancelLeaf } = useContext(LeafContext) as { handleCloseModalCancelLeaf: () => void, showModalCancelLeaf: any, cancelLeaf: () => void, handleChangeCancelLeaf: React.ChangeEventHandler }
  return (
    <>
      <Modal show={showModalCancelLeaf} onHide={handleCloseModalCancelLeaf}>
        <Modal.Header closeButton>
          <Modal.Title>Cancelar NF-e</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-1"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Justificativa do cancelamento</Form.Label>
              <Form.Control as="textarea" style={{ resize: 'none' }} name="motivo" rows={3} onChange={handleChangeCancelLeaf} />
            </Form.Group>
          </Form>
          <P>A justificativa deve ter no minímo 15 caracteres *</P>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModalCancelLeaf}>
            Fechar
          </Button>
          <Button variant="primary" onClick={cancelLeaf}>
            Prosseguir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}