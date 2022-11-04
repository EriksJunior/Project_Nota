import { Table } from 'react-bootstrap';
import { ICliente } from '../../../../../interface/ICliente';
import { Row, Col } from 'react-bootstrap';

import { IconBsPen, IconBsTrash } from '../../../Styles/bootstrap'
import { UseCliente } from '../../../../hooks/useCliente'
interface ITable {
  textHeader1?: string
  textHeader2?: string
  textHeader3?: string
  data?: Array<ICliente>
}

export function ClienteTable({ data }: ITable) {
  const { findById } = UseCliente()

  return (
    <Table striped bordered hover variant="dark">
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
            <td className='text-center' >
              <Row>
                <Col role="button" className='p-0'>
                  <IconBsPen size={20} onClick={() => findById(e.id)} />
                </Col>

                <Col role="button" className='p-0'>
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