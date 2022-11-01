import { FloatingLabel, Col, Row, InputGroup, Button, Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';



export function IcmsInfo() {
    return (
        <>
            <Card className="text-center">
                <Card.Body>
                    <Form>
                        <Form.Group as={Col} controlId="formGridState">
                            <FloatingLabel className="mb-4" label="Tipo de Tributação">
                                <Form.Select style={{ color: "Grey", fontWeight: "bolder" }} name="id">
                                    <option value="">0 - Simples Nacional</option>
                                    <option value="">1 - Simples Nacional</option>
                                    <option value="">2 - Simples Nacional</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <FloatingLabel className="mb-4" label="Cenário">
                                <Form.Select style={{ color: "Grey", fontWeight: "bolder" }} name="id">
                                    <option value="">0 - Padrão</option>
                                    <option value="">1 - Padrão</option>
                                    <option value="">2 - Padrão</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <FloatingLabel className="mb-4" label="Tipo de Pessoa">
                                <Form.Select style={{ color: "Grey", fontWeight: "bolder" }} name="id">
                                    <option value="">0 - pessoa Física</option>
                                    <option value="">1 - Pessoa Juridíca</option>
                                    <option value="">2 - Outros</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <FloatingLabel className="mb-4" controlId="" label="Código CFOP">
                            <Form.Control type="text" />
                        </FloatingLabel>

                        <InputGroup className="mb-3">
                            <InputGroup.Text> Situação Tributária </InputGroup.Text>
                            <FloatingLabel controlId="" label="Definição Imposto">
                            <Form.Select style={{ color: "Grey", fontWeight: "bolder" }} name="id">
                                    <option value="">102 - Tributada sem permissão de crédito</option>
                                    <option value="">102 - Tributada sem permissão de crédito</option>
                                    <option value="">102 - Tributada sem permissão de crédito</option>
                                </Form.Select>
                            </FloatingLabel>
                        </InputGroup>
                    </Form>
                </Card.Body>
            </Card>



        </>
    );
}