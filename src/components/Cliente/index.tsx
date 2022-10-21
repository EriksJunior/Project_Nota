import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';

import { ButtonBt } from '../Styles/bootstrap';

export function ClientModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ButtonBt variant="info" onClick={handleShow}>
        Clientes
      </ButtonBt>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cadastre o Cliente</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nome do Cliente:</Form.Label>
        <Form.Control type="text" placeholder="Ex: Gael Gonçalves de Souza" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>CPF/CNPJ:</Form.Label>
        <Form.Control type="number" placeholder="CPF/CNPJ" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Endereço: </Form.Label>
        <Form.Control type="text" placeholder="Ex: Av Jacob lopes" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Cidade : </Form.Label>
        <Form.Control type="text" placeholder="Ex: Viçosa" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Bairro: </Form.Label>
        <Form.Control type="text" placeholder="EX: Nova Era" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>UF: </Form.Label>
        <Form.Control type="text" placeholder="Ex: MG" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>CEP: </Form.Label>
        <Form.Control type="CEP" placeholder="000.000.000-00" />
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

