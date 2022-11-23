import { ICliente } from '../../../../../interface/ICliente';
import { Row, Col } from 'react-bootstrap';

import { IconBsTrash, IconEdit } from '../../../Styles/bootstrap'
import { useContext } from 'react';
import { ClientContext } from '../../../../context/client/client'
import { StyleTable } from './styles';
interface ITable {
  data?: Array<ICliente>
}

export function ClienteTable({ data }: ITable) {
  const { findById, deleteClient } = useContext(ClientContext) as { findById: any, deleteClient: any }

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
                  <IconEdit size={20} onClick={() => findById(e.id)} />
                </Col>

                <Col role="button" className='p-0'>
                  <IconBsTrash size={20} onClick={() => deleteClient(e.id)}/>
                </Col>
              </Row>
            </td>
          </tr>
        )}
      </tbody>
    </StyleTable>
  )
}