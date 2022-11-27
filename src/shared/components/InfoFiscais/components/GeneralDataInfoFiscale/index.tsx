import { FloatingLabel , Form } from 'react-bootstrap';

import { useContext } from 'react';
import { IImpostos } from '../../../../../interface/IImpostos';
import { ImpostosContext } from '../../../../context/impostos/impostos';

export function GeneralDataInfoFiscale() {
  const { impostos , handleChange } = useContext(ImpostosContext) as { impostos: IImpostos , handleChange: React.ChangeEventHandler }
 
  return (
    <div style={{ width:"70%" }}>
      <FloatingLabel className="mb-4" style={{ color: "black", fontSize: "14px" }} label="Informações Gerais" >
        <Form.Control onChange={handleChange} as="textarea" style={{ height: "300px" }} defaultValue={impostos?.informacoes_complementares || " " } name="info_gerais" />
      </FloatingLabel>
    </div>
  );
}