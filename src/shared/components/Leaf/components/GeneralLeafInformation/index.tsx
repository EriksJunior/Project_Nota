import { useContext } from 'react';
import { LeafContext } from '../../../../context/leaf/leaf';
import { ModalCancelLeaf } from '../Modals/ModalCancelLeaf';
import { PedidoLeaf } from '../../../../../interface/ILeaf';

import { Form, Col, Row, Button, Accordion, FloatingLabel, Dropdown } from 'react-bootstrap';
import { IoCheckboxOutline, IoRefresh } from "react-icons/io5";

import { ButtonLeaf } from '../../../Styles/general';
import { StyledAccordion } from '../../styles'

import { Masks } from '../../../../../utils/masks/Masks';
import { FormEnd , FloatingLabelEnd  , FormControlEnd , FormSelectEnd } from './styles';


export function GeneralLeafInformation() {
  const { handleChange, pedido, sendLeaf, handleTotalValueGeneralLeafInformation, handleShowModalCancelLeaf } = useContext(LeafContext) as { handleChange: React.ChangeEventHandler, pedido: PedidoLeaf, sendLeaf: () => void, handleTotalValueGeneralLeafInformation: () => void, handleShowModalCancelLeaf: () => void }

  const { maskCurrency } = Masks()

  return (
    <div>
      <StyledAccordion>
        <Accordion.Header>2 - Dados Finais</Accordion.Header>
        <Accordion.Body>
          <FormEnd>
            <Row as={Col} className="mb-4">
              <Form.Group as={Col} >
                <FloatingLabelEnd label="Presença">
                  <FormSelectEnd value={pedido.presenca || ""} name="presenca" onChange={handleChange}>
                    <option value="0">0 - Não se aplica (por exemplo, Nota Fiscal complementar ou de ajuste)</option>
                    <option value="1">1 - Operação presencial</option>
                    <option value="2">2 - Operação não presencial, pela Internet</option>
                    <option value="3">3 - Operação não presencial, Teleatendimento</option>
                    <option value="4">4 - NFC-e em operação com entrega a domicílio</option>
                    <option value="5">5 - Operação presencial, fora do estabelecimento</option>
                    <option value="9">9 - Operação não presencial, outros</option>
                  </FormSelectEnd>
                </FloatingLabelEnd>
              </Form.Group>
            </Row>

            <Row as={Col} className="mb-4">
              <Form.Group as={Col}>
                <FloatingLabelEnd label="Total Frete">
                  <FormControlEnd type="text" name="frete" onKeyDown={maskCurrency} onKeyUp={handleTotalValueGeneralLeafInformation} onChange={handleChange} value={pedido.frete || ""} />
                </FloatingLabelEnd>
              </Form.Group>


              <Form.Group as={Col}>
                <FloatingLabelEnd label="Desconto Total">
                  <FormControlEnd disabled type="text" name="desconto" onKeyDown={maskCurrency} onChange={handleChange} value={pedido.desconto || ""} />
                </FloatingLabelEnd>
              </Form.Group>

              <Form.Group as={Col}>
                <FloatingLabelEnd label="Outras Despesas">
                  <FormControlEnd type="text" name="despesas_acessorias" onKeyDown={maskCurrency} onChange={handleChange} value={pedido.despesas_acessorias || ""} />
                </FloatingLabelEnd>
              </Form.Group>

              <Form.Group as={Col}>
                <FloatingLabelEnd label="Total do Pedido">
                  <FormControlEnd disabled type="text" name="total" onChange={handleChange} value={pedido.total || ""} />
                </FloatingLabelEnd>
              </Form.Group>
            </Row>

            <Row className="mb-4">
              <Form.Group as={Col}>
                <FloatingLabelEnd label="Intermediador">
                  <FormSelectEnd value={pedido.intermediador || ""} name="intermediador" onChange={handleChange}>
                    <option value="0">0 - Operação sem intermediador (em site ou plataforma própria)</option>
                    <option value="1">1 - Operação em site ou plataforma de terceiros (intermediadores/marketplace)</option>
                  </FormSelectEnd>
                </FloatingLabelEnd>
              </Form.Group>

              <Form.Group as={Col} hidden={pedido.intermediador == "0"}>
                <FloatingLabelEnd label="CNPJ do Intermediador">
                  <FormControlEnd type="text" name="cnpj_intermediador" onChange={handleChange} value={pedido.cnpj_intermediador || ""} />
                </FloatingLabelEnd>
              </Form.Group>

              <Form.Group as={Col} hidden={pedido.intermediador == "0"}>
                <FloatingLabelEnd label="Nome do Intermediador">
                  <FormControlEnd type="text" name="id_intermediador" onChange={handleChange} value={pedido.id_intermediador || ""} />
                </FloatingLabelEnd>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <FloatingLabelEnd label="Informações Complementares">
                  <FormControlEnd type="text" name="informacoes_complementares" onChange={handleChange} value={pedido.informacoes_complementares || ""} />
                </FloatingLabelEnd>
              </Form.Group>

              <Form.Group as={Col}>
                <FloatingLabelEnd label="Informações ao fisco">
                  <FormControlEnd type="text" name="informacoes_fisco" onChange={handleChange} value={pedido.informacoes_fisco || ""} />
                </FloatingLabelEnd>
              </Form.Group>
            </Row>

            <ButtonLeaf>
              <Button variant="" style={{ background: "Lavender", width: "150px", color: "black", border: "1px solid #A9A9A9" }}>
                <IoRefresh />  Limpar Dados
              </Button>

              <Button onClick={sendLeaf} disabled={pedido.id !== "" ? false : true} variant="" style={{ background: "#666", width: "150px", color: "whitesmoke", border: "1px solid Limegreen" }}>
                <IoCheckboxOutline />  Emitir Nota
              </Button>

              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic" style={{ backgroundColor: '#666666', color: 'white', fontWeight: 'bold', border: "1px solid blue" }}>
                  Ações
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item  disabled={pedido.status === "Emitida" ? false : true} onClick={handleShowModalCancelLeaf}>Cancelar</Dropdown.Item>
                  <Dropdown.Item>Inutilizar</Dropdown.Item>
                  <Dropdown.Item>Carta de correção</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ButtonLeaf>
          </FormEnd>
        </Accordion.Body>
      </StyledAccordion>

      <ModalCancelLeaf />
    </div>
  )
}