import { Table } from 'react-bootstrap';
import { ICliente } from '../../interface/ICliente';
import {Row, Col} from 'react-bootstrap';

import { IconBsPen, IconBsTrash } from '../../components/Styles/bootstrap'

interface ITable {
  textHeader1?: string
  textHeader2?: string
  textHeader3?: string
  data?: Array<ICliente>
}

export function GenericTable({ textHeader1, textHeader2, textHeader3, data }: ITable) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>{textHeader1}</th>
          <th>{textHeader2}</th>
          <th>{textHeader3}</th>
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
                  <IconBsPen size={20}/>
                </Col>

                <Col role="button" className='p-0'>
                  <IconBsTrash size={20}/>
                </Col>
              </Row>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}