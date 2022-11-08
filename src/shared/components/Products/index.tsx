import { useCallback, useState } from 'react';
import { Form, Offcanvas, Button, FloatingLabel, Tab, Tabs, Col, Row } from 'react-bootstrap';

import { ButtonBt, IconBiBox } from '../Styles/bootstrap';
import { ContentIcon, Text } from '../Styles/general';

import { Search } from '../Search/index';

import { UseProducts } from '../../hooks/useProducts';



export function ProductsModal() {
  const { produtos, search, setSearch, searchProduct, returnedProduct, handleShow, handleClose, handleChange , handleSaveOrUpdate , show } = UseProducts();

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
          <Offcanvas.Title style={{  color: "LightGrey", fontWeight: "bold", fontSize: "36px", justifyContent: "center", paddingLeft: "50px" }}  >Cadastro de Produto</Offcanvas.Title>
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
                <FloatingLabel className="mb-4" label="Nome Do Produto" style={{color: "black"}}>
                  <Form.Control style={{ background: "#f5f5f5" }} type="text" onChange={handleChange} name="nome" />
                </FloatingLabel >
                <Row className="mb-3 ">
                  <Col>
                    <FloatingLabel as={Col} className="mb-4" label="Valor" style={{color: "black"}}>
                      <Form.Control style={{ background: "#f5f5f5" }} type="text" onChange={handleChange} name="valor" />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel as={Col} className="mb-4" label="Valor de Venda" style={{color: "black"}}>
                      <Form.Control style={{ background: "#f5f5f5" }} type="text" onChange={handleChange} name="valorVenda" />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel as={Col} className="mb-4" label="Unidade" style={{color: "black"}}>
                      <Form.Control style={{ background: "#f5f5f5" }} type="text" onChange={handleChange} name="unidade" />
                    </FloatingLabel>
                  </Col>
                </Row>

                <FloatingLabel className="mb-4" label="Descrição" style={{color: "black"}}>
                  <Form.Control as="textarea" style={{ background: "#f5f5f5" }} type="text" onChange={handleChange} name="descricao" />
                </FloatingLabel>

                <FloatingLabel className="mb-4" label="Código de Barras" style={{color: "black"}}>
                  <Form.Control style={{ background: "#f5f5f5" }} type="text" onChange={handleChange} name="codBarras" />
                </FloatingLabel>

                <FloatingLabel className="mb-4" label="Código de Referência" style={{color: "black"}}>
                  <Form.Control style={{ background: "#f5f5f5" }} type="text" onChange={handleChange} name="codReferencia" />
                </FloatingLabel>

                <Row className="mb-3">
                  <Col>
                    <FloatingLabel as={Col} className="mb-4" label="Estoque" style={{color: "black"}}>
                      <Form.Control style={{ background: "#f5f5f5" , color: "black" }} type="text" onChange={handleChange} name="estoque" />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel as={Col} className="mb-4" label="Estoque Mínimo" style={{color: "black"}}>
                      <Form.Control style={{ background: "#f5f5f5" }} type="text" onChange={handleChange} name="estoqueMin" />
                    </FloatingLabel>
                  </Col>
                </Row>

                <Row className=" gap-5">
                  <Col className='d-flex justify-content-center'>
                    <Button variant="" onClick={handleSaveOrUpdate} type="button" size='lg' style={{ background: "BlueViolet", color: "white", width: "300px" }}>
                      Cadastrar
                    </Button>
                  </Col>

                  <Col className='d-flex justify-content-center'>
                    <Button variant="" type="button" size='lg' style={{ background: "BlueViolet", color: "white", width: "300px" }}>
                      Limpar
                    </Button>
                  </Col>
                </Row>

              </Form>
            </Tab>
            <Tab eventKey="Pesquisar" title="Pesquisar">
            <Search>
                  <Form.Control className="me-auto" placeholder="Faça sua pesquisa" onChange={(e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => setSearch({ ...search, text: e.target.value })} />
                  <Button variant="secondary" onClick={searchProduct}>Pesquisar</Button>
                </Search>
            </Tab>

          </Tabs>



        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}