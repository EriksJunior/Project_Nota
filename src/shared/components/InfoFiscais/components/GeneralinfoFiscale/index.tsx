import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export function GeneralinfoFiscale() {
  return (
    <>

      <FloatingLabel className="mb-4" label="Informações ao Fisco">
        <Form.Control as="textarea"  type="text"/>
      </FloatingLabel>

      <FloatingLabel className="mb-4" label="informações Complementares ao Consumidor">
        <Form.Control as="textarea" type="text"/>
      </FloatingLabel>

    </>
  );
}