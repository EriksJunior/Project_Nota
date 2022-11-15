import { Table , Row , Col } from "react-bootstrap";
import { IconBsPen, IconBsTrash } from '../../../Styles/bootstrap'

import { IProducts } from "../../../../../interface/IProducts";
import { useContext } from 'react';
import { ProductContext } from '../../../../context/Product/product';
interface ITablePrd{
  HeadProd?: string
  HeadValue?: string
  HeadEstoque?: string
  data?: Array<IProducts>
}

export function ProductTable({ data }: ITablePrd) {
  const{ findById , deleteProduct } = useContext(ProductContext) as { findById: any , deleteProduct:any }

  return(
    <Table striped bordered hover variant="dark">
      <thead>
        <tr className='text-center'>
          <th> Nome </th>
          <th> Valor </th>
          <th> Estoque </th>
          <th> Ações </th>
        </tr>
      </thead>
      <tbody>
        {data?.map(e =>
          <tr key={e.id} >
            <td> {e.nome} </td>
            <td> {e.valor} </td>
            <td> {e.estoque} </td>
            <td> 
              <Row className='text-center'>
              <Col role="button" >
                  <IconBsPen onClick={() => findById(e.id)} />
                </Col>

                <Col role="button">
                  <IconBsTrash onClick={() => deleteProduct(e.id)}/>
                </Col>
              </Row>
            </td>
          </tr>
          )}
      </tbody>
    </Table>
  )
}