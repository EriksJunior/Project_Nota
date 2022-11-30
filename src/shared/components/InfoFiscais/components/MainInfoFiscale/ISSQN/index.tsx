import {FloatingLabel , Col , InputGroup , Card , Form} from 'react-bootstrap';

import { useContext } from 'react';
import { ImpostosContext } from '../../../../../context/impostos/impostos';
import { IImpostos } from '../../../../../../interface/IImpostos';
import { CardIssqn } from './styles';


export function IssqnInfo() {
    const { impostos , handleChange } = useContext(ImpostosContext) as { impostos: IImpostos , handleChange: React.ChangeEventHandler }
    return (
        <CardIssqn>
            <Card className="text-center">
                <Card.Body style={{ maxHeight:"67vh"}}>
                    <Form>
                        <Form.Group as={Col}>
                            <FloatingLabel className="mb-3" style={{ fontSize: "14px" }} label="Tipo de Pessoa">
                                <Form.Select onChange={handleChange} style={{ color: "Grey", fontWeight: "bolder", height: "45px" }} name="tipo_pessoa" defaultValue={impostos?.issqn?.tipo_pessoa || " "}>

                                    <option value="">0 - pessoa Física</option>
                                    <option value="">1 - Pessoa Juridíca</option>
                                    <option value="">2 - Estrangeira</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <FloatingLabel className="mb-3" style={{ fontSize: "14px" }} label="Cenário">
                                <Form.Select onChange={handleChange} style={{ color: "Grey", fontWeight: "bolder", height: "45px" }} name="cenario" defaultValue={impostos?.issqn?.cenario || " "}>

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

                        <FloatingLabel className="mb-3" style={{ fontSize: "14px" }} label="Código CFOP">
                            <Form.Control onChange={handleChange} style={{ height: "45px" }} type="text" defaultValue={impostos?.issqn?.codigo_cfop || " "} name="codigo_cfop"/>
                        </FloatingLabel>

                        <Form.Group as={Col} >
                            <FloatingLabel className="mb-3" style={{ fontSize: "14px" }} label="Indicador da exigibilidade do ISS">
                                <Form.Select onChange={handleChange} style={{ color: "Grey", fontWeight: "bolder", height: "45px" }} name="ISS" defaultValue={impostos?.issqn?.incentivo_fiscal || " "}>
                                    <option value="">Exigível</option>
                                    <option value="">Não incidência</option>
                                    <option value="">Isenção</option>
                                    <option value="">Exportação</option>
                                    <option value="">Imunidade</option>
                                    <option value="">Exigibilidade Suspensa por Decisão Judicial</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <FloatingLabel className="mb-3" style={{ fontSize: "14px" }} label="Item da lista de serviços">
                            <Form.Control onChange={handleChange} style={{ height: "45px" }} type="text" defaultValue={impostos?.issqn?.item_servico || " "} name="item_servico" />
                        </FloatingLabel>

                        <Form.Group as={Col}>
                            <FloatingLabel style={{ fontSize: "14px" }} className="mb-3" label="Indicador de incentivo Fiscal">
                                <Form.Select onChange={handleChange} style={{ color: "Grey", fontWeight: "bolder", height: "45px" }} name="incentivo_fiscal" defaultValue={impostos?.issqn?.incentivo_fiscal || " "}>
                                    <option value="">Não</option>
                                    <option value="">Sim</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <InputGroup>
                            <InputGroup.Text> % </InputGroup.Text>
                            <FloatingLabel style={{ fontSize: "14px" }} label="Aliquota do ISSQN">
                                <Form.Control onChange={handleChange} style={{ height: "45px" }} type="text" defaultValue={impostos?.issqn?.aliquota || " "} name="aliquota"/>
                            </FloatingLabel>
                        </InputGroup>
                    </Form>
                </Card.Body>
            </Card>
        </CardIssqn>
    );
}