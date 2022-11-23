import { useContext } from "react"
import { LeafContext } from "../../../../context/leaf/leaf";

import { DateTime } from "luxon"

import { Row, Col } from 'react-bootstrap';
import { IconBsTrash, IconEdit } from '../../../Styles/bootstrap'
import { StyleTable } from './styles';

import { IResultSearchLeaf } from '../../../../../interface/ILeaf';
interface ITable {
  data?: Array<IResultSearchLeaf>
}

export function LeafTable({ data }: ITable) {
  const { findLeafById, deleteLeafAndProducts } = useContext(LeafContext) as { findLeafById: (id: string) => void, deleteLeafAndProducts: (id: string) => void }

  return (
    <StyleTable bordered>
      <thead>
        <tr>
          <th>Nome</th>
          <th>CPF/CNPJ</th>
          <th>Status</th>
          <th>Data</th>
          <th className='text-center'>Ações</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(e =>
          <tr key={e.id}>
            <td>{e.nomeCliente}</td>
            <td>{e.cpfCnpj}</td>
            <td>{e.status}</td>
            <td>{DateTime.fromISO(e.data)
              .setLocale('fr')
              .toFormat('dd/MM/yyyy')}</td>
            <td className='text-center'>
              <Row>
                <Col role="button" className='p-0'>
                  <IconEdit size={20} onClick={() => findLeafById(e.id)} />
                </Col>

                <Col role="button" className='p-0'>
                  <IconBsTrash size={20} onClick={() => deleteLeafAndProducts(e.id)}/>
                </Col>
              </Row>
            </td>
          </tr>
        )}
      </tbody>
    </StyleTable>
  )
}