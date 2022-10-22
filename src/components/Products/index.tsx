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

      <Form.Group className="mb-3" controlId="formBasicValue">
        <Form.Label>valor</Form.Label>
        <Form.Control type="number" placeholder="Ex: R$ 200,00" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicUnd">
        <Form.Label>Unidade</Form.Label>
        <Form.Control type="number"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicBars">
        <Form.Label>Código de Barras</Form.Label>
        <Form.Control type="number"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicRef">
        <Form.Label>Código de Referência</Form.Label>
        <Form.Control type="number" placeholder="Ex: R$ TH-12345" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Descrição</Form.Label>
        <Form.Control type="text" />
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
