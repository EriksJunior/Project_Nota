import { FloatingLabel, Col, InputGroup, Card, Form } from 'react-bootstrap';

import { useContext } from 'react';
import { ImpostosContext } from '../../../../context/impostos/impostos';
import { IImpostos } from '../../../../../interface/IImpostos';


export function MainInfoFiscale() {
    const { impostos , handleChange } = useContext(ImpostosContext) as { impostos: IImpostos , handleChange: React.ChangeEventHandler }

    return (
        <>
            <Card className="text-center">
                <Card.Body>
                    <Form>
                        <Form.Group as={Col}>
                            <FloatingLabel className="mb-4" style={{ fontSize: "14px" }} label="Tipo de Pessoa">
                                <Form.Select style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="tipPessoa">
                                    <option value="">0 - pessoa Física</option>
                                    <option value="">1 - Pessoa Juridíca</option>
                                    <option value="">2 - Estrangeira</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col} >
                            <FloatingLabel className="mb-4" style={{ fontSize: "14px" }} label="Cenário">
                                <Form.Select style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="cenario">
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
                            <FloatingLabel className="mb-4" style={{ fontSize: "14px" }} label="Situação Tributária">
                                <Form.Select style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="sitTributo">
                                    <option value="">01 - Operação Tributável - Base de Cálculo = Valor da Operação Alíquota Normal (Cumulativo/Não cumulativo)</option>
                                    <option value="">02 - Operação Tributável - Base de Cálculo = Valor da Operação (Alíquota diferenciada)</option>
                                    <option value="">03 - Operação Tributável - Base de Cálculo = Quantidade Vendida X Alíquota por Unidade de Produto</option>
                                    <option value="">04 - Operação Tributável - Tributação Monofásica - (Alíquota Zero)</option>
                                    <option value="">05 - Operação Tributável - (Substituição Tributária)</option>
                                    <option value="">06 - Operação Tributável (Alíquota Zero)</option>
                                    <option value="">07 - Operação Isenta de Contribuição</option>
                                    <option value="">08 - Operação sem Incidência da Contribuição</option>
                                    <option value="">09 - Operação com Suspensão da Contribuição</option>
                                    <option value="">49 - Outras Operações de Saída</option>
                                    <option value="">50 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Tributada no Mercado Interno</option>
                                    <option value="">51 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Não Tributada no Mercado Interno</option>
                                    <option value="">52 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita de Exportação</option>
                                    <option value="">53 - Operação com Direito a Crédito - Vinculado a Receitas Tributadas e Não-Tributadas no Mercado Interno</option>
                                    <option value="">54 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas no Mercado Interno e de Exportação</option>
                                    <option value="">55 - Operação com Direito a Crédito - Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação</option>
                                    <option value="">56 - Operação com Direito a Crédito - Vinculado a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação</option>
                                    <option value="">60 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Tributada no Mercado Interno</option>
                                    <option value="">61 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Não-Tributada no Mercado Interno</option>
                                    <option value="">62 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita de Exportação</option>
                                    <option value="">63 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno</option>
                                    <option value="">64 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas no Mercado Interno e de Exportação</option>
                                    <option value="">65 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação</option>
                                    <option value="">66 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação</option>
                                    <option value="">67 - Crédito Presumido - Outras Operações</option>
                                    <option value="">70 - Operação de Aquisição sem Direito a Crédito</option>
                                    <option value="">71 - Operação de Aquisição com Isenção</option>
                                    <option value="">72 - Operação de Aquisição com Suspensão</option>
                                    <option value="">73 - Operação de Aquisição a Alíquota Zero</option>
                                    <option value="">74 - Operação de Aquisição sem Incidência da Contribuição</option>
                                    <option value="">75 - Operação de Aquisição por Substituição Tributária</option>
                                    <option value="">98 - Outras Operações de Entrada</option>
                                    <option value="">99 - Outras Operações</option>

                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>

                        <InputGroup className="mb-3">
                            <InputGroup.Text> % </InputGroup.Text>
                            <FloatingLabel style={{ fontSize: "14px" }} label="Aliquota">
                                <Form.Control onChange={handleChange} style={{ height: "48px" }}  type="text" defaultValue={impostos?.pis?.aliquota || " " } name="aliquota" />
                            </FloatingLabel>
                        </InputGroup>
                    </Form>
                </Card.Body>
            </Card>



        </>
    );
}