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
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Sub Total</th>
          <th>Total</th>
          <th className='text-center' style={{width: '100px'}}>Ações</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(e =>
          <tr key={e.idProduto}>
            <td>Nome teste</td>
            <td>{e.subtotal}</td>
            <td>{e.total}</td>
            <td className='text-center'>
              <Row>
                <Col role="button">
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