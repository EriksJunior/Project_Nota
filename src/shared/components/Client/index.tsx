import { useContext } from 'react';
import { ClientContext } from '../../context/client/client';

import { Search } from '../Search/index';
import { ClienteTable } from './components/ClienteTable';

import { Form, Button, Tab, Tabs, Row, Col } from 'react-bootstrap';
import { ButtonBt, IconBiUser } from '../Styles/bootstrap';
import { OffcanvasBt, OffcanvasHeaderBt, OffcanvasTitleBt, OffcanvasBodyBt, FloatingLabelBt, FormControlBt, FormSelectBt, ButtonClient } from "./styles"
import { ContentIcon, Text } from '../Styles/general';

import { Masks } from "../../../utils/masks/Masks"

import { ICliente, ISearch } from '../../../interface/ICliente';
import './styles.css';

export function ClientModal() {
  const { client, handleChange, clearAllInputs, alterTab, setAlterTab, handleSaveOrUpdate,
    handleClose, handleShow, returnedClient, search, searchClient, setSearch, show }
    = useContext(ClientContext) as {
      client: ICliente, handleChange: React.ChangeEventHandler,
      alterTab: string, setAlterTab: (value: string | null) => void,
      clearAllInputs: () => void, handleSaveOrUpdate: () => void, handleClose: () => void,
      handleShow: () => void, returnedClient: ICliente[],
      search: ISearch, searchClient: () => void, setSearch: any, show: Boolean
    }

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
                  <Col>
                    <FloatingLabelBt label="Nome do Cliente">
                      <FormControlBt onChange={handleChange} name="nome" type="text" value={client.nome || ""} />
                    </FloatingLabelBt>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FloatingLabelBt label="CPF/CNPJ">
                      <FormControlBt onChange={handleChange} onKeyUp={maskCpfCnpj} name="cpfCnpj" type="text" value={client.cpfCnpj || ""} />
                    </FloatingLabelBt>
                  </Col>

                  <Col>
                    <FloatingLabelBt label="Data nascimento">
                      <FormControlBt onChange={handleChange} name="dataNascimento" type="date" value={client.dataNascimento || ""} />
                    </FloatingLabelBt>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FloatingLabelBt label="Endereço">
                      <FormControlBt onChange={handleChange} name="endereco" type="text" value={client.endereco || ""} />
                    </FloatingLabelBt>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FloatingLabelBt label="Bairro">
                      <FormControlBt onChange={handleChange} name="bairro" type="text" value={client.bairro || ""} />
                    </FloatingLabelBt>
                  </Col>    
                </Row>

                <Row>
                  <Col>
                    <FloatingLabelBt label="Número">
                      <FormControlBt onChange={handleChange} name="numero" type="text" value={client.numero || ""} />
                    </FloatingLabelBt>
                  </Col>
                  <Col>
                    <FloatingLabelBt label="Complemento">
                      <FormControlBt onChange={handleChange} name="complemento" type="text" value={client.complemento || ""} />
                    </FloatingLabelBt>
                  </Col>
                  <Col>
                    <FloatingLabelBt label="CEP">
                      <FormControlBt onChange={handleChange} onKeyUp={maskCep} name="cep" type="text" value={client.cep || ""} />
                    </FloatingLabelBt>
                  </Col>

                </Row>

                <Row>
                  <Col>
                    <FloatingLabelBt label="Estado">
                      <FormSelectBt onChange={handleChange} name="uf" value={client.uf || ""}>
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
                      </FormSelectBt>
                    </FloatingLabelBt>
                  </Col>
                  <Col>
                    <FloatingLabelBt label="Cidade">
                      <FormControlBt onChange={handleChange} name="cidade" type="text" value={client.cidade || ""} />
                    </FloatingLabelBt>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FloatingLabelBt label="Telefone">
                      <FormControlBt onChange={handleChange} name="telefone" type="text" value={client.telefone || ""} />
                    </FloatingLabelBt>
                  </Col>

                  <Col>
                    <FloatingLabelBt label="Celular">
                      <FormControlBt onChange={handleChange} name="celular" type="text" value={client.celular || ""} />
                    </FloatingLabelBt>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FloatingLabelBt label="Email">
                      <FormControlBt onChange={handleChange} name="email" type="text" value={client.email || ""} />
                    </FloatingLabelBt>
                  </Col>

                  <Col>
                    <FloatingLabelBt label="Observação">
                      <FormControlBt onChange={handleChange} name="observacao" type="text" value={client.observacao || ""} />
                    </FloatingLabelBt>
                  </Col>
                </Row>

                <Row className=" gap-5">
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
                <Search>
                  <FormControlBt className="me-auto" placeholder="Faça sua pesquisa" onChange={(e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => setSearch({ ...search, text: e.target.value })} />
                  <Button style={{ background: "black" }} onClick={searchClient}>Pesquisar</Button>
                </Search>
              </Row>

              <Row className="mt-5">
                <ClienteTable data={returnedClient} />
              </Row>
            </Tab>
          </Tabs>

        </OffcanvasBodyBt>
      </OffcanvasBt>
    </>
  );
}

