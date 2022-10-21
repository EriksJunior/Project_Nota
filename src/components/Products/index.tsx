import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';

export function ProductsModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Produtos
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cadastro de Produto</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nome Do Produto </Form.Label>
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
