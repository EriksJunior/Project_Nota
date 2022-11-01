import { Button, Card, Col, Form, FloatingLabel, Row } from 'react-bootstrap';
import { IconIoHome } from '../Styles/bootstrap';
import { IoCheckboxOutline } from "react-icons/io5";
import { Dropzone } from '../DropzoneLogo/index';
import { ButtonAtt, ButtonReturn, ButtonContent, CardCompany, LogoEmpresa } from './styles'

import { ICompany } from '../../../interface/ICompany';

import { Link } from "react-router-dom";
import { useCallback, useState } from 'react';
import CompanyService from '../../../services/CompanyService';


export function InfoCompany() {

  const [company, setCompany] = useState<ICompany>();


  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany({ ...company, [e.target.name]: e.target.value })
  }, [company]);

  async function updateCompany() {
    const result = await CompanyService.update(company as ICompany)
    console.log(result)
  }

  return (


    <div style={{ justifyContent: "center", display: "flex" }}>
      <CardCompany style={{ background: "#483D8B", color: "black" }} className="text-center">
        <Card.Header style={{ fontSize: "30px", fontWeight: "bold" }} >Cadastro da Empresa</Card.Header>
        <Card.Body>
          <Card.Title style={{ justifyContent: "center", display: "flex" }} >
            <LogoEmpresa>
              <Dropzone />
            </LogoEmpresa>
          </Card.Title>
          <Card.Text>
            <Form>
              <Row className="mb-3">
                <Col sm={3} md={3} lg={2} xl={2}>
                  <FloatingLabel as={Col} className="mb-4" label="Código">
                    <Form.Control disabled type="text" onChange={handleChange} name="codigo" />
                  </FloatingLabel>
                </Col>

                <Col>
                  <FloatingLabel as={Col} className="mb-4" label=" Razão Social">
                    <Form.Control type="text" onChange={handleChange} name="razaoSocial" />
                  </FloatingLabel>
                </Col>

                <Col>
                  <FloatingLabel as={Col} className="mb-4" label=" Nome Fantasia">
                    <Form.Control type="text" onChange={handleChange} name="nomeFant" />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col sm={3} md={3} lg={2} xl={2}>
                  <FloatingLabel as={Col} className="mb-4" label=" Registro">
                    <Form.Control type="text" onChange={handleChange} name="registro" />
                  </FloatingLabel>
                </Col>

                <Col>
                  <FloatingLabel as={Col} className="mb-4" label="CPF/CNPJ">
                    <Form.Control type="text" onChange={handleChange} name="cpfCnpj" />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel as={Col} className="mb-4" label="IE">
                    <Form.Control type="text" onChange={handleChange} name="IE" />
                  </FloatingLabel>
                </Col>

              </Row>
              <Row className="mb-3">
                <Col sm={6} md={6} lg={6} xl={7}>
                  <FloatingLabel as={Col} className="mb-4" label="Endereço">
                    <Form.Control type="text" onChange={handleChange} name="endereco" />
                  </FloatingLabel>
                </Col>

                <Col sm={3} md={3} lg={2} xl={2}>
                  <FloatingLabel as={Col} className="mb-4" label="Número">
                    <Form.Control type="text" onChange={handleChange} name="numero" />
                  </FloatingLabel>
                </Col>

                <Col sm={3} md={3} lg={2} xl={3}>
                  <FloatingLabel as={Col} className="mb-4" label="Bairro">
                    <Form.Control type="text" onChange={handleChange} name="bairro" />
                  </FloatingLabel>
                </Col>

              </Row>

              <Row className="mb-3">
                <Col>
                  <FloatingLabel as={Col} className="mb-4" label="Cidade">
                    <Form.Control type="text" onChange={handleChange} name="cidade" />
                  </FloatingLabel>
                </Col>

                <Col>
                  <FloatingLabel as={Col} className="mb-4" label="Estado">
                    <Form.Select style={{ fontWeight: "bolder" }}>
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

                <Col sm={3} md={3} lg={2} xl={3}>
                  <FloatingLabel as={Col} className="mb-4" label="CEP">
                    <Form.Control type="text" onChange={handleChange} name="cep" />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row>
                <Col sm={3} md={3} lg={2} xl={6}>
                  <FloatingLabel as={Col} className="mb-4" label="Email">
                    <Form.Control type="text" onChange={handleChange} name="email" />
                  </FloatingLabel>
                </Col>

                <Col sm={3} md={3} lg={2} xl={3}>
                  <FloatingLabel as={Col} className="mb-4" label="Telefone">
                    <Form.Control type="text" onChange={handleChange} name="telefone" />
                  </FloatingLabel>
                </Col>

                <Col sm={3} md={3} lg={2} xl={3}>
                  <FloatingLabel as={Col} className="mb-4" label="Celular">
                    <Form.Control type="text" onChange={handleChange} name="celular" />
                  </FloatingLabel>
                </Col>

              </Row>
            </Form>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <ButtonContent>
            <ButtonReturn as={Link} to="/">
              <Button variant="" size='lg'>
                <IconIoHome /> <span>Página Principal</span>
              </Button>
            </ButtonReturn>
            <ButtonAtt>
              <Button onClick={updateCompany} variant="" size='lg' style={{ color: "white" }}>
                <IoCheckboxOutline /> Atualizar cadastro
              </Button>
            </ButtonAtt>
          </ButtonContent>
        </Card.Footer>
      </CardCompany>
    </div>
  );
}