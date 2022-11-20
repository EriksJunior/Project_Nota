import { PedidoLeaf, ProdutosLeaf } from '../../../../../interface/ILeaf';
import { ICliente } from '../../../../../interface/ICliente';
import { Row, Col } from 'react-bootstrap';

import { IconBsTrash, IconEdit } from '../../../Styles/bootstrap'
import { StyleTable } from './styles';

interface ITable {
  data?: Array<ICliente & PedidoLeaf & ProdutosLeaf>
}

export function LeafTable({ data }: ITable) {

  return (
    <StyleTable bordered>
      <thead>
        <tr>
          <th>Nome</th>
          <th>CPF/CNPJ</th>
          <th>Dt Nascimento</th>
          <th className='text-center'>Ações</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(e =>
          <tr key={e.id}>
            <td>{e?.nome}</td>
            <td>{e.cpfCnpj}</td>
            <td>{e.dataNascimento}</td>
            <td className='text-center'>
              <Row>
                <Col role="button" className='p-0'>
                  <IconEdit size={20}  />
                </Col>

                <Col role="button" className='p-0'>
                  <IconBsTrash size={20} />
                </Col>
              </Row>
            </td>
          </tr>
        )}
      </tbody>
    </StyleTable>
  )
}