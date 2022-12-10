import { useEffect, useContext } from 'react'
import { Row, Col, Form, FloatingLabel } from 'react-bootstrap'
import { ICliente } from '../../../../../interface/ICliente'
import { PedidoLeaf, IResponseWebmaniaLeaf } from '../../../../../interface/ILeaf'
import { Container } from './styles'
import { LeafContext } from '../../../../context/leaf/leaf'
import { GlobalContext } from '../../../../context/global/global'
import { FloatingLabelBt, FormControlBt } from './styles'

export function HeaderLeaf() {
  const { pedido, handleChange, responseWebmania, cpfCnpjCliente } = useContext(LeafContext) as { pedido: PedidoLeaf, handleChange: React.ChangeEventHandler, responseWebmania: IResponseWebmaniaLeaf, cpfCnpjCliente: ICliente }

  const { clientSelectBox } = useContext(GlobalContext) as { clientSelectBox: ICliente[] }

  return (
    <Container>
      <Row sm={12} md={12} lg={12} xl={12}>
        <Col sm={4} md={3} lg={3} xl={2}>
          <FloatingLabelBt label="Data emissão" className="mb-2">
            <FormControlBt type="date" disabled value={pedido.data_nfe} />
          </FloatingLabelBt>
        </Col>

        <Col sm={8} md={4} lg={5} xl={6}>
          <FloatingLabelBt label="Natureza da operação">
            <FormControlBt className="naturezaSwitchToSmallerscreens" disabled type="text" value={pedido.natureza_operacao || ""} />
          </FloatingLabelBt>
        </Col>

        <Col sm={6} md={3} lg={2} xl={2}>
          <FloatingLabelBt label="Finalidade">
            <FormControlBt type="text"
              disabled
              value={pedido.finalidade || ""}
              className='switchToSmallerscreens' />
          </FloatingLabelBt>
        </Col>

        <Col sm={6} md={2} lg={2} xl={2}>
          <FloatingLabelBt label="Tipo. Emissão">
            <FormControlBt type="text"
              placeholder='Tip. Emiss'
              disabled
              value={pedido.operacao || ""}
              className='switchToSmallerscreens' />
          </FloatingLabelBt>
        </Col>
      </Row>

      <Row sm={12} md={12} lg={12} xl={12}>
        <Col sm={12} md={5} lg={5} xl={6}>
          <FloatingLabelBt label="Chave NF-e">
            <FormControlBt type="text"
              disabled
              value={pedido.response.chave || ""} />
          </FloatingLabelBt>
        </Col>

        <Col sm={4} md={2} lg={2} xl={2}>
          <FloatingLabelBt label="Serie">
            <FormControlBt
              type="text"
              disabled
              value={pedido.response.serie || ""}
              className='switchToSmallerscreens' />
          </FloatingLabelBt>
        </Col>

        <Col sm={4} md={2} lg={2} xl={2}>
          <FloatingLabelBt label="Nº NF-e">
            <FormControlBt
              type="text"
              disabled
              value={pedido.response.nfe || ""}
              className='switchToSmallerscreens' />
          </FloatingLabelBt>
        </Col>

        <Col sm={4} md={3} lg={3} xl={2}>
          <FloatingLabelBt label="Status">
            <FormControlBt
              type="text"
              disabled
              value={pedido.status || ""}
              className='switchToSmallerscreens' />
          </FloatingLabelBt>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col sm={8} md={8} lg={8} xl={8}>
          <Form.Group as={Col}>
            <FloatingLabel label="Cliente" style={{ fontSize:"14px" , color:"black" }}>
              <Form.Select style={{ color: "Grey", fontWeight: "bolder" }} onChange={handleChange} name={'idCliente'} value={pedido.idCliente || ""}>
                <option value="" >---selecione---</option>
                {clientSelectBox.map((e) => <option key={e.id} value={e.id}>{e.nome}</option>)}
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
        </Col>

        <Col sm={4} md={4} lg={4} xl={4}>
          <FloatingLabel label="CPF/CNPJ" style={{ fontSize:"13px" }}>
            <Form.Control style={{ height: "40px" }} disabled value={cpfCnpjCliente.cpfCnpj || ""} type="text" name="CPF/CNPJ" />
          </FloatingLabel>
        </Col>
      </Row>
    </Container>
  )
}