import { FloatingLabel , Form } from 'react-bootstrap';

export function GeneralinfoFiscale() {
  return (
    <>

      <FloatingLabel className="mb-4" label="Informações ao Fisco">
        <Form.Control as="textarea" style={{ height:"60px" }}  type="text"/>
      </FloatingLabel>

      <FloatingLabel className="mb-4" label="informações Complementares ao Consumidor">
        <Form.Control as="textarea" style={{ height:"200px" }} type="text"/>
      </FloatingLabel>

    </>
  );
}