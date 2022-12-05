import { useContext } from 'react';
import { LeafContext } from '../../../../context/leaf/leaf';

import { PedidoLeaf } from '../../../../../interface/ILeaf';

import { Form, Col, Row, Button, Accordion, FloatingLabel, Dropdown } from 'react-bootstrap';
import { IoCheckboxOutline, IoRefresh, IoReorderThreeSharp } from "react-icons/io5";

import { ButtonLeaf } from '../../../Styles/general';
import { StyledAccordion } from '../../styles'

import { Masks } from '../../../../../utils/masks/Masks';


export function GeneralLeafInformation() {
  const { handleChange, pedido, sendLeaf, handleTotalValueGeneralLeafInformation, cancelLeaf } = useContext(LeafContext) as { handleChange: React.ChangeEventHandler, pedido: PedidoLeaf, sendLeaf: () => void, handleTotalValueGeneralLeafInformation: () => void, cancelLeaf: () => void }

  const { maskCurrency } = Masks()

  return (
    <div>
      <StyledAccordion>
        <Accordion.Header>2 - Dados Finais</Accordion.Header>
        <Accordion.Body>
          <Form>
            <Row as={Col} className="mb-4">
              <Form.Group as={Col} >
                <FloatingLabel style={{ fontSize: "14px" }} label="Presença">
                  <Form.Select style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} value={pedido.presenca || ""} name="presenca" onChange={handleChange}>
                    <option value="0">0 - Não se aplica (por exemplo, Nota Fiscal complementar ou de ajuste)</option>
                    <option value="1">1 - Operação presencial</option>
                    <option value="2">2 - Operação não presencial, pela Internet</option>
                    <option value="3">3 - Operação não presencial, Teleatendimento</option>
                    <option value="4">4 - NFC-e em operação com entrega a domicílio</option>
                    <option value="5">5 - Operação presencial, fora do estabelecimento</option>
                    <option value="9">9 - Operação não presencial, outros</option>
                  </Form.Select>
                </FloatingLabel>
              </Form.Group>
            </Row>

            <Row as={Col} className="mb-4">
              <Form.Group as={Col}>
                <FloatingLabel style={{ fontSize: "14px" }} label="Total Frete">
                  <Form.Control style={{ height: "48px" }} type="text" name="frete" onKeyDown={maskCurrency} onKeyUp={handleTotalValueGeneralLeafInformation} onChange={handleChange} value={pedido.frete || ""} />
                </FloatingLabel>
              </Form.Group>


              <Form.Group as={Col}>
                <FloatingLabel style={{ fontSize: "14px" }} label="Desconto Total">
                  <Form.Control style={{ height: "48px" }} disabled type="text" name="desconto" onKeyDown={maskCurrency} onChange={handleChange} value={pedido.desconto || ""} />
                </FloatingLabel>
              </Form.Group>

              <Form.Group as={Col}>
                <FloatingLabel style={{ fontSize: "14px" }} label="Outras Despesas">
                  <Form.Control style={{ height: "48px" }} type="text" name="despesas_acessorias" onKeyDown={maskCurrency} onChange={handleChange} value={pedido.despesas_acessorias || ""} />
                </FloatingLabel>
              </Form.Group>

              <Form.Group as={Col}>
                <FloatingLabel style={{ fontSize: "14px" }} label="Total do Pedido">
                  <Form.Control style={{ height: "48px" }} disabled type="text" name="total" onChange={handleChange} value={pedido.total || ""} />
                </FloatingLabel>
              </Form.Group>
            </Row>

            <Row className="mb-4">
              <Form.Group as={Col}>
                <FloatingLabel style={{ fontSize: "14px" }} label="Intermediador">
                  <Form.Select style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} value={pedido.intermediador || ""} name="intermediador" onChange={handleChange}>
                    <option value="0">0 - Operação sem intermediador (em site ou plataforma própria)</option>
                    <option value="1">1 - Operação em site ou plataforma de terceiros (intermediadores/marketplace)</option>
                  </Form.Select>
                </FloatingLabel>
              </Form.Group>

              <Form.Group as={Col} hidden={pedido.intermediador == "0"}>
                <FloatingLabel style={{ fontSize: "14px" }} label="CNPJ do Intermediador">
                  <Form.Control style={{ height: "48px" }} type="text" name="cnpj_intermediador" onChange={handleChange} value={pedido.cnpj_intermediador || ""} />
                </FloatingLabel>
              </Form.Group>

              <Form.Group as={Col} hidden={pedido.intermediador == "0"}>
                <FloatingLabel style={{ fontSize: "14px" }} label="Nome do Intermediador">
                  <Form.Control style={{ height: "48px" }} type="text" name="id_intermediador" onChange={handleChange} value={pedido.id_intermediador || ""} />
                </FloatingLabel>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <FloatingLabel style={{ fontSize: "14px" }} label="Informações Complementares">
                  <Form.Control style={{ height: "48px" }} type="text" name="informacoes_complementares" onChange={handleChange} value={pedido.informacoes_complementares || ""} />
                </FloatingLabel>
              </Form.Group>

              <Form.Group as={Col}>
                <FloatingLabel style={{ fontSize: "14px" }} label="Informações ao fisco">
                  <Form.Control style={{ height: "48px" }} type="text" name="informacoes_fisco" onChange={handleChange} value={pedido.informacoes_fisco || ""} />
                </FloatingLabel>
              </Form.Group>
            </Row>

            <ButtonLeaf>
              <Button variant="" style={{ background: "Lavender", width: "150px", color: "black" }}>
                <IoRefresh />  Limpar Dados
              </Button>

              <Button onClick={sendLeaf} disabled={pedido.id !== "" ? false : true} variant="" style={{ background: "#666", width: "150px", color: "whitesmoke", borderRight: "2px solid Limegreen", borderLeft: "2px solid Limegreen" }}>
                <IoCheckboxOutline />  Emitir Nota
              </Button>

              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic" style={{backgroundColor: '#666666', color: 'white', fontWeight: 'bold'}}>
                  Ações
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item style={{fontWeight: 'bold', color: '#9623e0'}} onClick={cancelLeaf}>Cancelar</Dropdown.Item>
                  <Dropdown.Item style={{fontWeight: 'bold', color: '#9623e0'}} >Inutilizar</Dropdown.Item>
                  <Dropdown.Item style={{fontWeight: 'bold', color: '#9623e0'}} >Carta de correção</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ButtonLeaf>
          </Form>
        </Accordion.Body>
      </StyledAccordion>
    </div>
  )
}