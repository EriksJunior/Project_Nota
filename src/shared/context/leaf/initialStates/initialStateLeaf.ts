import { DateTime } from 'luxon'

export const INITIAL_VALUE_PRODUTOS = {
  id: "",
  idProduto: "",
  idNota: "",
  codigo: "",
  ncm: "6109.10.00",
  cest: "28.038.00",
  quantidade: "1",
  unidade: "",
  peso: "",
  origem: "0",
  desconto: "0",
  subtotal: "0",
  total: "",
  classe_imposto: "REF15466069",
  informacoes_adicionais: "",
}

export const INITIAL_VALUE_PEDIDO = {
  id: "",
  ID: "", // Controle das solicitações de emissão por pedido ou ID de processamento.
  operacao: "1",
  natureza_operacao: "Venda de produção do estabelecimento",
  modelo: "1", //2 para NFC-e
  ambiente: "2", //2 para Homologação
  idCliente: "",
  finalidade: "1",
  url_notificacao: "teste",
  data_nfe: DateTime.local().toFormat('yyyy-MM-dd'),
  id_webmania: "",
  response: "",
  response_cancelamento: "",
  pagamento: "0",
  presenca: "1",
  modalidade_frete: "9",
  frete: "",
  desconto: "",
  total: "",
  intermediador: "",
  cnpj_intermediador: "",
  id_intermediador: "",
}

export const INITIAL_VALUE_RESPONSE_WEBMANIA = {
  chave: "",
  danfe: "",
  danfe_etiqueta: "",
  danfe_simples: "",
  log: "",
  modelo: "",
  motivo: "",
  nfe: "",
  serie: "",
  status: "",
  uuid: "",
  xml: "",
}