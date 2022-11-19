import { FloatingLabel, Col, Row, InputGroup, Button, Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';



export function IssqnInfo() {
    return (
        <>
            <Card className="text-center">
                <Card.Body>
                    <Form>
                        <Form.Group as={Col}>
                            <FloatingLabel className="mb-4" style={{ fontSize: "14px" }} label="Tipo de Pessoa">
                                <Form.Select style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="id">
                                    <option value="">0 - pessoa Física</option>
                                    <option value="">1 - Pessoa Juridíca</option>
                                    <option value="">2 - Outros</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <FloatingLabel className="mb-4" style={{ fontSize: "14px" }} label="Cenário">
                                <Form.Select style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="id">
                                    <option value="">0 - Padrão</option>
                                    <option value="">1 - Padrão</option>
                                    <option value="">2 - Padrão</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <FloatingLabel className="mb-4" style={{ fontSize: "14px" }} label="Código CFOP">
                            <Form.Control style={{ height: "48px" }} type="text" />
                        </FloatingLabel>

                        <Form.Group as={Col} >
                            <FloatingLabel className="mb-4" style={{ fontSize: "14px" }} label="Indicador da exigibilidade do ISS">
                                <Form.Select style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="id">
                                    <option value="">Exigível</option>
                                    <option value="">Exigível</option>
                                    <option value="">Exigível</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <FloatingLabel className="mb-4" style={{ fontSize: "14px" }} label="Item da lista de serviços">
                            <Form.Control style={{ height: "48px" }} type="text" />
                        </FloatingLabel>

                        <Form.Group as={Col} >
                            <FloatingLabel style={{ fontSize: "14px" }} className="mb-4" label="Indicador de incentivo Fiscal">
                                <Form.Select style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="id">
                                    <option value="">Não</option>
                                    <option value="">Sim</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <InputGroup className="mb-3">
                            <InputGroup.Text> % </InputGroup.Text>
                            <FloatingLabel style={{ fontSize: "14px" }} label="Aliquota do ISSQN">
                                <Form.Control style={{ height: "48px" }} type="text" />
                            </FloatingLabel>
                        </InputGroup>
                    </Form>
                </Card.Body>
            </Card>



        </>
    );
}