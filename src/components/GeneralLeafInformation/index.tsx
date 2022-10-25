import { Form, Col, Row, Button, Accordion, FloatingLabel } from 'react-bootstrap';
import { IoCheckboxOutline, IoRefresh } from "react-icons/io5";

import { ButtonLeaf } from '../Styles/general';

export function GeneralLeafInformation() {
  return (
    <div>
      <Accordion.Header>2 - Dados Finais</Accordion.Header>
      <Accordion.Body>
        <Form>
          <Row as={Col} className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <FloatingLabel className="mb-4" label="Nome do Cliente">
                <Form.Control type="text" placeholder="Nome do Cliente:" />
              </FloatingLabel>
            </Form.Group>


            <Form.Group as={Col} controlId="formGridPassword">
              <FloatingLabel className="mb-4" label="Nome do Cliente">
                <Form.Control type="text" placeholder="Nome do Cliente:" />
              </FloatingLabel>
            </Form.Group>
          </Row>
          <Row as={Col} className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <FloatingLabel className="mb-4" label="Nome do Cliente">
                <Form.Control type="text" placeholder="Nome do Cliente:" />
              </FloatingLabel>
            </Form.Group>


            <Form.Group as={Col} controlId="formGridPassword">
              <FloatingLabel className="mb-4" label="Nome do Cliente">
                <Form.Control type="text" placeholder="Nome do Cliente:" />
              </FloatingLabel>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <FloatingLabel className="mb-4" label="Nome do Cliente">
              <Form.Control type="text" placeholder="Nome do Cliente:" />
            </FloatingLabel>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <FloatingLabel label="Nome do Cliente">
                <Form.Control type="text" placeholder="Nome do Cliente:" />
              </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <FloatingLabel className="mb-4" label="Estado">
                <Form.Select style={{ color: "LightGrey", fontWeight: "bolder" }} defaultValue="">
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
              </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <FloatingLabel label="Nome do Cliente">
                <Form.Control type="text" placeholder="Nome do Cliente:" />
              </FloatingLabel>
            </Form.Group>
          </Row>

          <ButtonLeaf>
            <Button variant="" size='lg' style={{ background: "Lavender", width: "20%", color: "black" }}>
              <IoRefresh />  Limpar Dados
            </Button>

            <Button variant="" size='lg' style={{ background: "LimeGreen", width: "20%", color: "whitesmoke" }}>
              <IoCheckboxOutline />  Emitir Nota
            </Button>
          </ButtonLeaf>

        </Form>
      </Accordion.Body>
    </div>
  )
}