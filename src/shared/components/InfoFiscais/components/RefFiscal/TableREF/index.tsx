import { Row, Col } from "react-bootstrap";
import { RefIconEdit } from '../../../../Styles/bootstrap';
import { TableImposto , ContainerRef , TexRefBtn } from "./styles";

import { useContext } from 'react';
import { IImpostos, IRefFromTable } from "../../../../../../interface/IImpostos";
import { ImpostosContext } from "../../../../../context/impostos/impostos";


export function RefTable() {
  const { findAll , findById , refFromTable } = useContext(ImpostosContext) as { findAll: any , findById: any, refFromTable: IRefFromTable[] }
  return (
    <ContainerRef onClick={() => findAll()}>
      <TableImposto >
        <tbody>
          {refFromTable.map(e =>
            <tr key={e.id} >
              <td>{e?.ref}</td>
              <td>{e?.descricao}</td>
              <td >
                <Row >
                  <Col role="button" style={{ display:"flex" , flexDirection: "column" ,alignItems:"center" }}>
                    <RefIconEdit size={20} onClick={() => findById(e.id)} />
                    <TexRefBtn> Editar </TexRefBtn>
                  </Col>
                </Row>
              </td>
            </tr>
          )}
        </tbody>
      </TableImposto>
    </ContainerRef>
  )
}