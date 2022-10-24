import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { ButtonBt } from '../Styles/bootstrap';

export function Registration() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ButtonBt variant="" size='sm' onClick={handleShow}>
        Empresa
      </ButtonBt>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastro Da Empresa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridRazão">
                <Form.Label>Razão Social</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridFantasia">
                <Form.Label>Nome Fantasia</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress">
              <Form.Label>Endereço</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Bairro</Form.Label>
              <Form.Control />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Cidade</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Estado</Form.Label>
                <Form.Select defaultValue="Escolha um Estado">
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

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>CEP</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salvar modificações
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
