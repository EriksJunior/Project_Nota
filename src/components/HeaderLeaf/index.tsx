import { Row, Col, Form } from 'react-bootstrap'

import { Container } from './styles'

export function HeaderLeaf() {
  return (
    <Container>
      <Row sm={12} md={12} lg={12} xl={12}>
        <Col sm={6} md={6} lg={6} xl={4}>
          <Form.Control
            type="text"
            placeholder='Natuzera da operação'
            disabled
          />
        </Col>

        <Col sm={6} md={6} lg={6} xl={4}>
          <Form.Control
            type="text"
            placeholder='Chave NF-e'
            disabled
          />
        </Col>

        <Col sm={4} md={4} lg={4} xl={1}>
          <Form.Control
            type="text"
            placeholder='Serie'
            disabled
          />
        </Col>

        <Col sm={4} md={4} lg={4} xl={1}>
          <Form.Control
            type="text"
            placeholder='Nº NF-e'
            disabled
          />
        </Col>

        <Col sm={4} md={4} lg={4} xl={2}>
          <Form.Control
            type="date"
            placeholder='Data emissão'
            disabled
          />
        </Col>
      </Row>
    </Container>
  )
}