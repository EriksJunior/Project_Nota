import { useState, useEffect } from 'react'
import { ICliente } from '../../interface/ICliente'
import { Form, Col, Row, Accordion, FloatingLabel } from 'react-bootstrap'

import ClienteService from '../../services/ClienteService'

export function GeneralLeafData() {
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
      <Accordion.Button >1 - Dados Gerais</Accordion.Button>
      <Accordion.Body>
        <Form>
          <Col hidden>
            <Form.Group as={Col}>
              <Form.Control type="text" name={'id'} />
            </Form.Group>
          </Col>

          <Row className="mb-3">
            <Col lg={5} xl={5}>
              <Form.Group as={Col} controlId="formGridState">
                <FloatingLabel className="mb-4" label="Cliente">
                  <Form.Select>
                    <option value="">Selecione...</option>
                    {cliente.map((e) => <option key={e.id} value={e.id}>{e.nome}</option>)}
                  </Form.Select>
                </FloatingLabel>
              </Form.Group>
            </Col>

            <Col lg={5} xl={6}>
              <Form.Group as={Col} controlId="formGridPassword">
                <FloatingLabel className="mb-4" label="Nome do Cliente">
                  <Form.Control type="text" disabled placeholder="Nome do Cliente:" />
                </FloatingLabel>
              </Form.Group>
            </Col>
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

            <Form.Group as={Col} controlId="formGridZip">
              <FloatingLabel label="Nome do Cliente">
                <Form.Control type="text" placeholder="Nome do Cliente:" />
              </FloatingLabel>
            </Form.Group>
          </Row>
        </Form>
      </Accordion.Body>
    </div>
  )
}