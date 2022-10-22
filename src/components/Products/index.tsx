import { useState } from 'react';
import { BiBox } from "react-icons/bi";

import { ButtonBt } from '../Styles/bootstrap';
import { Form, Offcanvas, Button } from 'react-bootstrap';

import { ContentIcon, Text } from '../Styles/general';

export function ProductsModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ButtonBt variant="outiline-ligth" onClick={handleShow}>
      <ContentIcon style={{ paddingRight: '5px' }}>
          <BiBox size={25} />
        </ContentIcon>
        <Text>
          Produtos
        </Text>
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
