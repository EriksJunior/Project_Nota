export interface IProducts {
  id: string
  idEmpresa?: string
  nome?: string
  valor?: number | string
  valorVenda?: number | string
  unidade?: string
  descricao?: string
  codBarras?: string
  codReferencia?: string
  estoque?: number | string
  estoqueMin?: number | string
}

export interface ISearch {
  text: string
  page: number
}