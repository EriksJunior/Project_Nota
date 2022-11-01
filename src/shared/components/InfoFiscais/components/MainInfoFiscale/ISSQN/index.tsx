import { FloatingLabel, Col, Row, InputGroup, Button, Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';



export function IssqnInfo() {
    return (
        <>
            <Card className="text-center">
                <Card.Body>
                    <Form>
                        <Form.Group as={Col} controlId="formGridState">
                            <FloatingLabel className="mb-4" label="Tipo de Pessoa">
                                <Form.Select style={{ color: "Grey", fontWeight: "bolder" }} name="id">
                                    <option value="">0 - pessoa Física</option>
                                    <option value="">1 - Pessoa Juridíca</option>
                                    <option value="">2 - Outros</option>
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

                        <FloatingLabel className="mb-4" controlId="" label="Código CFOP">
                            <Form.Control type="text" />
                        </FloatingLabel>

                        <Form.Group as={Col} controlId="formGridState">
                            <FloatingLabel className="mb-4" label="Indicador da exigibilidade do ISS">
                                <Form.Select style={{ color: "Grey", fontWeight: "bolder" }} name="id">
                                    <option value="">Exigível</option>
                                    <option value="">Exigível</option>
                                    <option value="">Exigível</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <FloatingLabel className="mb-4" controlId="" label="Item da lista de serviços">
                            <Form.Control type="text" />
                        </FloatingLabel>

                        <Form.Group as={Col} controlId="formGridState">
                            <FloatingLabel className="mb-4" label="Indicador de incentivo Fiscal">
                                <Form.Select style={{ color: "Grey", fontWeight: "bolder" }} name="id">
                                    <option value="">Não</option>
                                    <option value="">Sim</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <InputGroup className="mb-3">
                            <InputGroup.Text> % </InputGroup.Text>
                            <FloatingLabel controlId="" label="Aliquota do ISSQN">
                                <Form.Control type="text" />
                            </FloatingLabel>
                        </InputGroup>
                    </Form>
                </Card.Body>
            </Card>



        </>
    );
}