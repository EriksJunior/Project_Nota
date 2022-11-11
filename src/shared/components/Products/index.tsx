import { Form, Offcanvas, Button, FloatingLabel, Tab, Tabs, Col, Row } from 'react-bootstrap';

import { ButtonBt, IconBiBox } from '../Styles/bootstrap';
import { ContentIcon, Text } from '../Styles/general';

import { Search } from '../Search/index';
import { ProductTable } from './components/ProductTable';

import { Masks } from "../../../utils/masks/Masks"

import { UseProducts } from '../../hooks/useProducts';



export function ProductsModal() {
  const { produtos, search, setSearch, searchProduct, returnedProduct, handleShow, handleClose, handleChange, handleSaveOrUpdate, show } = UseProducts();
  const { maskCurrency } = Masks()

  return (
    <>
      <ButtonBt variant="outiline-ligth" onClick={handleShow}>
        <ContentIcon>
          <IconBiBox className='icon' size={25} />
        </ContentIcon>
        <Text>
          Produtos
        </Text>
      </ButtonBt>

      <Offcanvas show={show} onHide={handleClose} style={{ width: "50%" }}>
        <Offcanvas.Header style={{ background: "#1C1C1C" }} closeButton>
          <Offcanvas.Title style={{ color: "LightGrey", fontWeight: "bold", fontSize: "36px", justifyContent: "center", paddingLeft: "50px" }}  >Cadastro de Produto</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ background: "#DCDCDC", color: "LightGrey", fontWeight: "bolder" }}>
          <Tabs
            defaultActiveKey="Cadastro"
            id="clientTabs"
            className="mb-3"
            style={{ fontSize: "20px", background: "#363636", borderRadius: "10px 20px 0px 2px" }}
          >
            <Tab eventKey="Cadastro" title="Cadastro">
              <Form >
                <Form.Control onChange={handleChange} hidden value={produtos.id} name="id" type="text" />

                <Row>
                  <Col>
                    <FloatingLabel className="mb-4" label="Nome Do Produto" style={{ color: "black", fontSize: "14px" }}>
                      <Form.Control style={{ background: "#f5f5f5", height: "48px" }} type="text" onChange={handleChange} name="nome" value={produtos?.nome || ""} />
                    </FloatingLabel >
                  </Col>
                </Row>
                <Row className="mb-4 ">
                  <Col>
                    <FloatingLabel as={Col} label="Valor" style={{ color: "black", fontSize: "14px" }}>
                      <Form.Control style={{ background: "#f5f5f5", height: "48px" }} type="text" onChange={handleChange} onKeyDown={maskCurrency} name="valor" />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel as={Col} label="Valor de Venda" style={{ color: "black", fontSize: "14px" }}>
                      <Form.Control style={{ background: "#f5f5f5", height: "48px" }} type="text" onChange={handleChange} onKeyDown={maskCurrency} name="valorVenda" />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel as={Col} label="Unidade" style={{ color: "black", fontSize: "14px" }}>
                      <Form.Control style={{ background: "#f5f5f5", height: "48px" }} type="text" onChange={handleChange} name="unidade" />
                    </FloatingLabel>
                  </Col>
                </Row>

                <FloatingLabel className="mb-4" label="Código de Barras" style={{ color: "black", fontSize: "14px" }}>
                  <Form.Control style={{ background: "#f5f5f5", height: "48px" }} type="text" onChange={handleChange} name="codBarras" />
                </FloatingLabel>

                <FloatingLabel className="mb-4" label="Código de Referência" style={{ color: "black", fontSize: "14px" }}>
                  <Form.Control style={{ background: "#f5f5f5", height: "48px" }} type="text" onChange={handleChange} name="codReferencia" />
                </FloatingLabel>

                <Row className="mb-4">
                  <Col>
                    <FloatingLabel as={Col} label="Estoque" style={{ color: "black", fontSize: "14px" }}>
                      <Form.Control style={{ background: "#f5f5f5", height: "48px" }} type="text" onChange={handleChange} name="estoque" />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel as={Col} label="Estoque Mínimo" style={{ color: "black", fontSize: "14px" }}>
                      <Form.Control style={{ background: "#f5f5f5", height: "48px" }} type="text" onChange={handleChange} name="estoqueMin" />
                    </FloatingLabel>
                  </Col>
                </Row>

                <FloatingLabel className="mb-4" label="Descrição" style={{ color: "black", fontSize: "14px" }}>
                  <Form.Control as="textarea" style={{ background: "#f5f5f5", height: "100px" }} type="text" onChange={handleChange} name="descricao" />
                </FloatingLabel>

                <Row className="gap-5" style={{ marginTop: "80px" }} >
                  <Col className='d-flex justify-content-center'>
                    <Button variant="" onClick={() => console.log(produtos)} type="button" style={{ background: "BlueViolet", color: "white", width: "320px" }}>
                      Cadastrar
                    </Button>
                  </Col>

                  <Col className='d-flex justify-content-center'>
                    <Button variant="" type="button" style={{ background: "BlueViolet", color: "white", width: "320px" }}>
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
                  <Button variant="secondary" onClick={searchProduct}>Pesquisar</Button>
                </Search>
              </Row>
              <Row className='mt-5'>
                <ProductTable data={returnedProduct} />
              </Row>
            </Tab>

          </Tabs>



        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}