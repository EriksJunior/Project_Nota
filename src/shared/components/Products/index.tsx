import { useCallback, useState } from 'react';
import { Form, Offcanvas, Button, FloatingLabel, Tab, Tabs, Col, Row } from 'react-bootstrap';

import { ButtonBt, IconBiBox } from '../Styles/bootstrap';
import { ContentIcon, Text } from '../Styles/general';

import { Search } from '../Search/index';
import ProductServices from '../../../services/ProductService';
import { IProducts } from '../../../interface/IProducts';



export function ProductsModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [produtos, setProdutos] = useState<IProducts>();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setProdutos({ ...produtos, [e.target.name]: e.target.value })
  }, [produtos]);

  async function saveProducts() {
    const result = await ProductServices.save(produtos as IProducts)
    console.log(result)
  }

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
          <Offcanvas.Title style={{ background: "#1C1C1C", color: "LightGrey", fontWeight: "bold", fontSize: "36px", justifyContent: "center", paddingLeft: "50px" }}  >Cadastro de Produto</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ background: "#1C1C1C", color: "LightGrey", fontWeight: "bolder" }}>
          <Tabs
            defaultActiveKey="Cadastro"
            id="clientTabs"
            className="mb-3"
            style={{ fontSize:"20px" , gap:"20px" , background:"#363636" , borderRadius:"10px 20px 0px 2px" }}
          >
            <Tab eventKey="Cadastro" title="Cadastro">
              <Form >
                <FloatingLabel className="mb-4" label="Nome Do Produto">
                  <Form.Control style={{ background: "#1C1C1C" }} type="text" onChange={handleChange} name="nome"/>
                </FloatingLabel >
                <Row className="mb-3 ">

                  <FloatingLabel as={Col} className="mb-4" label="Valor">
                    <Form.Control style={{ background: "#1C1C1C" }} type="text" onChange={handleChange} name="valor"/>
                  </FloatingLabel>

                  <FloatingLabel as={Col} className="mb-4" label="Valor de Venda">
                    <Form.Control style={{ background: "#1C1C1C" }} type="text" onChange={handleChange} name="valorVenda"/>
                  </FloatingLabel>

                  <FloatingLabel as={Col} className="mb-4" label="Unidade">
                  <Form.Control style={{ background: "#1C1C1C" }} type="text" onChange={handleChange} name="unidade"/>
                </FloatingLabel>

                </Row>

                <FloatingLabel className="mb-4" label="Descrição">
                  <Form.Control as="textarea" style={{ background: "#1C1C1C" }} type="text" onChange={handleChange} name="descricao"/>
                </FloatingLabel>

                <FloatingLabel className="mb-4" label="Código de Barras">
                  <Form.Control style={{ background: "#1C1C1C"}} type="text" onChange={handleChange} name="codBarras"/>
                </FloatingLabel>

                <FloatingLabel className="mb-4" label="Código de Referência">
                  <Form.Control style={{ background: "#1C1C1C"}} type="text" onChange={handleChange} name="codReferencia"/>
                </FloatingLabel>

                <Row className="mb-3">
                  <FloatingLabel as={Col} className="mb-4" label="Estoque">
                    <Form.Control style={{ background: "#1C1C1C"}} type="text" onChange={handleChange} name="estoque"/>
                  </FloatingLabel>

                  <FloatingLabel as={Col} className="mb-4" label="Estoque Mínimo">
                    <Form.Control style={{ background: "#1C1C1C"}} type="text" onChange={handleChange} name="estoqueMin"/>
                  </FloatingLabel>
                </Row>


                <div className="d-grid gap-2">
                  <Button variant="" type="button" onClick={saveProducts} size='lg' style={{ background: "BlueViolet", color: "whitesmoke" }}>
                    Cadastrar
                  </Button>
                </div>
              </Form>
            </Tab>
            <Tab eventKey="Pesquisar" title="Pesquisar">
              <h1>campo de pesquisa</h1>
            </Tab>

          </Tabs>



        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}