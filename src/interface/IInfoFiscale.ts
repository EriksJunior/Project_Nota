export interface IInfoFiscale {
  id: string
  icms: [
    cenario: string,
    tipo_pessoa: string,
    codigo_cfop: string,
    situacao_tributaria:string
  ],
  ipi: [
    cenario: string,
    tipo_pessoa: string,
    situacao_tributaria: string,
    codigo_enquadramento: string,
    aliquota: string
  ],
  pis: [
    cenario: string,
    tipo_pessoa: string,
    situacao_tributaria: string,
    aliquota: string
  ],
  confins: [
    cenario: string,
    tipo_pessoa: string,
    codigo_cfop: string,
    aliquota: string
  ], 
  issqn: [
    cenario: string,
    tipo_pessoa: string,
    codigo_cfop: string,
    exigibilidade: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7'
    ],
    item_servico: string,
    incentivo_fiscal: string,
    aliquota: string
  ],
  informacoes_fisco: string,
  informacoes_complementares: string
}