import { useContext } from 'react';
import { ImpostosContext } from '../../../../../context/impostos/impostos';
import { IImpostos } from '../../../../../../interface/IImpostos';

import { FloatingLabel, Col, InputGroup, Card, Form } from 'react-bootstrap';


export function IcmsInfo() {

    return (
        <>
            <Card className="text-center">
                <Card.Body>
                    <Form>
                        <Form.Group as={Col}>
                            <FloatingLabel className="mb-4" style={{ color: "black", fontSize: "14px" }} label="Tipo de Tributação">
                                <Form.Select style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="tributos">
                                    <option value="">0 - Simples Nacional</option>
                                    <option value="">1 - Tributação Normal</option>
                                    <option value="">2 - Outros</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col} >
                            <FloatingLabel className="mb-4" style={{ color: "black", fontSize: "14px" }} label="Cenário">
                                <Form.Select style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="cenario">
                                    <option value="">0 - Saída dentro do estado</option>
                                    <option value="">1 - Saída para fora do estado</option>
                                    <option value="">2 - Saída para o exterior</option>
                                    <option value="">3 - Entrada de dentro do estado</option>
                                    <option value="">4 - Entrada de fora do estado</option>
                                    <option value="">5 - Entrada do exterior</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col} >
                            <FloatingLabel className="mb-4" style={{ color: "black", fontSize: "14px" }} label="Tipo de Pessoa">
                                <Form.Select style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="tipoPessoa">
                                    <option value="">0 - pessoa Física</option>
                                    <option value="">1 - Pessoa Juridíca</option>
                                    <option value="">2 - Estrangeiro</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <FloatingLabel className="mb-4" style={{ color: "black", fontSize: "14px" }} label="Código CFOP">
                            <Form.Control style={{ height: "48px" }} type="text" />
                        </FloatingLabel>

                        <InputGroup className="mb-3">
                            <InputGroup.Text> Situação Tributária </InputGroup.Text>
                            <FloatingLabel controlId="" style={{ color: "black", fontSize: "14px" }} label="Definição Imposto">
                                <Form.Select style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="defImposto">
                                    <option>101 - Tributada com permissão de crédito</option>
                                    <option>102 - Tributada sem permissão de crédito</option>
                                    <option>103 - Isenção do ICMS para faixa de receita bruta</option>
                                    <option>201 - Tributada com permissão de crédito e com cobrança do ICMS por substituição tributária</option>
                                    <option>202 - Tributada sem permissão de crédito e com cobrança do ICMS por substituição tributária</option>
                                    <option>203 - Isenção do ICMS para faixa de receita bruta e com cobrança do ICMS por substituição tributária</option>
                                    <option>300 - Imune </option>
                                    <option>400 - Não tributada </option>
                                    <option>500 - ICMS cobrado anteriormente por substituição tributária (substituído) ou por antecipação</option>
                                    <option>900 - Outros</option>
                                </Form.Select>
                            </FloatingLabel>
                        </InputGroup>
                    </Form>
                </Card.Body>
            </Card>



        </>
    );
}