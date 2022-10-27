export interface ProdutosLeaf {
  idProduto: string
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
  idCliente: string
  finalidade: string
  url_notificacao: string
  data_nfe: Date
  id_webmania: string
  response: string
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
}