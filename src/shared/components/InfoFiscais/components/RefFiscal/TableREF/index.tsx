import { Row, Col } from "react-bootstrap";
import { IconBsTrash, IconEdit } from '../../../../Styles/bootstrap';
import { TableImposto } from "./styles";

import { useContext } from 'react';
import { IImpostos, IRefFromTable } from "../../../../../../interface/IImpostos";
import { ImpostosContext } from "../../../../../context/impostos/impostos";


export function RefTable() {
  const { findAll , refFromTable } = useContext(ImpostosContext) as { findAll: any , refFromTable: IRefFromTable[] }
  return (
    <TableImposto onClick={() => findAll()}>
      <thead>
        <th>opa</th>
      </thead>
      <tbody>
        {refFromTable.map(e =>
          <tr key={e.id} >
              <td>{e?.descricao}</td>
              <td>{e?.ref}</td>
          </tr>
          )}
      </tbody>
      
    </TableImposto>
  )
}