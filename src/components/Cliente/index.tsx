import { useState } from 'react';
import { BiUser } from "react-icons/bi";

import { ButtonBt } from '../Styles/bootstrap';
import { Col, Form, Offcanvas, Button } from 'react-bootstrap';
import { ContentIcon, Text } from '../Styles/general';

export function ClientModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ButtonBt variant="outiline-ligth"  onClick={handleShow}>
      <ContentIcon style={{ paddingRight: '5px' }} >
          <BiUser size={25} />
        </ContentIcon>
        <Text>
          Clientes
        </Text>
      </ButtonBt>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header style={{ background: "#1C1C1C", color: "whitesmoke" }} closeButton>
          <Offcanvas.Title>Cadastre o Cliente</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ background: "#1C1C1C", color: "whitesmoke" }}>

          <Form >
            <Form.Group className="mb-3" controlId="formBasicNome">
              <Form.Label>Nome do Cliente:</Form.Label>
              <Form.Control style={{ background: "#363636", color: "whitesmoke" }} type="text" placeholder="Ex: Gael Gonçalves de Souza" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCPFCNPJ">
              <Form.Label>CPF/CNPJ:</Form.Label>
              <Form.Control style={{ background: "#363636", color: "whitesmoke" }} type="number" placeholder="CPF/CNPJ" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEnd">
              <Form.Label>Endereço: </Form.Label>
              <Form.Control style={{ background: "#363636", color: "whitesmoke" }} type="text" placeholder="Ex: Av Jacob lopes" />
            </Form.Group>
            2
            <Form.Group className="mb-3" controlId="formBasicCidade">
              <Form.Label>Cidade : </Form.Label>
              <Form.Control style={{ background: "#363636", color: "whitesmoke" }} type="text" placeholder="Ex: Viçosa" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicBairro">
              <Form.Label>Bairro: </Form.Label>
              <Form.Control style={{ background: "#363636", color: "whitesmoke" }} type="text" placeholder="EX: Nova Era" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEstado">
              <Form.Label>Estado</Form.Label>
              <Form.Select style={{ background: "#363636", color: "whitesmoke" }} defaultValue="Escolha um Estado">
                <option value="">Selecione...</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espirito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MT">Mato Grosso</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCEP">
              <Form.Label>CEP: </Form.Label>
              <Form.Control style={{ background: "#363636", color: "whitesmoke" }} type="CEP" placeholder="000.000.000-00" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email: </Form.Label>
              <Form.Control style={{ background: "#363636", color: "whitesmoke" }} type="email" placeholder="Ex: email@email.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTEL">
              <Form.Label>Telefone: </Form.Label>
              <Form.Control style={{ background: "#363636", color: "whitesmoke" }} type="number" placeholder="Ex: Av Jacob lopes" />
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

