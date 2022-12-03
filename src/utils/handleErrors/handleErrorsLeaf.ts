import { ProdutosLeaf } from "../../interface/ILeaf"

interface IHandleSendLeafErros {
  message: string | undefined
  erro: boolean | undefined
}

export function HandleErrorsLeaf() {
  const handleErrorSendleaf = (products: ProdutosLeaf[]): IHandleSendLeafErros => {
    let message
    let erro

    if (products.length < 1) {
      message = "é necessário adicionar um produto prosseguir com a emissão da nota!"
      erro = true
    }

    return {message: message, erro: erro}
  }

  return { handleErrorSendleaf }
}

