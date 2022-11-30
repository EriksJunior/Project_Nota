import { useEffect, useContext } from 'react'
import { Row, Col, Form, FloatingLabel } from 'react-bootstrap'
import { ICliente } from '../../../../../interface/ICliente'
import { PedidoLeaf, IResponseWebmaniaLeaf } from '../../../../../interface/ILeaf'
import { Container } from './styles'
import { LeafContext } from '../../../../context/leaf/leaf'
import { GlobalContext } from '../../../../context/global/global'

export function HeaderLeaf() {
  const { pedido, handleChange, responseWebmania, cpfCnpjCliente } = useContext(LeafContext) as { pedido: PedidoLeaf, handleChange: React.ChangeEventHandler, responseWebmania: IResponseWebmaniaLeaf, cpfCnpjCliente: ICliente }

  const { client, getClientesFromSelectBox, clientSelectBox } = useContext(GlobalContext) as { client: ICliente, getClientesFromSelectBox: () => void, clientSelectBox: ICliente[] }

  useEffect(() => {
    getClientesFromSelectBox()
  }, [client])

  return (
    <Container>
      <Row xs={2} sm={12} md={12} lg={12} xl={12}>
        <Col xs={5} sm={4} md={3} lg={3} xl={2}>
          <Form.Control
            type="date"
            placeholder='Data emissão'
            disabled
            value={pedido.data_nfe}
          />
        </Col>

        <Col xs={7} sm={8} md={4} lg={5} xl={6}>
          <Form.Control
            type="text"
            placeholder='Natuzera da operação'
            disabled
            value={pedido.natureza_operacao || ""}
            className='naturezaSwitchToSmallerscreens'
          />
        </Col>

        <Col sm={6} md={3} lg={2} xl={2}>
          <Form.Control
            type="text"
            placeholder='Finalidade'
            disabled
            value={pedido.finalidade || ""}
            className='switchToSmallerscreens'
          />
        </Col>

        <Col sm={6} md={2} lg={2} xl={2}>
          <Form.Control
            type="text"
            placeholder='Tip. Emiss'
            disabled
            value={pedido.operacao || ""}
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
            value={pedido.response.chave || ""}
          />
        </Col>

        <Col sm={4} md={2} lg={2} xl={2}>
          <Form.Control
            type="text"
            placeholder='Serie'
            disabled
            value={pedido.response.serie || ""}
            className='switchToSmallerscreens'
          />
        </Col>

        <Col sm={4} md={2} lg={2} xl={2}>
          <Form.Control
            type="text"
            placeholder='Nº NF-e'
            disabled
            value={pedido.response.nfe || ""}
            className='switchToSmallerscreens'
          />
        </Col>

        <Col sm={4} md={3} lg={3} xl={2}>
          <Form.Control
            type="text"
            placeholder='Status'
            disabled
            value={pedido.status || ""}
            className='switchToSmallerscreens'
          />
        </Col>
      </Row>

      <Row style={{ display: "flex" }}>
        <Col sm={8} md={8} lg={8} xl={8}>
          <Form.Group as={Col}>
            <FloatingLabel className="mb-4" label="Cliente">
              <Form.Select style={{ color: "Grey", fontWeight: "bolder" }} onChange={handleChange} name={'idCliente'} value={pedido.idCliente || ""}>
                <option value="" >---selecione---</option>
                {clientSelectBox.map((e) => <option key={e.id} value={e.id}>{e.nome}</option>)}
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
        </Col>

        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
          <Form.Group as={Col}>
            <FloatingLabel label="CPF/CNPJ">
              <Form.Control style={{ height: "48px" }} disabled value={cpfCnpjCliente.cpfCnpj || ""} type="text" name="CPF/CNPJ" />
            </FloatingLabel>
          </Form.Group>
        </Col>
      </Row>

    </Container>
  )
}