export interface IProducts {
  id?: string
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

// teste

export interface ISearch {
  text: string
  page: number
}