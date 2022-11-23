import { FloatingLabel, Col, InputGroup, Card , Form } from 'react-bootstrap';


export function IpiInfo() {
    return (
        <>
            <Card className="text-center">
                <Card.Body>
                    <Form>
                        <Form.Group as={Col} controlId="formGridState">
                            <FloatingLabel style={{ color: "black", fontSize: "14px" }} className="mb-4" label="Tipo de Pessoa">
                                <Form.Select style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="id">
                                    <option value="">0 - pessoa Física</option>
                                    <option value="">1 - Pessoa Juridíca</option>
                                    <option value="">2 - Outros</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <FloatingLabel style={{ color: "black", fontSize: "14px" }} className="mb-4" label="Cenário">
                                <Form.Select style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="id">
                                    <option value="">0 - Padrão</option>
                                    <option value="">1 - Padrão</option>
                                    <option value="">2 - Padrão</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <FloatingLabel style={{ color: "black", fontSize: "14px" }} className="mb-4" label="Situação Tributária">
                                <Form.Select style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="id">
                                    <option value="">99 - Outras saídas</option>
                                    <option value="">99 - Outras saídas</option>
                                    <option value="">99 - Outras saídas</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <FloatingLabel style={{ color: "black", fontSize: "14px" }} className="mb-4" controlId="" label="Códido de enquadramento">
                            <Form.Control style={{ height: "48px" }} type="text" />
                        </FloatingLabel>

                        <InputGroup className="mb-3">
                            <InputGroup.Text> % </InputGroup.Text>
                            <FloatingLabel style={{ color: "black", fontSize: "14px" }} controlId="" label="Aliquota">
                                <Form.Control style={{ height: "48px" }} type="text" />
                            </FloatingLabel>
                        </InputGroup>
                    </Form>
                </Card.Body>
            </Card>



        </>
    );
}