import { Button, Card, Col, Form, FloatingLabel, Row } from 'react-bootstrap';
import { IoCheckboxOutline , IoHome } from "react-icons/io5";
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
      <CardCompany style={{ background: "#D3D3D3", color: "black" }} className="text-center">
        <Card.Header style={{ fontSize: "30px", fontWeight: "bold" , background:"#8A2BE2" }} >Cadastro da Empresa</Card.Header>
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
                  <FloatingLabel as={Col} style={{ fontSize: "14px" }} label="Código">
                    <Form.Control disabled type="text" style={{ height: "48px" }} onChange={handleChange} name="codigo" />
                  </FloatingLabel>
                </Col>

                <Col>
                  <FloatingLabel as={Col} style={{ fontSize: "14px" }} label=" Razão Social">
                    <Form.Control type="text" style={{ height: "48px" }} onChange={handleChange} name="razaoSocial" />
                  </FloatingLabel>
                </Col>

                <Col>
                  <FloatingLabel as={Col} style={{ fontSize: "14px" }} label=" Nome Fantasia">
                    <Form.Control type="text" style={{ height: "48px" }} onChange={handleChange} name="nomeFant" />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col sm={3} md={3} lg={2} xl={2}>
                  <FloatingLabel as={Col} style={{ fontSize: "14px" }} label=" Registro">
                    <Form.Control type="text" style={{ height: "48px" }} onChange={handleChange} name="registro" />
                  </FloatingLabel>
                </Col>

                <Col>
                  <FloatingLabel as={Col} style={{ fontSize: "14px" }} label="CPF/CNPJ">
                    <Form.Control type="text" style={{ height: "48px" }} onChange={handleChange} name="cpfCnpj" />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel as={Col} style={{ fontSize: "14px" }} label="IE">
                    <Form.Control type="text" style={{ height: "48px" }} onChange={handleChange} name="IE" />
                  </FloatingLabel>
                </Col>

              </Row>
              <Row className="mb-3">
                <Col sm={6} md={6} lg={6} xl={7}>
                  <FloatingLabel as={Col} style={{ fontSize: "14px" }} label="Endereço">
                    <Form.Control type="text" style={{ height: "48px" }} onChange={handleChange} name="endereco" />
                  </FloatingLabel>
                </Col>

                <Col sm={3} md={3} lg={2} xl={2}>
                  <FloatingLabel as={Col} style={{ fontSize: "14px" }} label="Número">
                    <Form.Control type="text" style={{ height: "48px" }} onChange={handleChange} name="numero" />
                  </FloatingLabel>
                </Col>

                <Col sm={3} md={3} lg={2} xl={3}>
                  <FloatingLabel as={Col} style={{ fontSize: "14px" }} label="Bairro">
                    <Form.Control type="text" style={{ height: "48px" }} onChange={handleChange} name="bairro" />
                  </FloatingLabel>
                </Col>

              </Row>

              <Row className="mb-3">
                <Col>
                  <FloatingLabel as={Col} style={{ fontSize: "14px" }} label="Cidade">
                    <Form.Control type="text" style={{ height: "48px" }} onChange={handleChange} name="cidade" />
                  </FloatingLabel>
                </Col>

                <Col>
                  <FloatingLabel as={Col} style={{ fontSize: "14px" }} label="Estado">
                    <Form.Select style={{ fontWeight: "bolder" , height: "48px" }}>
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
                  <FloatingLabel as={Col} style={{ fontSize: "14px" }} label="CEP">
                    <Form.Control type="text" style={{ height: "48px" }} onChange={handleChange} name="cep" />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col sm={3} md={3} lg={2} xl={6}>
                  <FloatingLabel as={Col} style={{ fontSize: "14px" }} label="Email">
                    <Form.Control type="text" style={{ height: "48px" }} onChange={handleChange} name="email" />
                  </FloatingLabel>
                </Col>

                <Col sm={3} md={3} lg={2} xl={3}>
                  <FloatingLabel as={Col} style={{ fontSize: "14px" }} label="Telefone">
                    <Form.Control type="text" style={{ height: "48px" }} onChange={handleChange} name="telefone" />
                  </FloatingLabel>
                </Col>

                <Col sm={3} md={3} lg={2} xl={3}>
                  <FloatingLabel as={Col} style={{ fontSize: "14px" }} label="Celular">
                    <Form.Control type="text" style={{ height: "48px" }} onChange={handleChange} name="celular" />
                  </FloatingLabel>
                </Col>

              </Row>
            </Form>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <ButtonContent>
            <ButtonReturn as={Link} to="/">
              <Button variant="">
                <IoHome /> <a>Página Principal</a>
              </Button>
            </ButtonReturn>
            <ButtonAtt>
              <Button onClick={updateCompany} variant="">
                <IoCheckboxOutline /> Atualizar cadastro
              </Button>
            </ButtonAtt>
          </ButtonContent>
        </Card.Footer>
      </CardCompany>
    </div>
  );
}