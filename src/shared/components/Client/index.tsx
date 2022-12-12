import { useContext } from 'react';
import { ClientContext } from '../../context/client/client';
import { GlobalContext } from '../../context/global/global';

import { Search } from '../Search/index';
import { ClienteTable } from './components/ClienteTable';

import { Form, Button, Tab, Tabs, Row, Col, Card } from 'react-bootstrap';
import { ButtonBt, IconBiUser } from '../Styles/bootstrap';
import { OffcanvasBt, OffcanvasHeaderBt, OffcanvasTitleBt, OffcanvasBodyBt, FloatingLabelBt, FormControlBt, FormSelectBt, ButtonClient } from "./styles"
import { ContentIcon, Text } from '../Styles/general';

import { Masks } from "../../../utils/masks/Masks"

import { ICliente, ISearch } from '../../../interface/ICliente';
import './styles.css';

export function ClientModal() {
  const { handleChange, clearAllInputs, alterTab, setAlterTab, handleSaveOrUpdate,
    handleClose, handleShow, returnedClient, search, searchClient, setSearch, show }
    = useContext(ClientContext) as {
      handleChange: React.ChangeEventHandler,
      alterTab: string, setAlterTab: (value: string | null) => void,
      clearAllInputs: () => void, handleSaveOrUpdate: () => void, handleClose: () => void,
      handleShow: () => void, returnedClient: ICliente[],
      search: ISearch, searchClient: () => void, setSearch: any, show: Boolean
    }

  const { client } = useContext(GlobalContext) as { client: ICliente }

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

      <OffcanvasBt show={show} onHide={handleClose}>
        <OffcanvasHeaderBt closeButton>
          <OffcanvasTitleBt>Cadastre o Cliente</OffcanvasTitleBt>
        </OffcanvasHeaderBt>
        <OffcanvasBodyBt>
          <Card>
            <Card.Body className="p-4">
              <Tabs
                activeKey={alterTab}
                id="clientTabs"
                onSelect={(tabSelected) => setAlterTab(tabSelected)}
                className="mb-3"
                style={{ background: "#363636" }}

              >

                <Tab eventKey="cadastro" title="Cadastro">
                  <Form className="d-flex flex-column gap-3">
                    <FormControlBt onChange={handleChange} hidden value={client.id || ""} name="id" type="text" />

                    <Row>
                      <Col sm={12} md={12} lg={12} xl={12}>
                        <Form.Label>Nome do Cliente</Form.Label>
                        <Form.Control
                          onChange={handleChange} name="nome" type="text" value={client.nome || ""}
                        />
                      </Col>

                      <Col className="mt-3" sm={12} md={12} lg={6} xl={6}>
                        <Form.Label>CPF/CNPJ</Form.Label>
                        <Form.Control
                          onChange={handleChange} onKeyUp={maskCpfCnpj} name="cpfCnpj" type="text" value={client.cpfCnpj || ""}
                        />
                      </Col>

                      <Col className="mt-3" sm={12} md={12} lg={6} xl={6}>
                        <Form.Label>Data nascimento</Form.Label>
                        <Form.Control
                          onChange={handleChange} name="dataNascimento" type="date" value={client.dataNascimento || ""}
                        />
                      </Col>

                      <Col className="mt-3" sm={12} md={12} lg={12} xl={6}>
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control
                          onChange={handleChange} name="endereco" type="text" value={client.endereco || ""}
                        />
                      </Col>

                      <Col className="mt-3" sm={12} md={12} lg={6} xl={6}>
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control
                          onChange={handleChange} name="bairro" type="text" value={client.bairro || ""}
                        />
                      </Col>

                      <Col className="mt-3" sm={12} md={12} lg={6} xl={5}>
                        <Form.Label>Complemento</Form.Label>
                        <Form.Control
                          onChange={handleChange} name="complemento" type="text" value={client.complemento || ""}
                        />
                      </Col>

                      <Col className="mt-3" xs={6} sm={12} md={6} lg={6} xl={3}>
                        <Form.Label>Número</Form.Label>
                        <Form.Control
                          onChange={handleChange} name="numero" type="text" value={client.numero || ""}
                        />
                      </Col>
                      
                      <Col className="mt-3" xs={6} sm={12} md={6} lg={6} xl={4}>
                        <Form.Label>CEP</Form.Label>
                        <Form.Control
                          onChange={handleChange} onKeyUp={maskCep} name="cep" type="text" value={client.cep || ""}
                        />
                      </Col>

                      <Col className="mt-3" sm={12} md={12} lg={6} xl={6}>
                        <Form.Label>Estado</Form.Label>
                        <Form.Select onChange={handleChange} name="uf" value={client.uf || ""}>
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
                      </Col>

                      <Col className="mt-3" sm={12} md={12} lg={6} xl={6}>
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control
                          onChange={handleChange} name="cidade" type="text" value={client.cidade || ""}
                        />
                      </Col>

                      <Col className="mt-3" sm={12} md={6} lg={6} xl={4}>
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control
                          onChange={handleChange} name="telefone" type="text" value={client.telefone || ""}
                        />
                      </Col>

                      <Col className="mt-3" sm={12} md={6} lg={6} xl={4}>
                        <Form.Label>Celular</Form.Label>
                        <Form.Control
                          onChange={handleChange} name="celular" type="text" value={client.celular || ""}
                        />
                      </Col>

                      <Col className="mt-3" sm={12} md={12} lg={12} xl={4}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          onChange={handleChange} name="email" type="text" value={client.email || ""}
                        />
                      </Col>

                      <Col className="mt-3" sm={12} md={12} lg={12} xl={12}>
                        <Form.Label>Observação</Form.Label>
                        <Form.Control
                          as="textarea" rows={3} onChange={handleChange} name="observacao" type="area" value={client.observacao || ""}
                        />
                      </Col>
                    </Row>

                    <Row className="d-flex justify-content-between">
                      <Col className='d-flex justify-content-center'>
                        <ButtonClient variant="" onClick={handleSaveOrUpdate} type="button">
                          Cadastrar
                        </ButtonClient>
                      </Col>

                      <Col className='d-flex justify-content-center'>
                        <ButtonClient variant="" onClick={clearAllInputs} type="button">
                          Limpar
                        </ButtonClient>
                      </Col>
                    </Row>
                  </Form>
                </Tab>
                <Tab eventKey="pesquisar" title="Pesquisar">
                  <Row>
                      <Col className="mt-3" sm={9} md={9} lg={9} xl={9}>
                        <Form.Label>Faça sua pesquisa</Form.Label>
                        <Form.Control
                           className="me-auto" placeholder="Faça sua pesquisa" onChange={(e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => setSearch({ ...search, text: e.target.value })}
                        />
                      </Col>

                      <Col className="mt-5 text-center" sm={3} md={3} lg={3} xl={3}>
                        <ButtonClient variant="" onClick={searchClient} type="button">
                          Limpar
                        </ButtonClient>
                      </Col>
                  </Row>

                  <Row className="mt-5">
                    <ClienteTable data={returnedClient} />
                  </Row>
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </OffcanvasBodyBt>
      </OffcanvasBt>
    </>
  );
}

