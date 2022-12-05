import { useContext } from 'react';
import { ImpostosContext } from '../../../../../context/impostos/impostos';
import { IImpostos } from '../../../../../../interface/IImpostos';

import { FloatingLabel, Col, InputGroup, Card, Form } from 'react-bootstrap';


export function IcmsInfo() {
    const { impostos, handleChange, handleChangeIcms } = useContext(ImpostosContext) as { impostos: IImpostos, handleChange: React.ChangeEventHandler, handleChangeIcms: React.ChangeEventHandler }
    return (
        <>
            <Card className="text-center">
                <Card.Body>
                    <Form>
                        <Form.Control onChange={handleChangeIcms} hidden style={{ height: "48px" }} type="text" defaultValue={impostos?.id || " "} name="id" />
                        <Form.Group as={Col}>
                            <FloatingLabel className="mb-4" style={{ color: "black", fontSize: "14px" }} label="Tipo de Tributação">
                                <Form.Select onChange={handleChangeIcms} style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="situacao_tributaria" defaultValue={impostos.icms[0].situacao_tributaria || " "}>
                                    <option value="0">0 - Simples Nacional</option>
                                    <option value="1">1 - Tributação Normal</option>
                                    <option value="2">2 - Outros</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col} >
                            <FloatingLabel className="mb-4" style={{ color: "black", fontSize: "14px" }} label="Cenário">
                                <Form.Select onChange={handleChangeIcms} style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="cenario_icms" defaultValue={ impostos.icms[0].cenario || " " }>
                                    <option value="0">0 - Saída dentro do estado</option>
                                    <option value="1">1 - Saída para fora do estado</option>
                                    <option value="2">2 - Saída para o exterior</option>
                                    <option value="3">3 - Entrada de dentro do estado</option>
                                    <option value="4">4 - Entrada de fora do estado</option>
                                    <option value="5">5 - Entrada do exterior</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col} >
                            <FloatingLabel className="mb-4" style={{ color: "black", fontSize: "14px" }} label="Tipo de Pessoa">
                                <Form.Select onChange={handleChangeIcms} style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="tipo_pessoa_icms" defaultValue={impostos.icms[0].tipo_pessoa || " " }>
                                    <option value="0">0 - pessoa Física</option>
                                    <option value="1">1 - Pessoa Juridíca</option>
                                    <option value="2">2 - Estrangeiro</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <FloatingLabel className="mb-4" style={{ color: "black", fontSize: "14px" }} label="Código CFOP">
                            <Form.Control onChange={handleChangeIcms} style={{ height: "48px" }} type="text" defaultValue={impostos.icms[0].codigo_cfop || " "} name="cfop_icms" />
                        </FloatingLabel>

                        <InputGroup className="mb-3">
                            <InputGroup.Text> Situação Tributária </InputGroup.Text>
                            <FloatingLabel style={{ color: "black", fontSize: "14px" }} label="Definição Imposto">
                                <Form.Select onChange={handleChangeIcms} style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="situacao_tributaria_icms" defaultValue={impostos?.icms[0].situacao_tributaria || " " }>
                                    <option value="101">101 - Tributada com permissão de crédito</option>
                                    <option value="102">102 - Tributada sem permissão de crédito</option>
                                    <option value="103">103 - Isenção do ICMS para faixa de receita bruta</option>
                                    <option value="201">201 - Tributada com permissão de crédito e com cobrança do ICMS por substituição tributária</option>
                                    <option value="202">202 - Tributada sem permissão de crédito e com cobrança do ICMS por substituição tributária</option>
                                    <option value="203">203 - Isenção do ICMS para faixa de receita bruta e com cobrança do ICMS por substituição tributária</option>
                                    <option value="300">300 - Imune </option>
                                    <option value="400">400 - Não tributada </option>
                                    <option value="500">500 - ICMS cobrado anteriormente por substituição tributária (substituído) ou por antecipação</option>
                                    <option value="900">900 - Outros</option>
                                </Form.Select>
                            </FloatingLabel>
                        </InputGroup>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}