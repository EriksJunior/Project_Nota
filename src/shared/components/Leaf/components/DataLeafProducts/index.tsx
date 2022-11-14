import { useContext, useEffect } from 'react'
import { LeafContext } from '../../../../context/leaf/leaf';
import { ProdutosLeaf } from '../../../../../interface/ILeaf';
import { IProducts } from '../../../../../interface/IProducts';
import { Form, Col, Row, Accordion, FloatingLabel, Button } from 'react-bootstrap';
import { Masks } from '../../../../../utils/masks/Masks'

export function DataLeafProducts() {
  const { produtoLeaf, getProductsFromSelectBox, produtoSelectBox, handleChangeProductLeaf } = useContext(LeafContext) as { produtoLeaf: ProdutosLeaf, getProductsFromSelectBox: () => void, produtoSelectBox: IProducts[], handleChangeProductLeaf: React.ChangeEventHandler }

  const { maskCurrency } = Masks()

  useEffect(() => {
    getProductsFromSelectBox()
  }, [])

  return (
    <div>
      <Accordion.Header>1 - Produtos</Accordion.Header>
      <Accordion.Body>
        <Form>
          <Row xs={2}>
            <Col xs={12} sm={8} md={8} lg={7} xl={4}>
              <Form.Group as={Col}>
                <FloatingLabel className="mb-4" label="Produtos">
                  <Form.Select style={{ color: "Grey", fontWeight: "bolder" }} onChange={handleChangeProductLeaf} name="idProduto">
                    <option value="">Selecione...</option>
                    {produtoSelectBox.map((e) =>
                      <option key={e.id} value={e.id}>{e.nome}</option>
                    )}
                  </Form.Select>
                </FloatingLabel>
              </Form.Group>
            </Col>

            <Col sm={4} md={4} lg={3} xl={2}>
              <Form.Group as={Col} >
                <FloatingLabel className="mb-4" label="Cod Ref">
                  <Form.Control disabled type="text" onChange={handleChangeProductLeaf} value={produtoLeaf.codigo || ""} name="codigo" />
                </FloatingLabel>
              </Form.Group>
            </Col>

            <Col sm={3} md={3} lg={2} xl={1}>
              <Form.Group as={Col}>
                <FloatingLabel className="mb-4" label="Qnt">
                  <Form.Control type="number" onChange={handleChangeProductLeaf} value={produtoLeaf.quantidade || ""} name="quantidade" />
                </FloatingLabel>
              </Form.Group>
            </Col>

            <Col xs={12} sm={9} md={9} lg={4} xl={5}>
              <Form.Group as={Col} >
                <FloatingLabel className="mb-4" label="Dados adicionais">
                  <Form.Control type="text" onChange={handleChangeProductLeaf} value={produtoLeaf.informacoes_adicionais || ""} name="informacoes_adicionais" />
                </FloatingLabel>
              </Form.Group>
            </Col>

            <Col xs={4} sm={4} md={4} lg={3} xl={2}>
              <Form.Group as={Col} >
                <FloatingLabel className="mb-4" label="Vl. Unitário">
                  <Form.Control type="text" onChange={handleChangeProductLeaf} value={produtoLeaf.subtotal || ""} onKeyDown={maskCurrency} name="subtotal" />
                </FloatingLabel>
              </Form.Group>
            </Col>

            <Col xs={4} sm={4} md={4} lg={2} xl={1}>
              <Form.Group as={Col} >
                <FloatingLabel className="mb-4" label="Desc">
                  <Form.Control type="text" onChange={handleChangeProductLeaf} value={produtoLeaf.desconto || ""} onKeyDown={maskCurrency} name="desconto" />
                </FloatingLabel>
              </Form.Group>
            </Col>

            <Col xs={4} sm={4} md={4} lg={3} xl={2}>
              <Form.Group as={Col}>
                <FloatingLabel className="mb-4" label="Vl. Total">
                  <Form.Control type="text" onChange={handleChangeProductLeaf} value={produtoLeaf.total || ""} onKeyDown={maskCurrency} name="total" />
                </FloatingLabel>
              </Form.Group>
            </Col>

            <Col xs={12} sm={6} md={6} lg={6} xl={4}>
              <Form.Group as={Col} >
                <FloatingLabel className="mb-4" label="Origen">
                  <Form.Select style={{ color: "Grey", fontWeight: "bolder" }} onChange={handleChangeProductLeaf} value={produtoLeaf.origem || "0"} name="origem">
                    <option value="0">0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8</option>
                    <option value="1">1 - Estrangeira - Importação direta, exceto a indicada no código 6</option>
                    <option value="2">2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7</option>
                    <option value="3">3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%</option>
                    <option value="4">4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes</option>
                    <option value="5">5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%</option>
                    <option value="6">6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural</option>
                    <option value="7">7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural</option>
                    <option value="8">8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%</option>
                  </Form.Select>
                </FloatingLabel>
              </Form.Group>
            </Col>

            <Col xs={6} sm={3} md={3} lg={3} xl={1}>
              <Form.Group as={Col}>
                <FloatingLabel className="mb-4" label="Und">
                  <Form.Control type="text" onChange={handleChangeProductLeaf} value={produtoLeaf.unidade || ""} name="unidade" />
                </FloatingLabel>
              </Form.Group>
            </Col>

            <Col xs={6} sm={3} md={3} lg={3} xl={2}>
              <Form.Group as={Col}>
                <FloatingLabel className="mb-4" label="Peso">
                  <Form.Control type="text" onChange={handleChangeProductLeaf} value={produtoLeaf.peso || ""} name="peso" />
                </FloatingLabel>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={12} lg={12} xl={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="" type="button" style={{ background: "BlueViolet", color: "whitesmoke", fontWeight: 'bold' }} onClick={() => console.log(produtoLeaf)}>
                Adicionar
              </Button>
            </Col>
          </Row>
        </Form>
      </Accordion.Body>
    </div>
  )
}