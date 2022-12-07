export interface ProdutosLeaf {
  id: string
  idProduto: string
  nome?: string
  idNota: string
  codigo: string
  ncm: string
  cest: string
  quantidade: string
  unidade: string
  peso: string
  origem: string
  desconto: string
  subtotal: string
  total: string
  classe_imposto: string
  informacoes_adicionais: string
}

export interface PedidoLeaf {
  id: string
  ID: string
  operacao: string
  natureza_operacao: string
  modelo: string
  ambiente: string
  idCliente: string | undefined
  finalidade: string
  url_notificacao: string
  data_nfe: Date | any
  id_webmania: string
  response: {
    chave: string
    danfe: string
    danfe_etiqueta: string
    danfe_simples: string
    log: object
    modelo: string
    motivo: string
    nfe: string
    serie: string
    status: string
    uuid: string
    xml: string
  }
  response_cancelamento: string
  pagamento: string
  presenca: string
  modalidade_frete: string
  frete: string
  desconto: string
  total: string
  intermediador: string
  cnpj_intermediador: string
  id_intermediador: string
  despesas_acessorias: string
  informacoes_fisco: string
  informacoes_complementares: string
  status: string
}

export interface IResponseWebmaniaLeaf {
  chave: string
  danfe: string
  danfe_etiqueta: string
  danfe_simples: string
  log: string
  modelo: string
  motivo: string
  nfe: string
  serie: string
  status: string
  uuid: string
  xml: string
}

export interface ISearch {
  text: string
  filter: string
  startDate: string
  endDate: string
}

export interface IResultSearchLeaf {
  cpfCnpj: string
  data: string
  id: string
  idCliente: string
  nomeCliente: string
  response: string
  status: string
}

export interface ICancelLeaf {
  chave: string
  motivo: string
}