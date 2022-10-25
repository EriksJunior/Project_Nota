import { useState, useEffect } from 'react'
import { ICliente } from '../../interface/ICliente'

import { Form, Col, Row, Accordion, FloatingLabel } from 'react-bootstrap';

import ClienteService from '../../services/ClienteService'

export function DataLeafProducts() {
  const [cliente, setCliente] = useState<ICliente[]>([])

  useEffect(() => {
    getClientesFromSelectBox()
  }, [])

  async function getClientesFromSelectBox() {
    const { data } = await ClienteService.getFromSelectBox()
    setCliente(data)
  }

  return (
    <div>
      <Accordion.Header>1 - Informações da NF-e</Accordion.Header>
      <Accordion.Body>
        <Form>
          <Row xs={12}>
            <Col sm={12} md={12} lg={12} xl={12}>
              <Form.Group as={Col} controlId="formGridState">
                <FloatingLabel className="mb-4" label="Cliente">
                  <Form.Select>
                    <option value="">Selecione...</option>
                    {cliente.map((e) => <option key={e.id} value={e.id}>{e.nome}</option>)}
                  </Form.Select>
                </FloatingLabel>
              </Form.Group>
            </Col>
          </Row>

          <Row xs={2}>
            <Col xs={12} sm={8} md={8} lg={4} xl={4}>
              <Form.Group as={Col} controlId="formGridState">
                <FloatingLabel className="mb-4" label="Produtos">
                  <Form.Select>
                    <option value="">Selecione...</option>
                    {cliente.map((e) => <option key={e.id} value={e.id}>{e.nome}</option>)}
                  </Form.Select>
                </FloatingLabel>
              </Form.Group>
            </Col>

            <Col sm={4} md={4} lg={2} xl={2}>
              <Form.Group as={Col} controlId="formGridPassword">
                <FloatingLabel className="mb-4" label="Cod Ref">
                  <Form.Control disabled type="text" />
                </FloatingLabel>
              </Form.Group>
            </Col>

            <Col sm={3} md={3} lg={2} xl={1}>
              <Form.Group as={Col} controlId="formGridPassword">
                <FloatingLabel className="mb-4" label="Qnt">
                  <Form.Control type="text" />
                </FloatingLabel>
              </Form.Group>
            </Col>

            <Col xs={12} sm={9} md={9} lg={4} xl={5}>
              <Form.Group as={Col} controlId="formGridPassword">
                <FloatingLabel className="mb-4" label="Dados adicionais">
                  <Form.Control type="text" />
                </FloatingLabel>
              </Form.Group>
            </Col>
          </Row>

          <Row xs={3}>
            <Col sm={4} md={4} lg={3} xl={2}>
              <Form.Group as={Col} controlId="formGridPassword">
                <FloatingLabel className="mb-4" label="Vl. Unitário">
                  <Form.Control type="text" />
                </FloatingLabel>
              </Form.Group>
            </Col>

            <Col sm={4} md={4} lg={2} xl={1}>
              <Form.Group as={Col} controlId="formGridPassword">
                <FloatingLabel className="mb-4" label="Desc">
                  <Form.Control type="text" />
                </FloatingLabel>
              </Form.Group>
            </Col>

            <Col sm={4} md={4} lg={3} xl={2}>
              <Form.Group as={Col} controlId="formGridPassword">
                <FloatingLabel className="mb-4" label="Vl. Total">
                  <Form.Control type="text" />
                </FloatingLabel>
              </Form.Group>
            </Col>

            <Col xs={12} sm={6} md={6} lg={4} xl={4}>
              <Form.Group as={Col} controlId="formGridState">
                <FloatingLabel className="mb-4" label="Origen">
                  <Form.Select defaultValue={0}>
                    <option value="0">0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8</option>
                    <option value="1">1 - Estrangeira - Importação direta, exceto a indicada no código 6</option>
                    <option value="2">2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7</option>
                    <option value="3">3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%</option>
                    <option value="4">4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes</option>
                    <option value="5">5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%</option>
                    <option value="6">6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural</option>
                    <option value="7">7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural</option>
                    <option value="8">8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%</option>
                  </Form.Select>
                </FloatingLabel>
              </Form.Group>
            </Col>

            <Col xs={6} sm={3} md={3} lg={4} xl={1}>
              <Form.Group as={Col} controlId="formGridPassword">
                <FloatingLabel className="mb-4" label="Und">
                  <Form.Control type="text" />
                </FloatingLabel>
              </Form.Group>
            </Col>

            <Col xs={6} sm={3} md={3} lg={4} xl={2}>
              <Form.Group as={Col} controlId="formGridPassword">
                <FloatingLabel className="mb-4" label="Peso">
                  <Form.Control type="text" />
                </FloatingLabel>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Accordion.Body>
    </div>
  )
}