import { useContext } from 'react';

import { Form, Button, Tab, Tabs, Col, Row, FormControl } from 'react-bootstrap';
import { Search } from '../Search/index';
import { ProductTable } from './components/ProductTable';

import { Masks } from "../../../utils/masks/Masks"

import { ButtonBt, IconBiBox } from '../Styles/bootstrap';
import { ContentIcon, Text } from '../Styles/general';
import { OffcanvasBt, OffcanvasHeaderBt, OffcanvasTitleBt, OffcanvasBodyBt, FloatingLabelBt, FormControlBt, ButtonProduct } from "./styles"

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
                <FormControlBt onChange={handleChange} hidden value={produtos?.id || ""} name="id" type="text" />

                <Row>
                  <Col>
                    <FloatingLabelBt className="mb-3" label="Nome Do Produto">
                      <FormControlBt type="text" onChange={handleChange} name="nome" value={produtos?.nome || ""} />
                    </FloatingLabelBt >
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <FloatingLabelBt label="Valor">
                      <FormControlBt type="text" onChange={handleChange} onKeyDown={maskCurrency} name="valor" value={produtos?.valor || ""} />
                    </FloatingLabelBt>
                  </Col>
                  <Col>
                    <FloatingLabelBt label="Valor de Venda">
                      <FormControlBt type="text" onChange={handleChange} onKeyDown={maskCurrency} name="valorVenda" value={produtos?.valorVenda || ""} />
                    </FloatingLabelBt>
                  </Col>
                  <Col>
                    <FloatingLabelBt label="Unidade">
                      <FormControlBt type="text" onChange={handleChange} name="unidade" value={produtos?.unidade || ""} />
                    </FloatingLabelBt>
                  </Col>
                </Row>

                <FloatingLabelBt className="mb-3" label="Código de Barras">
                  <FormControlBt type="text" onChange={handleChange} name="codBarras" value={produtos?.codBarras || ""} />
                </FloatingLabelBt>

                <FloatingLabelBt className="mb-3" label="Código de Referência">
                  <FormControlBt type="text" onChange={handleChange} name="codReferencia" value={produtos?.codReferencia || ""} />
                </FloatingLabelBt>

                <Row className="mb-3">
                  <Col>
                    <FloatingLabelBt label="Estoque">
                      <FormControlBt type="text" onChange={handleChange} name="estoque" value={produtos?.estoque || ""} />
                    </FloatingLabelBt>
                  </Col>
                  <Col>
                    <FloatingLabelBt label="Estoque Mínimo">
                      <FormControlBt type="text" onChange={handleChange} name="estoqueMin" value={produtos?.estoqueMin || ""} />
                    </FloatingLabelBt>
                  </Col>
                </Row>

                <FloatingLabelBt className="mb-4" label="Descrição">
                  <FormControl as={"textarea"} style={{background: "#f5f5f5", height: "70px"}} type="text" onChange={handleChange} name="descricao" value={produtos?.descricao || ""} />
                </FloatingLabelBt>

                <Row className="gap-5" style={{ marginTop: "40px" }} >
                  <Col className='d-flex justify-content-center'>
                    <ButtonProduct variant="" onClick={handleSaveOrUpdate} type="button">
                      Cadastrar
                    </ButtonProduct>
                  </Col>

                  <Col className='d-flex justify-content-center'>
                    <ButtonProduct variant="" onClick={clearInputs} type="button">
                      Limpar
                    </ButtonProduct>
                  </Col>
                </Row>

              </Form>
            </Tab>
            <Tab eventKey="Pesquisar" title="Pesquisar">
              <Row>
                <Search>
                  <FormControlBt className="me-auto" placeholder="Faça sua pesquisa" onChange={(e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => setSearch({ ...search, text: e.target.value })} />
                  <Button style={{ background:"black"}} onClick={searchProduct}>Pesquisar</Button>
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