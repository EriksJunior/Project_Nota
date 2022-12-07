import { useContext } from 'react';
import { ImpostosContext } from '../../../../../context/impostos/impostos';
import { IImpostos , Iicms } from '../../../../../../interface/IImpostos';

import { FloatingLabel, Col, InputGroup, Card, Form } from 'react-bootstrap';


export function IcmsInfo() {
    const { icms , handleChangeIcms } = useContext(ImpostosContext) as { icms: Iicms, handleChangeIcms: React.ChangeEventHandler }
    return (
        <>
            <Card className="text-center">
                <Card.Body>
                    <Form>
                        <Form.Group as={Col}>
                            <FloatingLabel className="mb-4" style={{ color: "black", fontSize: "14px" }} label="Tipo de Tributação">
                                <Form.Select onChange={handleChangeIcms} style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="tipo_tributacao" defaultValue={icms.tipo_tributacao || ""}>
                                    <option value="simples_nacional">0 - Simples Nacional</option>
                                    <option value="tributacao_normal">1 - Tributação Normal</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col} >
                            <FloatingLabel className="mb-4" style={{ color: "black", fontSize: "14px" }} label="Cenário">
                                <Form.Select onChange={handleChangeIcms} style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="cenario" defaultValue={ icms.cenario || "" }>
                                    <option value="padrao">Padrão (Abrange todos os cenários)</option>
                                    <option value="saida_dentro_estado">0 - Saída dentro do estado</option>
                                    <option value="saida_fora_estado">1 - Saída para fora do estado</option>
                                    <option value="saida_exterior">2 - Saída para o exterior</option>
                                    <option value="entrada_dentro_estado">3 - Entrada de dentro do estado</option>
                                    <option value="entrada_fora_estado">4 - Entrada de fora do estado</option>
                                    <option value="entrada_exterior">5 - Entrada do exterior</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col} >
                            <FloatingLabel className="mb-4" style={{ color: "black", fontSize: "14px" }} label="Tipo de Pessoa">
                                <Form.Select onChange={handleChangeIcms} style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="tipo_pessoa" defaultValue={ icms.tipo_pessoa || "" }>
                                    <option value="fisica">0 - pessoa Física</option>
                                    <option value="juridica">1 - Pessoa Juridíca</option>
                                    <option value="estrangeira">2 - Estrangeiro</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <FloatingLabel className="mb-4" style={{ color: "black", fontSize: "14px" }} label="Código CFOP">
                            <Form.Control onChange={handleChangeIcms} style={{ height: "48px" }} type="text" defaultValue={ icms.codigo_cfop || ""} name="codigo_cfop" />
                        </FloatingLabel>

                        <InputGroup className="mb-3">
                            <InputGroup.Text> Situação Tributária </InputGroup.Text>
                            <FloatingLabel style={{ color: "black", fontSize: "14px" }} label="Definição Imposto">
                                <Form.Select onChange={handleChangeIcms} style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="situacao_tributaria" defaultValue={ icms.situacao_tributaria || "" }>
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