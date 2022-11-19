import { Table } from 'react-bootstrap';
import { ProdutosLeaf } from '../../../../../../../interface/ILeaf';
import { Row, Col } from 'react-bootstrap';

import { useContext } from 'react';
import { LeafContext } from '../../../../../../context/leaf/leaf';

import { IconBsTrash } from '../../../../../Styles/bootstrap'

interface ITable {
  data?: Array<ProdutosLeaf>
}

export function ProductsLeafTable({ data }: ITable) {
  const { deleteProduct } = useContext(LeafContext) as { deleteProduct: (value: string) => void }

  return (
    <Table striped bordered hover variant="dark" className={'mt-3'}>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Sub Total</th>
          <th>Total</th>
          <th className='text-center' style={{ width: '120px' }}>Desconto</th>
          <th className='text-center' style={{ width: '100px' }}>Ações</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(e =>
          <tr key={e.id}>
            <td>{e.nome}</td>
            <td>{parseFloat(e.subtotal).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</td>
            <td>{parseFloat(e.total).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</td>
            <td>{parseFloat(e.desconto).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</td>
            <td className='text-center'>
              <Row>
                <Col role="button" onClick={() => deleteProduct(e.id)}>
                  <IconBsTrash size={20} />
                </Col>
              </Row>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}