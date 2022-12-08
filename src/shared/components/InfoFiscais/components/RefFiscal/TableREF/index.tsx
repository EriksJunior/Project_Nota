import { Row, Col } from "react-bootstrap";
import { IconBsTrash, IconEdit } from '../../../../Styles/bootstrap';
import { TableImposto } from "./styles";

import { useContext } from 'react';
import { IImpostos } from "../../../../../../interface/IImpostos";
import { ImpostosContext } from "../../../../../context/impostos/impostos";

interface Tablefiscal {
  data?: Array<IImpostos>
}

export function RefTable({ data }: Tablefiscal) {
  const { findAll } = useContext(ImpostosContext) as { findAll: any }
  return (
    <TableImposto onClick={() => findAll()}>
      <thead>
        <tr>opa</tr>
      </thead>
      <tbody>
        {data?.map(e =>
          <tr key={e.id} >
              <td>{e?.descricao}</td>
          </tr>
        )}
      </tbody>
    </TableImposto>
  )
}