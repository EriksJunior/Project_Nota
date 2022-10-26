import { Button , Card , Col , Form , Row } from 'react-bootstrap';
import { IconIoHome } from '../Styles/bootstrap';
import { IoCheckboxOutline } from "react-icons/io5";

import { ButtonAtt , ButtonReturn , ButtonContent ,  CardCompany , ImgLogo } from './styles'

import { Link } from "react-router-dom";


export function InfoCompany() {
  return (
    <div style={{ justifyContent:"center" , display:"flex" }}>
    <CardCompany className="text-center">
      <Card.Header>Cadastro da Empresa</Card.Header>
      <Card.Body>
        <Card.Title > <ImgLogo src="https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/07/3a20fba188391ee4671aa3b9f27a92f808b67c71.jpg" alt="" /> </Card.Title>
        <Card.Text>
        <Form>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Código</Form.Label>
                <Form.Control disabled />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridRazão">
                <Form.Label>Razão Social</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridFantasia">
                <Form.Label>Nome Fantasia</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAddress">
                <Form.Label>CPF/CNPJ</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>IE</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Registro</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAddress">
                <Form.Label>Endereço</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>Bairro</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Número</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Cidade</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Estado</Form.Label>
                <Form.Select defaultValue="Escolha um Estado">
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
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>CEP</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
          </Form>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
      <ButtonContent>
        <ButtonReturn as={Link} to="/">
          <Button variant="" size='lg'>
            <IconIoHome/> <span>Página Principal</span>
          </Button>
        </ButtonReturn>
        <ButtonAtt>
          <Button variant="" size='lg' style={{ color: "white"}}>
            <IoCheckboxOutline/> Atualizar cadastro
          </Button>
        </ButtonAtt>
      </ButtonContent>
      </Card.Footer>
    </CardCompany>
    </div>
  );
}