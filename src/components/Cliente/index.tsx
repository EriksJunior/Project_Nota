import { useState , useCallback } from 'react';

import { Form, Button , FloatingLabel , Offcanvas , Tab , Tabs } from 'react-bootstrap';

import { ButtonBt, IconBiUser } from '../Styles/bootstrap';
import { ContentIcon, Text } from '../Styles/general';
import { Search } from '../Search/index';

import ClienteService from '../../services/ClienteService';
import { ICliente } from '../../interface/ICliente';


export function ClientModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [client , setClient] = useState<ICliente>();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>)=>{
    setClient ({ ...client , [e.target.name]: e.target.value})
  }, [client]);

  async function saveClient() {
    const result = await ClienteService.save(client as ICliente)
    console.log(result)
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
            <FloatingLabel className="mb-4" label="Nome do Cliente">
              <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="nome" type="text" placeholder="Nome do Cliente:" />
            </FloatingLabel>

            <FloatingLabel className="mb-4" label="CPF/CNPJ">
              <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="cpfCnpj" type="text" placeholder="CPF/CNPJ" />
            </FloatingLabel>

            <FloatingLabel className="mb-4" label="Endereço">
              <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="endereco" type="text" placeholder="Endereço" />
            </FloatingLabel>


            <FloatingLabel className="mb-4" label="Cidade">
              <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="cidade" type="text" placeholder="Cidade" />
            </FloatingLabel>

            <FloatingLabel className="mb-4" label="Bairro">
              <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="bairro" type="text" placeholder="Bairro" />
            </FloatingLabel>

            <FloatingLabel className="mb-4" label="Estado">
              <Form.Select style={{ background: "#1C1C1C", color: "LightGrey", fontWeight: "bolder" }} defaultValue="">
                <option value="">Selecione...</option>
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
              <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="cep" type="text" placeholder="CEP" />
            </FloatingLabel>

            <FloatingLabel className="mb-4" label="Email">
              <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="email" type="email" placeholder="Email" />
            </FloatingLabel>

            <FloatingLabel className="mb-3" label="Telefone">
              <Form.Control style={{ background: "#1C1C1C", color: "whitesmoke" }} onChange={handleChange} name="telefone" type="text" placeholder="Telefone" />
            </FloatingLabel>

            <div className="d-grid gap-2">
              <Button variant="" onClick={saveClient} type="button" size='lg' style={{ background: "BlueViolet", color: "whitesmoke" }}>
                Cadastrar
              </Button>
            </div>

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

