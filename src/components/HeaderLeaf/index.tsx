import { useState, useEffect, useCallback } from 'react'

import { Row, Col, Form, FloatingLabel } from 'react-bootstrap'
import { ICliente } from '../../interface/ICliente'

import ClienteService from '../../services/ClienteService'

import { Container } from './styles'

export function HeaderLeaf() {
  const [cliente, setCliente] = useState<ICliente[]>([])

  useEffect(() => {
    getClientesFromSelectBox()
  }, [])

  async function getClientesFromSelectBox() {
    const { data } = await ClienteService.getFromSelectBox()
    setCliente(data)
  }

  return (
    <Container>
      <Row xs={2} sm={12} md={12} lg={12} xl={12}>
        <Col xs={5} sm={4} md={3} lg={3} xl={2}>
          <Form.Control
            type="date"
            placeholder='Data emissão'
            disabled
          />
        </Col>

        <Col xs={7} sm={8} md={4} lg={5} xl={6}>
          <Form.Control
            type="text"
            placeholder='Natuzera da operação'
            disabled
            className='naturezaSwitchToSmallerscreens'
          />
        </Col>

        <Col sm={6} md={3} lg={2} xl={2}>
          <Form.Control
            type="text"
            placeholder='Finalidade'
            disabled
            className='switchToSmallerscreens'
          />
        </Col>

        <Col sm={6} md={2} lg={2} xl={2}>
          <Form.Control
            type="text"
            placeholder='Tip. Emiss'
            disabled
            className='switchToSmallerscreens'
          />
        </Col>
      </Row>

      <Row xs={3} sm={12} md={12} lg={12} xl={12}>
        <Col xs={12} sm={12} md={5} lg={5} xl={6}>
          <Form.Control
            type="text"
            placeholder='Chave NF-e'
            disabled
          />
        </Col>

        <Col sm={4} md={2} lg={2} xl={2}>
          <Form.Control
            type="text"
            placeholder='Serie'
            disabled
            className='switchToSmallerscreens'
          />
        </Col>

        <Col sm={4} md={2} lg={2} xl={2}>
          <Form.Control
            type="text"
            placeholder='Nº NF-e'
            disabled
            className='switchToSmallerscreens'
          />
        </Col>

        <Col sm={4} md={3} lg={3} xl={2}>
          <Form.Control
            type="text"
            placeholder='Status'
            disabled
            className='switchToSmallerscreens'
          />
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={12} lg={12} xl={12}>
          <Form.Group as={Col} controlId="formGridState">
            <FloatingLabel className="" label="Cliente">
              <Form.Select style={{ color: "Grey", fontWeight: "bolder" }}>
                <option value="">Selecione...</option>
                {cliente.map((e) => <option key={e.id} value={e.id}>{e.nome}</option>)}
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  )
}