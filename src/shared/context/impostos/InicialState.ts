export const INITIAL_STATE_IMPOSTOS = {
  id: "",
  ipi:
  {
    cenario: "",
    tipo_pessoa: "",
    situacao_tributaria: "",
    codigo_enquadramento: "",
    aliquota: ""
  },
  icms:
  [{ 
    cenario: "",
    tipo_pessoa: "",
    codigo_cfop: "",
    situacao_tributaria: ""
}]
  ,
  
  pis:
  {
    cenario: "",
    tipo_pessoa: "",
    situacao_tributaria: "",
    aliquota: ""
  }
  ,
  cofins:
  {
    cenario: "",
    tipo_pessoa: "",
    codigo_cfop: "",
    aliquota: ""
  }
  ,
  issqn:
  {
    cenario: "",
    tipo_pessoa: "",
    codigo_cfop: "",
    exigibilidade: "1",
    item_servico: "",
    incentivo_fiscal: "",
    aliquota: ""
  },

  informacoes_fisco: "",
  informacoes_complementares: ""
}