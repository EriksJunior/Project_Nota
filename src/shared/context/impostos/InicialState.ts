export const INITIAL_STATE_IMPOSTOS = {
  id: "",
  icms: { 
    cenario: "",
    tipo_pessoa: "",
    codigo_cfop: "",
    situacao_tributaria:""
  },
  ipi: {
    cenario: "",
    tipo_pessoa: "",
    situacao_tributaria: "",
    codigo_enquadramento: "",
    aliquota: ""
  },
  pis: {
    cenario: "",
    tipo_pessoa: "",
    situacao_tributaria: "",
    aliquota: ""
  },
  confins: {
    cenario: "",
    tipo_pessoa: "",
    codigo_cfop: "",
    aliquota: ""
  }, 
  issqn: {
    cenario: "",
    tipo_pessoa: "",
    codigo_cfop: "",
    exigibilidade: {
      '1': "" ,
      '2': "" ,
      '3': "" ,
      '4': "" ,
      '5': "" ,
      '6': "" ,
      '7': ""
    },
    item_servico: "",
    incentivo_fiscal: "",
    aliquota: ""
  },
  informacoes_fisco: "",
  informacoes_complementares: ""
}