import { FloatingLabel, Col, InputGroup, Card, Form } from 'react-bootstrap';

import { useContext } from 'react';
import { ImpostosContext } from '../../../../../context/impostos/impostos';
import { IImpostos, IIssqn } from '../../../../../../interface/IImpostos';
import { CardIssqn } from './styles';


export function IssqnInfo() {
    const { issqn, handleChangeIssqn } = useContext(ImpostosContext) as { issqn: IIssqn, handleChangeIssqn: React.ChangeEventHandler }
    return (
        <CardIssqn>
            <Card className="text-center">
                <Card.Body style={{ maxHeight: "67vh" }}>
                    <Form>
                        <Form.Group as={Col}>
                            <FloatingLabel className="mb-3" style={{ fontSize: "14px" }} label="Tipo de Pessoa">
                                <Form.Select onChange={handleChangeIssqn} style={{ color: "Grey", fontWeight: "bolder", height: "45px" }} name="tipo_pessoa" defaultValue={issqn.tipo_pessoa || ""}>
                                    <option value="fisica">0 - pessoa Física</option>
                                    <option value="juridica">1 - Pessoa Juridíca</option>
                                    <option value="estrangeira">2 - Estrangeiro</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <FloatingLabel className="mb-3" style={{ fontSize: "14px" }} label="Cenário">
                                <Form.Select onChange={handleChangeIssqn} style={{ color: "Grey", fontWeight: "bolder", height: "45px" }} name="cenario" defaultValue={issqn.cenario || ""}>
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

                        <FloatingLabel className="mb-3" style={{ fontSize: "14px" }} label="Código CFOP">
                            <Form.Control onChange={handleChangeIssqn} style={{ height: "45px" }} type="text" defaultValue={issqn.codigo_cfop || ""} name="codigo_cfop" />
                        </FloatingLabel>

                        <Form.Group as={Col} >
                            <FloatingLabel className="mb-3" style={{ fontSize: "14px" }} label="Indicador da exigibilidade do ISS">
                                <Form.Select onChange={handleChangeIssqn} style={{ color: "Grey", fontWeight: "bolder", height: "45px" }} name="ISS" defaultValue={issqn.incentivo_fiscal || ""}>
                                    <option value="exigivel">Exigível</option>
                                    <option value="nao_incidencia">Não incidência</option>
                                    <option value="isencao">Isenção</option>
                                    <option value="exportacao">Exportação</option>
                                    <option value="imunidade">Imunidade</option>
                                    <option value="exibilidade_suspensa">Exigibilidade Suspensa por Decisão Judicial</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <FloatingLabel className="mb-3" style={{ fontSize: "14px" }} label="Item da lista de serviços">
                            <Form.Control onChange={handleChangeIssqn} style={{ height: "45px" }} type="text" defaultValue={issqn.item_servico || ""} name="item_servico" />
                        </FloatingLabel>

                        <Form.Group as={Col}>
                            <FloatingLabel style={{ fontSize: "14px" }} className="mb-3" label="Indicador de incentivo Fiscal">
                                <Form.Select onChange={handleChangeIssqn} style={{ color: "Grey", fontWeight: "bolder", height: "45px" }} name="incentivo_fiscal" defaultValue={issqn.incentivo_fiscal || ""}>
                                    <option value="1">Não</option>
                                    <option value="2">Sim</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <InputGroup>
                            <InputGroup.Text> % </InputGroup.Text>
                            <FloatingLabel style={{ fontSize: "14px" }} label="Aliquota do ISSQN">
                                <Form.Control onChange={handleChangeIssqn} style={{ height: "45px" }} type="text" defaultValue={issqn.aliquota || ""} name="aliquota" />
                            </FloatingLabel>
                        </InputGroup>
                    </Form>
                </Card.Body>
            </Card>
        </CardIssqn>
    );
}