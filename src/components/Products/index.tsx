import { useState } from 'react';
import { BiBox } from "react-icons/bi";

import { ButtonBt } from '../Styles/bootstrap';
import { Form, Offcanvas, Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
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
        <Offcanvas.Header style={{ background:"#1C1C1C"  }} closeButton>
          <Offcanvas.Title style={{ background:"#1C1C1C" , color:"BlueViolet", fontWeight:"bold" , fontSize: "30px"}}  >Cadastro de Produto</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ background:"#1C1C1C" , color:"MediumPurple" , fontWeight:"bold" }}>
        <Form >
          <FloatingLabel className="mb-4" label="Nome Do Produto">
            <Form.Control style={{ background:"#1C1C1C" , color:"whitesmoke"}} type="text" placeholder="Nome Do Produto"  />
          </FloatingLabel>

          <FloatingLabel className="mb-4" label="Valor">
            <Form.Control style={{ background:"#1C1C1C" , color:"whitesmoke" }} type="number" placeholder="Valor"/>
          </FloatingLabel>

          <FloatingLabel className="mb-4" label="Unidade">
            <Form.Control style={{ background:"#1C1C1C" , color:"whitesmoke" }} type="number" placeholder="Unidade" />
          </FloatingLabel>
          
          <FloatingLabel className="mb-4" label="Código de Barras">
            <Form.Control style={{ background:"#1C1C1C" , color:"whitesmoke" }} type="number" placeholder="Código de Barras"/>
          </FloatingLabel>

          <FloatingLabel className="mb-4" label="Código de Referência">
            <Form.Control style={{ background:"#1C1C1C" , color:"whitesmoke" }} type="number" placeholder="Código de Referência"/>
          </FloatingLabel>

          <FloatingLabel className="mb-4" label="Descrição">
            <Form.Control as="textarea" style={{ background:"#1C1C1C" , color:"whitesmoke" }} type="text" placeholder="Descrição"/>
          </FloatingLabel>


      <Button variant="primary" type="button">
        Cadastrar
      </Button>
    </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}