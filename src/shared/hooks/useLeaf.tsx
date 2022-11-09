import { useState, useCallback } from "react";
import { ICliente } from "../../interface/ICliente";
import { IProducts } from "../../interface/IProducts";
import { ProdutosLeaf, PedidoLeaf, IResponseWebmaniaLeaf } from "../../interface/ILeaf"

import ClienteService from "../../services/ClienteService";
import ProductService from "../../services/ProductService";

import { INITIAL_VALUE_PEDIDO, INITIAL_VALUE_PRODUTOS, INITIAL_VALUE_RESPONSE_WEBMANIA } from "../context/leaf/initialStates/initialStateLeaf";

export function UseLeaf() {
  const [cliente, setCliente] = useState<ICliente[]>([])
  const [produtoSelectBox, setProdutoSelectBox] = useState<IProducts[]>([])
  const [pedido, setPedido] = useState<PedidoLeaf>(INITIAL_VALUE_PEDIDO)
  const [produtoLeaf, setProdutoLeaf] = useState<ProdutosLeaf>(INITIAL_VALUE_PRODUTOS)
  const [responseWebmania, setResponseWebmania] = useState<IResponseWebmaniaLeaf>(INITIAL_VALUE_RESPONSE_WEBMANIA)


  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    setPedido({ ...pedido, [e.currentTarget.name]: e.currentTarget.value })
  }, [pedido])

  async function getClientesFromSelectBox() {
    try {
      const { data } = await ClienteService.getFromSelectBox()
      setCliente(data)
    } catch (error) {
      console.log(error)
    }
  }

  async function getProductsFromSelectBox() {
    try {
      const { data } = await ProductService.getFromSelectBox()
      setProdutoSelectBox(data)
    } catch (error) {
      console.log(error)
    }
  }

  return { getClientesFromSelectBox, cliente, getProductsFromSelectBox, produtoSelectBox, pedido, setPedido, produtoLeaf, setProdutoLeaf, handleChange, responseWebmania }
}
