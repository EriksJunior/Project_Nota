import { FloatingLabel, Col, Row, InputGroup, Button, Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { IoCheckboxOutline } from 'react-icons/io5';
import { ButtonContent } from '../../../Company/styles';
import { IconIoHome } from '../../../Styles/bootstrap';


export function MainInfoFiscale() {
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

                        <Form.Group as={Col} controlId="formGridState">
                            <FloatingLabel className="mb-4" label="Situação Tributária">
                                <Form.Select style={{ color: "Grey", fontWeight: "bolder" }} name="id">
                                    <option value="">99 - Outras saídas</option>
                                    <option value="">99 - Outras saídas</option>
                                    <option value="">99 - Outras saídas</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <InputGroup className="mb-3">
                            <InputGroup.Text> % </InputGroup.Text>
                            <FloatingLabel controlId="floatingPassword" label="Aliquota">
                                <Form.Control type="password" />
                            </FloatingLabel>
                        </InputGroup>
                    </Form>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <ButtonContent>
                        <Button variant="secondary" size='lg'>
                            <IconIoHome /> <span>Limpar Campos</span>
                        </Button>
                        <Button variant="success" size='lg' style={{ color: "white" }}>
                            <IoCheckboxOutline /> Salvar alterações
                        </Button>
                    </ButtonContent>
                </Card.Footer>
            </Card>



        </>
    );
}