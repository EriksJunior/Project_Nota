import { useContext } from 'react';

import { Form, Offcanvas, Button, FloatingLabel, Tab, Tabs, Col, Row } from 'react-bootstrap';
import { Search } from '../Search/index';
import { ProductTable } from './components/ProductTable';

import { Masks } from "../../../utils/masks/Masks"

import { ButtonBt, IconBiBox } from '../Styles/bootstrap';
import { ContentIcon, Text } from '../Styles/general';
import { OffcanvasBt, OffcanvasHeaderBt, OffcanvasTitleBt, OffcanvasBodyBt } from "./styles"

import { ProductContext } from '../../context/Product/product';
import { IProducts, ISearch } from '../../../interface/IProducts';



export function ProductsModal() {
  const { produtos, alterTab , setAlterTab , clearInputs , search , setSearch , searchProduct, returnedProduct, handleShow,
     handleClose, handleChange, handleSaveOrUpdate, show } = useContext(ProductContext) as {
      produtos: IProducts , alterTab: string , setAlterTab: ( value: string | null ) => void , clearInputs: () => void , search: ISearch , setSearch: any , searchProduct: () => void , returnedProduct: IProducts[],
      handleShow: () => void , handleClose: () => void , handleChange: React.ChangeEventHandler , 
      handleSaveOrUpdate: () => void , show: Boolean }

  

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

      <OffcanvasBt show={show} onHide={handleClose}>
        <OffcanvasHeaderBt closeButton>
          <OffcanvasTitleBt >Cadastro de Produto</OffcanvasTitleBt>
        </OffcanvasHeaderBt>
        <OffcanvasBodyBt>
          <Tabs
            activeKey={alterTab}
            id="clientTabs"
            onSelect={(tabSelected) => setAlterTab(tabSelected)}
            className="mb-3"
            style={{ fontSize: "20px", background: "#363636", borderRadius: "10px 20px 0px 2px" }}
          >
            <Tab eventKey="Cadastro" title="Cadastro">
              <Form >
                <Form.Control onChange={handleChange} hidden value={produtos?.id || ""} name="id" type="text" />

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
                      <Form.Control style={{ background: "#f5f5f5", height: "48px" }} type="text" onChange={handleChange} onKeyDown={maskCurrency} name="valor" value={produtos?.valor || ""} />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel as={Col} label="Valor de Venda" style={{ color: "black", fontSize: "14px" }}>
                      <Form.Control style={{ background: "#f5f5f5", height: "48px" }} type="text" onChange={handleChange} onKeyDown={maskCurrency} name="valorVenda" value={produtos?.valorVenda || ""} />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel as={Col} label="Unidade" style={{ color: "black", fontSize: "14px" }}>
                      <Form.Control style={{ background: "#f5f5f5", height: "48px" }} type="text" onChange={handleChange} name="unidade" value={produtos?.unidade || ""} />
                    </FloatingLabel>
                  </Col>
                </Row>

                <FloatingLabel className="mb-4" label="Código de Barras" style={{ color: "black", fontSize: "14px" }}>
                  <Form.Control style={{ background: "#f5f5f5", height: "48px" }} type="text" onChange={handleChange} name="codBarras" value={produtos?.codBarras || ""} />
                </FloatingLabel>

                <FloatingLabel className="mb-4" label="Código de Referência" style={{ color: "black", fontSize: "14px" }}>
                  <Form.Control style={{ background: "#f5f5f5", height: "48px" }} type="text" onChange={handleChange} name="codReferencia" value={produtos?.codReferencia || ""} />
                </FloatingLabel>

                <Row className="mb-4">
                  <Col>
                    <FloatingLabel as={Col} label="Estoque" style={{ color: "black", fontSize: "14px" }}>
                      <Form.Control style={{ background: "#f5f5f5", height: "48px" }} type="text" onChange={handleChange} name="estoque" value={produtos?.estoque || ""} />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel as={Col} label="Estoque Mínimo" style={{ color: "black", fontSize: "14px" }}>
                      <Form.Control style={{ background: "#f5f5f5", height: "48px" }} type="text" onChange={handleChange} name="estoqueMin" value={produtos?.estoqueMin || ""} />
                    </FloatingLabel>
                  </Col>
                </Row>

                <FloatingLabel className="mb-4" label="Descrição" style={{ color: "black", fontSize: "14px" }}>
                  <Form.Control as="textarea" style={{ background: "#f5f5f5", height: "100px" }} type="text" onChange={handleChange} name="descricao" value={produtos?.descricao || ""} />
                </FloatingLabel>

                <Row className="gap-5" style={{ marginTop: "80px" }} >
                  <Col className='d-flex justify-content-center'>
                    <Button variant="" onClick={handleSaveOrUpdate} type="button" style={{ background: "BlueViolet", color: "white", width: "320px" }}>
                      Cadastrar
                    </Button>
                  </Col>

                  <Col className='d-flex justify-content-center'>
                    <Button variant="" onClick={clearInputs} type="button" style={{ background: "BlueViolet", color: "white", width: "320px" }}>
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



        </OffcanvasBodyBt>
      </OffcanvasBt>
    </>
  );
}