import {
    FloatingLabel,
    Col,
    InputGroup,
    Card,
    Form
} from 'react-bootstrap';


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
                                    <option value="">2 - Estrangeira</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <FloatingLabel className="mb-4" style={{ fontSize: "14px" }} label="Cenário">
                                <Form.Select style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="id">
                                    <option value="">0 -Padrão (Abrange todos os cenários)</option>
                                    <option>0 - Saída dentro do estado</option>
                                    <option>1 - Saída para fora do estado</option>
                                    <option>2 - Saída para o exterior</option>
                                    <option>3 - Entrada de dentro do estado</option>
                                    <option>4 - Entrada de fora do estado</option>
                                    <option>5 - Entrada do exterior</option>
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
                                    <option value="">Não incidência</option>
                                    <option value="">Isenção</option>
                                    <option value="">Exportação</option>
                                    <option value="">Imunidade</option>
                                    <option value="">Exigibilidade Suspensa por Decisão Judicial</option>
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