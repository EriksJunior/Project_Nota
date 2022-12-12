import { useContext, useEffect } from 'react'
import { LeafContext } from '../../../../context/leaf/leaf';
import { ProdutosLeaf } from '../../../../../interface/ILeaf';
import { IProducts } from '../../../../../interface/IProducts';
import { Form, Col, Row, Accordion, Button } from 'react-bootstrap';
import { Masks } from '../../../../../utils/masks/Masks'

import { ProductsLeafTable } from './components/ProductsLeafTable';
import { GlobalContext } from '../../../../context/global/global';
import { FloatingLabelBtn, FormSelectBtn , FormControlBtn , FormBtn } from './components/styles';

export function DataLeafProducts() {
  const { produtoLeaf, handleChangeProductLeaf, addProduct, returnedProductsLeaf, handleTotalValueProducts } = useContext(LeafContext) as { produtoLeaf: ProdutosLeaf, getProductsFromSelectBox: () => void, handleChangeProductLeaf: React.ChangeEventHandler, addProduct: () => void, returnedProductsLeaf: ProdutosLeaf[], handleTotalValueProducts: () => void }

  const { produtoSelectBox } = useContext(GlobalContext) as { produtoSelectBox: IProducts[] }

  const { maskCurrency } = Masks()

  return (
    <div>
      <Accordion.Header>1 - Produtos</Accordion.Header>
      <Accordion.Body style={{ paddingBottom:"0.255rem" }}>
        <FormBtn>
          <Row xs={2}>
            <Col xs={12} sm={8} md={8} lg={7} xl={4}>
              <Form.Group as={Col}>
                <FloatingLabelBtn className="mb-3" label="Produto">
                  <FormSelectBtn value={produtoLeaf.idProduto} onChange={handleChangeProductLeaf} name="idProduto">
                    <option value="" >---selecione---</option>
                    {produtoSelectBox.map((e) =>
                      <option key={e.id} value={e.id}>{e.nome}</option>
                    )}
                  </FormSelectBtn>
                </FloatingLabelBtn>
              </Form.Group>
            </Col>

            <Col sm={4} md={4} lg={3} xl={2}>
              <Form.Group as={Col} >
                <FloatingLabelBtn className="mb-3" label="Cod Ref">
                  <FormControlBtn disabled type="text" onChange={handleChangeProductLeaf} value={produtoLeaf.codigo || ""} name="codigo" />
                </FloatingLabelBtn>
              </Form.Group>
            </Col>

            <Col sm={3} md={3} lg={2} xl={1}>
              <Form.Group as={Col}>
                <FloatingLabelBtn  className="mb-3" label="Qnt">
                  <FormControlBtn type="number" onKeyUp={handleTotalValueProducts} onChange={handleChangeProductLeaf} value={produtoLeaf.quantidade || ""} name="quantidade" />
                </FloatingLabelBtn>
              </Form.Group>
            </Col>

            <Col xs={12} sm={9} md={9} lg={4} xl={5}>
              <Form.Group as={Col} >
                <FloatingLabelBtn className="mb-3" label="Dados adicionais">
                  <FormControlBtn type="text" onChange={handleChangeProductLeaf} value={produtoLeaf.informacoes_adicionais || ""} name="informacoes_adicionais" />
                </FloatingLabelBtn>
              </Form.Group>
            </Col>

            <Col xs={4} sm={4} md={4} lg={3} xl={2}>
              <Form.Group as={Col} >
                <FloatingLabelBtn className="mb-3" label="Vl. Unitário">
                  <FormControlBtn type="text" onKeyUp={handleTotalValueProducts} onChange={handleChangeProductLeaf} value={produtoLeaf.subtotal || ""} onKeyDown={maskCurrency} name="subtotal" />
                </FloatingLabelBtn>
              </Form.Group>
            </Col>

            <Col xs={4} sm={4} md={4} lg={2} xl={1}>
              <Form.Group as={Col} >
                <FloatingLabelBtn  className="mb-3" label="Desc">
                  <FormControlBtn type="text" onKeyUp={handleTotalValueProducts} onChange={handleChangeProductLeaf} value={produtoLeaf.desconto || ""} onKeyDown={maskCurrency} name="desconto" />
                </FloatingLabelBtn>
              </Form.Group>
            </Col>

            <Col xs={4} sm={4} md={4} lg={3} xl={2}>
              <Form.Group as={Col}>
                <FloatingLabelBtn className="mb-3" label="Vl. Total">
                  <FormControlBtn type="text" disabled onChange={handleChangeProductLeaf} value={produtoLeaf.total || ""} name="total" />
                </FloatingLabelBtn>
              </Form.Group>
            </Col>

            <Col xs={12} sm={6} md={6} lg={6} xl={4}>
              <Form.Group as={Col} >
                <FloatingLabelBtn className="mb-3" label="Origem">
                  <FormSelectBtn onChange={handleChangeProductLeaf} value={produtoLeaf.origem || "0"} name="origem">
                    <option value="0">0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8</option>
                    <option value="1">1 - Estrangeira - Importação direta, exceto a indicada no código 6</option>
                    <option value="2">2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7</option>
                    <option value="3">3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%</option>
                    <option value="4">4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes</option>
                    <option value="5">5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%</option>
                    <option value="6">6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural</option>
                    <option value="7">7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural</option>
                    <option value="8">8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%</option>
                  </FormSelectBtn>
                </FloatingLabelBtn>
              </Form.Group>
            </Col>

            <Col xs={6} sm={3} md={3} lg={3} xl={1}>
              <Form.Group as={Col}>
                <FloatingLabelBtn className="mb-3" label="Und">
                  <FormControlBtn type="text" onChange={handleChangeProductLeaf} value={produtoLeaf.unidade || ""} name="unidade" />
                </FloatingLabelBtn>
              </Form.Group>
            </Col>

            <Col xs={6} sm={3} md={3} lg={3} xl={2}>
              <Form.Group as={Col}>
                <FloatingLabelBtn className="mb-3" label="Peso">
                  <FormControlBtn type="text" onChange={handleChangeProductLeaf} value={produtoLeaf.peso || ""} name="peso" />
                </FloatingLabelBtn>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={12} lg={12} xl={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="sm" type="button" style={{ background: "BlueViolet", color: "whitesmoke", fontWeight: 'bold' }} onClick={addProduct}>
                Adicionar
              </Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <ProductsLeafTable data={returnedProductsLeaf} />
            </Col>
          </Row>
        </FormBtn>
      </Accordion.Body>
    </div>
  )
}