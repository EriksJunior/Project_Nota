import { Form, Col, Row, Button, Accordion, FloatingLabel } from 'react-bootstrap';
import { IoCheckboxOutline, IoRefresh } from "react-icons/io5";

import { ButtonLeaf } from '../../../Styles/general';
import { StyledAccordion } from '../../styles'


export function GeneralLeafInformation() {
  return (
    <div>
    <StyledAccordion>
      <Accordion.Header>2 - Dados Finais</Accordion.Header>
      <Accordion.Body>
        <Form>
          <Row as={Col} className="mb-3">
            <Col sm={4} md={4} lg={3} xl={2}>
              <Form.Group as={Col} controlId="formGridPassword">
                <FloatingLabel className="mb-4" label="Número do Pedido">
                  <Form.Control type="text" />
                </FloatingLabel>
              </Form.Group>
            </Col>

            <Col sm={4} md={4} lg={3} xl={2}>
              <Form.Group as={Col} controlId="formGridPassword">
                <FloatingLabel className="mb-4" label="Data de Entrada ou Saída">
                 <Form.Control type="text" />
                </FloatingLabel>
              </Form.Group>
            </Col>

            <Form.Group as={Col} controlId="formGridState">
                <FloatingLabel className="mb-4" label="Presença">
                  <Form.Select style={{ color: "Grey", fontWeight: "bolder" }} name="id">
                    <option value="">1 - Operação Presencial</option>
                    <option value="">1 - Operação Presencial</option>
                    <option value="">1 - Operação Presencial</option>
                    <option value="">1 - Operação Presencial</option>
                    <option value="">1 - Operação Presencial</option>

                  </Form.Select>
                </FloatingLabel>
              </Form.Group>
          </Row>
          <Row as={Col} className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <FloatingLabel className="mb-4" label="Total Frete">
                <Form.Control type="text"  />
              </FloatingLabel>
            </Form.Group>


            <Form.Group as={Col} controlId="formGridPassword">
              <FloatingLabel className="mb-4" label="Total Desconto">
                <Form.Control type="text"  />
              </FloatingLabel>
            </Form.Group>

            <Form.Group  as={Col} className="mb-3" controlId="formGridAddress1">
            <FloatingLabel className="mb-4" label="Outras Despesas">
              <Form.Control type="text"  />
            </FloatingLabel>
          </Form.Group>

          <Form.Group  as={Col} className="mb-3" controlId="formGridAddress1">
            <FloatingLabel className="mb-4" label="Total do Pedido">
              <Form.Control type="text"  />
            </FloatingLabel>
          </Form.Group>
          </Row>

          <Row className="mb-3">

            <Form.Group as={Col} controlId="formGridState">
              <FloatingLabel className="mb-4" label="Intermediador">
                <Form.Select style={{ color: "Grey", fontWeight: "bolder" }} defaultValue="">
                  <option value="">0 - Operação sem intermediador</option>
                  <option value="AC">0 - Operação sem intermediador</option>
                  <option value="AL">0 - Operação sem intermediador</option>
                  <option value="AP">0 - Operação sem intermediador</option>
                  <option value="AM">0 - Operação sem intermediador</option>
                </Form.Select>
              </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <FloatingLabel label="CNPJ do Intermediador">
                <Form.Control type="text"  />
              </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <FloatingLabel label="Nome do Intermediador">
                <Form.Control type="text" />
              </FloatingLabel>
            </Form.Group>
          </Row>

          <Row className="mb-3">

            <Form.Group as={Col} controlId="formGridZip">
              <FloatingLabel label="Informações Complementares">
                <Form.Control type="text"  />
              </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <FloatingLabel label="Informações Gerais">
                <Form.Control type="text" />
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
    </StyledAccordion>
    </div>
  )
}