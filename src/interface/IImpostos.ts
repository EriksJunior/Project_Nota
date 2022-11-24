export interface IImpostos {
  id: string
  icms?: Iicms,
  ipi?: IIpi,
  pis?: IPis,
  cofins?:  ICofins,
  issqn?: IIssqn,
  informacoes_fisco?: string,
  informacoes_complementares?: string,
}

interface Iicms {
  cenario: string,
  tipo_pessoa: string,
  codigo_cfop: string,
  situacao_tributaria: string,
}

interface IPis {
  cenario: string,
  tipo_pessoa: string,
  situacao_tributaria: string,
  aliquota: string,
}

interface IIpi {
  cenario: string,
  tipo_pessoa: string,
  situacao_tributaria: string,
  codigo_enquadramento: string,
  aliquota: string,
}

interface ICofins {
  cenario: string,
  tipo_pessoa: string,
  codigo_cfop: string,
  aliquota: string,
}

interface IIssqn {
  cenario: string,
  tipo_pessoa: string,
  codigo_cfop: string,
  exigibilidade?: string,
  item_servico?: string,
  incentivo_fiscal?: string,
  aliquota?: string,
} 

