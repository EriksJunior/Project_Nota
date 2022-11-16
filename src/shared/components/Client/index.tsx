import { useContext } from 'react';
import { ClientContext } from '../../context/client/client';

import { Search } from '../Search/index';
import { ClienteTable } from './components/ClienteTable';

import { Form, Button, FloatingLabel, Offcanvas, Tab, Tabs, Row, Col } from 'react-bootstrap';
import { ButtonBt, IconBiUser } from '../Styles/bootstrap';
import { ContentIcon, Text } from '../Styles/general';

import { Masks } from "../../../utils/masks/Masks"

import { ICliente, ISearch } from '../../../interface/ICliente';
import './styles.css';

export function ClientModal() {
  const { client, handleChange, clearAllInputs, alterTab, setAlterTab, handleSaveOrUpdate, 
    handleClose, handleShow, returnedClient, search, searchClient, setSearch, show }
   = useContext(ClientContext) as { client: ICliente, handleChange: React.ChangeEventHandler, 
    alterTab: string, setAlterTab: (value: string | null) => void, 
    clearAllInputs: () => void, handleSaveOrUpdate: () => void, handleClose: () => void,
     handleShow: () => void, returnedClient: ICliente[],
     search: ISearch, searchClient: () => void, setSearch: any, show: Boolean }

  const { maskCep, maskCpfCnpj } = Masks()

  return (
    <>
      <ButtonBt variant="outiline-ligth" onClick={handleShow}>
        <ContentIcon>
          <IconBiUser className='icon' size={25} />
        </ContentIcon>
        <Text>
          Clientes
        </Text>
      </ButtonBt>

      <Offcanvas show={show} onHide={handleClose} style={{ width: "50vw" }} >
        <Offcanvas.Header style={{ backgroundColor: "blueViolet" }} closeButton>
          <Offcanvas.Title style={{ color: "white", fontWeight: "bold", fontSize: "36px", justifyContent: "center", paddingLeft: "50px" }}>Cadastre o Cliente</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ background: "#f5f5f5", color: "LightGrey", fontWeight: "bolder" }}>
          <Tabs
            activeKey={alterTab}
            id="clientTabs"
            onSelect={(tabSelected) => setAlterTab(tabSelected)}
            className="mb-3"

          >
            <Tab eventKey="cadastro" title="Cadastro">
              <Form className="d-flex flex-column gap-3">
                <Form.Control onChange={handleChange} hidden value={client.id || ""} name="id" type="text" />

                <Row>
                  <Col>
                    <FloatingLabel label="Nome do Cliente" style={{ color: "black", fontSize: "14px" }}>
                      <Form.Control style={{ background: "#f5f5f5", color: "black", height: "48px" }} onChange={handleChange} name="nome" type="text" value={client.nome || ""} />
                    </FloatingLabel>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FloatingLabel label="CPF/CNPJ" style={{ color: "black", fontSize: "14px" }}>
                      <Form.Control style={{ background: "#f5f5f5", color: "black", height: "48px" }} onChange={handleChange} onKeyUp={maskCpfCnpj} name="cpfCnpj" type="text" value={client.cpfCnpj || ""} />
                    </FloatingLabel>
                  </Col>

                  <Col>
                    <FloatingLabel label="Data nascimento" style={{ color: "black", fontSize: "14px" }}>
                      <Form.Control style={{ background: "#f5f5f5", color: "black", height: "48px" }} onChange={handleChange} name="dataNascimento" type="date" value={client.dataNascimento || ""} />
                    </FloatingLabel>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FloatingLabel label="Endereço" style={{ color: "black", fontSize: "14px" }}>
                      <Form.Control style={{ background: "#f5f5f5", color: "black", height: "48px" }} onChange={handleChange} name="endereco" type="text" value={client.endereco || ""} />
                    </FloatingLabel>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FloatingLabel label="Número" style={{ color: "black", fontSize: "14px" }}>
                      <Form.Control style={{ background: "#f5f5f5", color: "black", height: "48px" }} onChange={handleChange} name="numero" type="text" value={client.numero || ""} />
                    </FloatingLabel>
                  </Col>

                  <Col>
                    <FloatingLabel label="Complemento" style={{ color: "black", fontSize: "14px" }}>
                      <Form.Control style={{ background: "#f5f5f5", color: "black", height: "48px" }} onChange={handleChange} name="complemento" type="text" value={client.complemento || ""} />
                    </FloatingLabel>
                  </Col>
                </Row>


                <Row>
                  <Col>
                    <FloatingLabel label="Bairro" style={{ color: "black", fontSize: "14px" }}>
                      <Form.Control style={{ background: "#f5f5f5", color: "black", height: "48px" }} onChange={handleChange} name="bairro" type="text" value={client.bairro || ""} />
                    </FloatingLabel>
                  </Col>

                  <Col>
                    <FloatingLabel label="Cidade" style={{ color: "black", fontSize: "14px" }}>
                      <Form.Control style={{ background: "#f5f5f5", color: "black", height: "48px" }} onChange={handleChange} name="cidade" type="text" value={client.cidade || ""} />
                    </FloatingLabel>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FloatingLabel label="Estado" style={{ color: "black", fontSize: "14px" }}>
                      <Form.Select style={{ background: "#f5f5f5", color: "black", fontWeight: "bolder", height: "48px" }} onChange={handleChange} name="uf" value={client.uf || ""}>
                        <option>Selecione...</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espirito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>

                  <Col>
                    <FloatingLabel label="CEP" style={{ color: "black", fontSize: "14px" }}>
                      <Form.Control style={{ background: "#f5f5f5", color: "black", height: "48px" }} onChange={handleChange} onKeyUp={maskCep} name="cep" type="text" value={client.cep || ""} />
                    </FloatingLabel>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FloatingLabel label="Telefone" style={{ color: "black", fontSize: "14px" }}>
                      <Form.Control style={{ background: "#f5f5f5", color: "black", height: "48px" }} onChange={handleChange} name="telefone" type="text" value={client.telefone || ""} />
                    </FloatingLabel>
                  </Col>

                  <Col>
                    <FloatingLabel label="Celular" style={{ color: "black", fontSize: "14px" }}>
                      <Form.Control style={{ background: "#f5f5f5", color: "black", height: "48px" }} onChange={handleChange} name="celular" type="text" value={client.celular || ""} />
                    </FloatingLabel>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FloatingLabel label="Email" style={{ color: "black", fontSize: "14px" }}>
                      <Form.Control style={{ background: "#f5f5f5", color: "black", height: "48px" }} onChange={handleChange} name="email" type="text" value={client.email || ""} />
                    </FloatingLabel>
                  </Col>

                  <Col>
                    <FloatingLabel label="Observação" style={{ color: "black", fontSize: "14px" }}>
                      <Form.Control style={{ background: "#f5f5f5", color: "black", height: "48px" }} onChange={handleChange} name="observacao" type="text" value={client.observacao || ""} />
                    </FloatingLabel>
                  </Col>

                </Row>

                <Row className=" gap-5">
                  <Col className='d-flex justify-content-center'>
                    <Button variant="" onClick={handleSaveOrUpdate} type="button" style={{ background: "BlueViolet", color: "black", width: "300px" }}>
                      Cadastrar
                    </Button>
                  </Col>

                  <Col className='d-flex justify-content-center'>
                    <Button variant="" onClick={clearAllInputs} type="button" style={{ background: "BlueViolet", color: "black", width: "300px" }}>
                      Limpar
                    </Button>
                  </Col>
                </Row>

              </Form>
            </Tab>
            <Tab eventKey="pesquisar" title="Pesquisar">
              <Row>
                <Search>
                  <Form.Control className="me-auto" placeholder="Faça sua pesquisa" onChange={(e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => setSearch({ ...search, text: e.target.value })} />
                  <Button variant="secondary" onClick={searchClient}>Pesquisar</Button>
                </Search>
              </Row>

              <Row className="mt-5">
                <ClienteTable data={returnedClient} />
              </Row>
            </Tab>
          </Tabs>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

