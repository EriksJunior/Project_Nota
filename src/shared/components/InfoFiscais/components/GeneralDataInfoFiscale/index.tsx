import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export function GeneralDataInfoFiscale() {
  return (
    <>
      <FloatingLabel className="mb-4" style={{ color: "black", fontSize: "14px" }} label="Informações Gerais">
        <Form.Control as="textarea" style={{ height: "300px" }} type="text" />
      </FloatingLabel>
    </>
  );
}