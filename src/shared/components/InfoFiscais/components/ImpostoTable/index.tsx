import { Row , Col } from "react-bootstrap";
import { IconBsTrash , IconEdit } from '../../../Styles/bootstrap'

import { StyleTable } from "./styles";
import { IImpostos } from "../../../../../interface/IImpostos";
interface ITableImposto{

  data?: Array<IImpostos>
}

export function ImpostoTable({ data }: ITableImposto) {

  return(
    <StyleTable bordered >
      <thead>
        <tr className='text-center'>
          <th> Nome </th>
          <th> Ações </th>
        </tr>
      </thead>
      <tbody>
        {data?.map(e =>
          <tr key={e.id} >
            <td> 
              <Row className='text-center'>
              <Col role="button" >
                  <IconEdit size={26} />
                </Col>

                <Col role="button">
                  <IconBsTrash size={26}/>
                </Col>
              </Row>
            </td>
          </tr>
          )}
      </tbody>
    </StyleTable>
  )
}