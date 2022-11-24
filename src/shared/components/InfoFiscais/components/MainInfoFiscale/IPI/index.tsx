import { FloatingLabel, Col, InputGroup, Card, Form } from 'react-bootstrap';

import { useContext } from 'react';
import { IImpostos } from '../../../../../../interface/IImpostos';
import { ImpostosContext } from '../../../../../context/impostos/impostos';


export function IpiInfo() {
    const { impostos , handleChange } = useContext(ImpostosContext) as { impostos: IImpostos , handleChange: React.ChangeEventHandler }

    return (
        <>
            <Card className="text-center">
                <Card.Body>
                    <Form>
                        <Form.Group as={Col}>
                            <FloatingLabel style={{ color: "black", fontSize: "14px" }} className="mb-4" label="Tipo de Pessoa">
                                <Form.Select onChange={handleChange} style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="tipo_pessoa" defaultValue={impostos?.ipi?.tipo_pessoa || " "}>

                                    <option value="">0 - pessoa Física</option>
                                    <option value="">1 - Pessoa Juridíca</option>
                                    <option value="">2 - Estrangeiro</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <FloatingLabel style={{ color: "black", fontSize: "14px" }} className="mb-4" label="Cenário">
                                <Form.Select onChange={handleChange} style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="cenario" defaultValue={impostos?.ipi?.cenario || " "}>

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

                        <Form.Group as={Col}>
                            <FloatingLabel style={{ color: "black", fontSize: "14px" }} className="mb-4" label="Situação Tributária">
                                <Form.Select onChange={handleChange} style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="situacao_tributaria" defaultValue={impostos?.ipi?.situacao_tributaria || " "}>
                                    <option value="">00 - Entrada com recuperação de crédito</option>
                                    <option value="">01 - Entrada tributada com alíquota zero</option>
                                    <option value="">02 - Entrada isenta</option>
                                    <option value="">03 - Entrada não-tributada</option>
                                    <option value="">04 - Entrada imune</option>
                                    <option value="">05 - Entrada com suspensão</option>
                                    <option value="">49 - Outras entradas</option>
                                    <option value="">50 - Saída tributada</option>
                                    <option value="">51 - Saída tributada com alíquota zero</option>
                                    <option value="">52 - Saída isenta</option>
                                    <option value="">53 - Saída não-tributada</option>
                                    <option value="">54 - Saída imune</option>
                                    <option value="">55 - Saída com suspensão</option>
                                    <option value="">99 - Outras saídas</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <FloatingLabel style={{ color: "black", fontSize: "14px" }} className="mb-4" label="Códido de enquadramento">
                            <Form.Control onChange={handleChange} style={{ height: "48px" }} type="text" defaultValue={impostos?.ipi?.codigo_enquadramento || " "} name="codigo_enquadramento" />
                        </FloatingLabel>

                        <InputGroup className="mb-3">
                            <InputGroup.Text> % </InputGroup.Text>
                            <FloatingLabel style={{ color: "black", fontSize: "14px" }} label="Aliquota">
                                <Form.Control onChange={handleChange} style={{ height: "48px" }} type="text" defaultValue={impostos?.ipi?.aliquota || " "} name="aliquota" />
                            </FloatingLabel>
                        </InputGroup>
                    </Form>
                </Card.Body>
            </Card>



        </>
    );
}