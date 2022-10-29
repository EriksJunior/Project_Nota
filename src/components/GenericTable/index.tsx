import { Table } from 'react-bootstrap';
import { ICliente } from '../../interface/ICliente';

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
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(e =>
          <tr key={e.id}>
            <td>{e?.nome}</td>
            <td>{e.cpfCnpj}</td>
            <td>{e.dataNascimento}</td>
            <td>X</td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}