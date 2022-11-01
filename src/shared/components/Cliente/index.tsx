import { useState, useCallback } from 'react';

import { toast } from "react-toastify";

import { Search } from '../Search/index';
import { ClienteTable } from './components/ClienteTable';
import { ICliente, ISearch } from '../../../interface/ICliente';
import { INITIAL_STATE_CLIENTE, INITIAL_STATE_SEARCH } from './initialState';

import ClienteService from '../../../services/ClienteService';

import { Form, Button, FloatingLabel, Offcanvas, Tab, Tabs, Row, Col } from 'react-bootstrap';
import { ButtonBt, IconBiUser } from '../Styles/bootstrap';
import { ContentIcon, Text } from '../Styles/general';

export function ClientModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    clearAllInputs()
    setShow(false)
  };
  const handleShow = () => {
    clearAllInputs()
    setShow(true)
  };

  const [client, setClient] = useState<ICliente>(INITIAL_STATE_CLIENTE);
  const [search, setSearch] = useState<ISearch>(INITIAL_STATE_SEARCH)
  const [returnedClient, setReturnedClient] = useState<ICliente[]>()


  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    setClient({ ...client, [e.target.name]: e.target.value })
  }, [client]);


  const saveClient = async () => {
    try {
      const result = await ClienteService.save(client as ICliente)
      setClient({ ...client, id: result.id })

      toast("Salvo com sucesso! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error: any) {
      toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const updateClient = async () => {
    try {
      await ClienteService.update(client as ICliente)

      toast("Atualizado com sucesso! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error: any) {
      toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const searchClient = async () => {
    try {
      const result = await ClienteService.search(search.text, search.page)
      setReturnedClient(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSaveOrUpdate = async () => {
    client?.id === "" ? saveClient() : updateClient()
  }

  const clearAllInputs = () => {
    setClient(INITIAL_STATE_CLIENTE)
  }

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
        <Offcanvas.Header style={{ background: "#1C1C1C", color: "whitesmoke" }} closeButton>
          <Offcanvas.Title style={{ background: "#1C1C1C", color: "LightGrey", fontWeight: "bold", fontSize: "36px", justifyContent: "center", paddingLeft: "50px" }}>Cadastre o Cliente</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ background: "#1C1C1C", color: "LightGrey", fontWeight: "bolder" }}>
          <Tabs
            defaultActiveKey="Cadastro"
            id="clientTabs"
            className="mb-3"
            style={{ fontSize: "20px", gap: "20px", background: "#363636", borderRadius: "10px 20px 0px 2px" }}
          >
            <Tab eventKey="Cadastro" title="Cadastro" >
              <Form className="d-flex flex-column gap-3">
                <Form.Control onChange={handleChange} hidden name="id" type="text" />

                <Row>
                  <Col>
                    <FloatingLabel label="Nome do Cliente">
                      <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="nome" type="text" value={client.nome || ""} />
                    </FloatingLabel>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FloatingLabel label="CPF/CNPJ">
                      <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="cpfCnpj" type="text" value={client.cpfCnpj || ""} />
                    </FloatingLabel>
                  </Col>

                  <Col>
                    <FloatingLabel label="Data nascimento">
                      <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="dataNascimento" type="date" value={client.dataNascimento || ""} />
                    </FloatingLabel>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FloatingLabel label="Endereço">
                      <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="endereco" type="text" value={client.endereco || ""} />
                    </FloatingLabel>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FloatingLabel label="Número">
                      <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="numero" type="text" value={client.numero || ""} />
                    </FloatingLabel>
                  </Col>

                  <Col>
                    <FloatingLabel label="Complemento">
                      <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="complemento" type="text" value={client.complemento || ""} />
                    </FloatingLabel>
                  </Col>
                </Row>


                <Row>
                  <Col>
                    <FloatingLabel label="Bairro">
                      <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="bairro" type="text" value={client.bairro || ""} />
                    </FloatingLabel>
                  </Col>

                  <Col>
                    <FloatingLabel label="Cidade">
                      <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="cidade" type="text" value={client.cidade || ""} />
                    </FloatingLabel>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FloatingLabel label="Estado">
                      <Form.Select style={{ background: "#1C1C1C", color: "LightGrey", fontWeight: "bolder" }} onChange={handleChange} name="uf" value={client.uf || ""}>
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
                    <FloatingLabel label="CEP">
                      <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="cep" type="text" value={client.cep || ""} />
                    </FloatingLabel>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FloatingLabel label="Telefone">
                      <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="telefone" type="text" value={client.telefone || ""} />
                    </FloatingLabel>
                  </Col>

                  <Col>
                    <FloatingLabel label="Celular">
                      <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="celular" type="text" value={client.celular || ""} />
                    </FloatingLabel>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FloatingLabel label="Email">
                      <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="email" type="text" value={client.email || ""} />
                    </FloatingLabel>
                  </Col>

                  <Col>
                    <FloatingLabel label="Observação">
                      <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="observacao" type="text" value={client.observacao || ""} />
                    </FloatingLabel>
                  </Col>

                </Row>

                <Row className=" gap-5">
                  <Col className='d-flex justify-content-center'>
                    <Button variant="" onClick={handleSaveOrUpdate} type="button" size='lg' style={{ background: "BlueViolet", color: "whitesmoke", width: "300px" }}>
                      Cadastrar
                    </Button>
                  </Col>

                  <Col className='d-flex justify-content-center'>
                    <Button variant="" onClick={clearAllInputs} type="button" size='lg' style={{ background: "BlueViolet", color: "whitesmoke", width: "300px" }}>
                      Limpar
                    </Button>
                  </Col>
                </Row>

              </Form>
            </Tab>
            <Tab eventKey="Pesquisar" title="Pesquisar">
              <Row>
                <Search>
                  <Form.Control className="me-auto" placeholder="Faça sua pesquisa" onChange={(e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => setSearch({ ...search, text: e.target.value })} />
                  <Button variant="secondary" onClick={searchClient}>Pesquisar</Button>
                </Search>
              </Row>

              <Row className="mt-5">
                <ClienteTable textHeader1={'Nome'} textHeader2={'CPF/CNPJ'} textHeader3={'Dt Nascimento'} data={returnedClient} />
              </Row>
            </Tab>
          </Tabs>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

