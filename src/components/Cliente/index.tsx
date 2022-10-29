import { useState, useCallback } from 'react';

import { toast } from "react-toastify";

import { Search } from '../Search/index';
import { ICliente } from '../../interface/ICliente';
import { INITIAL_STATE_CLIENTE } from './initialState';

import ClienteService from '../../services/ClienteService';

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

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header style={{ background: "#1C1C1C", color: "whitesmoke" }} closeButton>
          <Offcanvas.Title style={{ background: "#1C1C1C", color: "LightGrey", fontWeight: "bold", fontSize: "30px" }}>Cadastre o Cliente</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ background: "#1C1C1C", color: "LightGrey", fontWeight: "bolder" }}>
          <Tabs
            defaultActiveKey="Cadastro"
            id="clientTabs"
            className="mb-3"
          >
            <Tab eventKey="Cadastro" title="Cadastro">
              <Form >
                <Form.Control onChange={handleChange} hidden name="id" type="text" />

                <FloatingLabel className="mb-4" label="Nome do Cliente">
                  <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="nome" type="text" value={client.nome || ""} />
                </FloatingLabel>

                <FloatingLabel className="mb-4" label="CPF/CNPJ">
                  <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="cpfCnpj" type="text" value={client.cpfCnpj || ""} />
                </FloatingLabel>

                <FloatingLabel className="mb-4" label="Endereço">
                  <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="endereco" type="text" value={client.endereco || ""} />
                </FloatingLabel>

                <FloatingLabel className="mb-4" label="Número">
                  <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="numero" type="text" value={client.numero || ""} />
                </FloatingLabel>

                <FloatingLabel className="mb-4" label="Complemento">
                  <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="complemento" type="text" value={client.complemento || ""} />
                </FloatingLabel>

                <FloatingLabel className="mb-4" label="Bairro">
                  <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="bairro" type="text" value={client.bairro || ""} />
                </FloatingLabel>

                <FloatingLabel className="mb-4" label="Cidade">
                  <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="cidade" type="text" value={client.cidade || ""} />
                </FloatingLabel>


                <FloatingLabel className="mb-4" label="Estado">
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

                <FloatingLabel className="mb-4" label="CEP">
                  <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="cep" type="text" value={client.cep || ""} />
                </FloatingLabel>

                <FloatingLabel className="mb-3" label="Telefone">
                  <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="telefone" type="text" value={client.telefone || ""} />
                </FloatingLabel>

                <FloatingLabel className="mb-3" label="Celular">
                  <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="celular" type="text" value={client.celular || ""} />
                </FloatingLabel>

                <FloatingLabel className="mb-4" label="Email">
                  <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="email" type="text" value={client.email || ""} />
                </FloatingLabel>

                <FloatingLabel className="mb-4" label="Observação">
                  <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="observacao" type="text" value={client.observacao || ""} />
                </FloatingLabel>

                <FloatingLabel className="mb-4" label="Data nascimento">
                  <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="dataNascimento" type="date" value={client.dataNascimento || ""} />
                </FloatingLabel>

                <Row className=" gap-5">
                  <Col className='d-flex justify-content-center'>
                    <Button variant="" onClick={handleSaveOrUpdate} type="button" size='lg' style={{ background: "BlueViolet", color: "whitesmoke" }}>
                      Cadastrar
                    </Button>
                  </Col>

                  <Col className='d-flex justify-content-center'>
                    <Button variant="" onClick={() => clearAllInputs()} type="button" size='lg' style={{ background: "BlueViolet", color: "whitesmoke" }}>
                      Limpar
                    </Button>
                  </Col>
                </Row>

              </Form>
            </Tab>
            <Tab eventKey="Pesquisar" title="Pesquisar">
              <Search />
            </Tab>

          </Tabs>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

