import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';

import { ButtonBt } from '../Styles/bootstrap';

export function ProductsModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ButtonBt variant="secondary" onClick={handleShow}>
        Produtos
      </ButtonBt>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header style={{ background:"#1C1C1C" , color:"whitesmoke" }} closeButton>
          <Offcanvas.Title>Cadastro de Produto</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ background:"#1C1C1C" , color:"whitesmoke" }}>
        <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Nome Do Produto </Form.Label>
        <Form.Control type="text" placeholder="Digite o Nome do produto" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>valor</Form.Label>
        <Form.Control type="number" placeholder="Ex: R$ 200,00" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="button">
        Cadastrar
      </Button>
    </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
