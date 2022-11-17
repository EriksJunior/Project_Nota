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
          <Row as={Col} className="mb-4">
            <Col sm={4} md={4} lg={3} xl={2}>
              <Form.Group as={Col}>
                <FloatingLabel style={{ fontSize: "14px" }} label="Número do Pedido">
                  <Form.Control style={{ height: "48px" }} type="text" />
                </FloatingLabel>
              </Form.Group>
            </Col>

            <Col sm={4} md={4} lg={3} xl={2}>
              <Form.Group as={Col}>
                <FloatingLabel style={{ fontSize: "14px" }} label="Data de Entrada ou Saída">
                 <Form.Control style={{ height: "48px" }} type="text" />
                </FloatingLabel>
              </Form.Group>
            </Col>

            <Form.Group as={Col} >
                <FloatingLabel style={{ fontSize: "14px" }} label="Presença">
                  <Form.Select style={{ color: "Grey", fontWeight: "bolder" , height:"48px" }} name="id">
                    <option value="">1 - Operação Presencial</option>
                    <option value="">1 - Operação Presencial</option>
                    <option value="">1 - Operação Presencial</option>
                    <option value="">1 - Operação Presencial</option>
                    <option value="">1 - Operação Presencial</option>

                  </Form.Select>
                </FloatingLabel>
              </Form.Group>
          </Row>
          <Row as={Col} className="mb-4">
            <Form.Group as={Col}>
              <FloatingLabel style={{ fontSize: "14px" }} label="Total Frete">
                <Form.Control style={{ height: "48px" }} type="text"  />
              </FloatingLabel>
            </Form.Group>


            <Form.Group as={Col} >
              <FloatingLabel style={{ fontSize: "14px" }} label="Total Desconto">
                <Form.Control style={{ height: "48px" }} type="text"  />
              </FloatingLabel>
            </Form.Group>

            <Form.Group  as={Col}>
            <FloatingLabel style={{ fontSize: "14px" }} label="Outras Despesas">
              <Form.Control style={{ height: "48px" }} type="text"  />
            </FloatingLabel>
          </Form.Group>

          <Form.Group  as={Col}>
            <FloatingLabel style={{ fontSize: "14px" }} label="Total do Pedido">
              <Form.Control style={{ height: "48px" }} type="text"  />
            </FloatingLabel>
          </Form.Group>
          </Row>

          <Row className="mb-4">

            <Form.Group as={Col}>
              <FloatingLabel style={{ fontSize: "14px" }} label="Intermediador">
                <Form.Select style={{ color: "Grey", fontWeight: "bolder", height:"48px" }} defaultValue="">
                  <option value="">0 - Operação sem intermediador</option>
                  <option value="AC">0 - Operação sem intermediador</option>
                  <option value="AL">0 - Operação sem intermediador</option>
                  <option value="AP">0 - Operação sem intermediador</option>
                  <option value="AM">0 - Operação sem intermediador</option>
                </Form.Select>
              </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col}>
              <FloatingLabel style={{ fontSize: "14px" }} label="CNPJ do Intermediador">
                <Form.Control style={{ height: "48px" }} type="text"  />
              </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col}>
              <FloatingLabel style={{ fontSize: "14px" }} label="Nome do Intermediador">
                <Form.Control style={{ height: "48px" }} type="text" />
              </FloatingLabel>
            </Form.Group>
          </Row>

          <Row className="mb-3">

            <Form.Group as={Col}>
              <FloatingLabel style={{ fontSize: "14px" }} label="Informações Complementares">
                <Form.Control style={{ height: "48px" }} type="text"  />
              </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col}>
              <FloatingLabel style={{ fontSize: "14px" }} label="Informações Gerais">
                <Form.Control style={{ height: "48px" }} type="text" />
              </FloatingLabel>
            </Form.Group>
          </Row>

          <ButtonLeaf>
            <Button variant="" style={{ background: "Lavender", width: "20%", color: "black" }}>
              <IoRefresh />  Limpar Dados
            </Button>

            <Button variant="" style={{ background: "LimeGreen", width: "20%", color: "whitesmoke" }}>
              <IoCheckboxOutline />  Emitir Nota
            </Button>
          </ButtonLeaf>

        </Form>
      </Accordion.Body>
    </StyledAccordion>
    </div>
  )
}