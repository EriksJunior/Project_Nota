export interface IImpostos {
  id?: string,
  referencia?: string,
  descricao?: string | any,
  informacoes_fisco?: string,
  informacoes_complementares?: string,
}

export interface Iicms {
  tipo_tributacao: string,
  cenario: string,
  tipo_pessoa: string,
  codigo_cfop: string,
  situacao_tributaria: string,
}

export interface IPis {
  cenario: string,
  tipo_pessoa: string,
  situacao_tributaria: string,
  aliquota: string,
}

export interface IIpi {
  cenario: string,
  tipo_pessoa: string,
  situacao_tributaria: string,
  codigo_enquadramento: string,
  aliquota: string,
}

export interface ICofins {
  cenario: string,
  tipo_pessoa: string,
  situacao_tributaria: string,
  aliquota: string,
}

export interface IIssqn {
  cenario: string,
  tipo_pessoa: string,
  codigo_cfop: string,
  exigibilidade?: string,
  item_servico?: string,
  incentivo_fiscal?: string,
  aliquota?: string,
}

export interface IRefFromTable {
  id: string,
  ref: string,
  descricao: string,
}

