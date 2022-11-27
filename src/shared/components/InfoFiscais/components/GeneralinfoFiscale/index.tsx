import { FloatingLabel , Form } from 'react-bootstrap';

import { useContext } from 'react';
import { IImpostos } from '../../../../../interface/IImpostos';
import { ImpostosContext } from '../../../../context/impostos/impostos';

export function GeneralinfoFiscale() {
  const { impostos , handleChange } = useContext(ImpostosContext) as { impostos: IImpostos , handleChange: React.ChangeEventHandler }
 

  return (
    <div style={{ width:"70%" }}>
      <FloatingLabel className="mb-4" label="Informações ao Fisco">
        <Form.Control onChange={handleChange} as="textarea" style={{ height:"60px" }}  type="text" defaultValue={impostos?.informacoes_fisco || " " } name="info_fisco"/>
      </FloatingLabel>

      <FloatingLabel className="mb-4" label="informações Complementares ao Consumidor">
        <Form.Control onChange={handleChange} as="textarea" style={{ height:"200px" }} type="text" defaultValue={impostos?.informacoes_complementares || " " } name="info_complementares"/>
      </FloatingLabel>
    </div>
  );
}