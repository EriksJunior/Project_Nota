import { FloatingLabel, Col, InputGroup, Card, Form } from 'react-bootstrap';

import { useContext } from 'react';
import { IImpostos } from '../../../../../../interface/IImpostos';
import { ImpostosContext } from '../../../../../context/impostos/impostos';


export function CofinsInfo() {
  const { impostos, handleChange } = useContext(ImpostosContext) as { impostos: IImpostos, handleChange: React.ChangeEventHandler }

  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <Form>
            <Form.Group as={Col}>
              <FloatingLabel className="mb-4" style={{ fontSize: "14px" }} label="Tipo de Pessoa">
                <Form.Select onChange={handleChange}  style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="tipo_pessoa" defaultValue={impostos.cofins[0].tipo_pessoa || " "}>
                  <option>0 - pessoa Física</option>
                  <option>1 - Pessoa Juridíca</option>
                  <option>2 - Estrangeira</option>
                </Form.Select>
              </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col} >
              <FloatingLabel className="mb-4" style={{ fontSize: "14px" }} label="Cenário">
                <Form.Select onChange={handleChange} style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} name="cenario" defaultValue={impostos.cofins[0].cenario || " "}>
                  <option>0 -Padrão (Abrange todos os cenários)</option>
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
                <Form.Select style={{ color: "Grey", fontWeight: "bolder", height: "48px" }} onChange={handleChange} defaultValue={impostos?.cofins[0].tipo_pessoa || " "}  name="situacao_tributaria">
                  <option>01 - Operação Tributável - Base de Cálculo = Valor da Operação Alíquota Normal (Cumulativo/Não cumulativo)</option>
                  <option>02 - Operação Tributável - Base de Cálculo = Valor da Operação (Alíquota diferenciada)</option>
                  <option>03 - Operação Tributável - Base de Cálculo = Quantidade Vendida X Alíquota por Unidade de Produto</option>
                  <option>04 - Operação Tributável - Tributação Monofásica - (Alíquota Zero)</option>
                  <option>05 - Operação Tributável - (Substituição Tributária)</option>
                  <option>06 - Operação Tributável (Alíquota Zero)</option>
                  <option>07 - Operação Isenta de Contribuição</option>
                  <option>08 - Operação sem Incidência da Contribuição</option>
                  <option>09 - Operação com Suspensão da Contribuição</option>
                  <option>49 - Outras Operações de Saída</option>
                  <option>50 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Tributada no Mercado Interno</option>
                  <option>51 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Não Tributada no Mercado Interno</option>
                  <option>52 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita de Exportação</option>
                  <option>53 - Operação com Direito a Crédito - Vinculado a Receitas Tributadas e Não-Tributadas no Mercado Interno</option>
                  <option>54 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas no Mercado Interno e de Exportação</option>
                  <option>55 - Operação com Direito a Crédito - Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação</option>
                  <option>56 - Operação com Direito a Crédito - Vinculado a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação</option>
                  <option>60 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Tributada no Mercado Interno</option>
                  <option>61 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Não-Tributada no Mercado Interno</option>
                  <option>62 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita de Exportação</option>
                  <option>63 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno</option>
                  <option>64 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas no Mercado Interno e de Exportação</option>
                  <option>65 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação</option>
                  <option>66 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação</option>
                  <option>67 - Crédito Presumido - Outras Operações</option>
                  <option>70 - Operação de Aquisição sem Direito a Crédito</option>
                  <option>71 - Operação de Aquisição com Isenção</option>
                  <option>72 - Operação de Aquisição com Suspensão</option>
                  <option>73 - Operação de Aquisição a Alíquota Zero</option>
                  <option>74 - Operação de Aquisição sem Incidência da Contribuição</option>
                  <option>75 - Operação de Aquisição por Substituição Tributária</option>
                  <option>98 - Outras Operações de Entrada</option>
                  <option>99 - Outras Operações</option>

                </Form.Select>
              </FloatingLabel>
            </Form.Group>

            <InputGroup className="mb-3">
              <InputGroup.Text> % </InputGroup.Text>
              <FloatingLabel style={{ fontSize: "14px" }} label="Aliquota">
                <Form.Control style={{ height: "48px" }} onChange={handleChange} type="text" defaultValue={impostos?.cofins[0].aliquota || " "} name="aliquota" />
              </FloatingLabel>
            </InputGroup>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}