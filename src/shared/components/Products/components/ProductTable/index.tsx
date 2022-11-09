import { Table } from "react-bootstrap";

import { IProducts } from "../../../../../interface/IProducts";

interface ITablePrd{
  HeadProd?: string
  HeadValue?: string
  HeadEstoque?: string
  data?: Array<IProducts>
}

export function ProductTable({ data }: ITablePrd) {

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
            <td> botão das açoes</td>
          </tr>
          )}
      </tbody>
    </Table>
  )
}