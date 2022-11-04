import { useState } from "react";
import { ICliente } from "../../interface/ICliente";
import {ProdutosLeaf, PedidoLeaf} from "../../interface/ILeaf"
import ClienteService from "../../services/ClienteService";
import { INITIAL_VALUE_PEDIDO, INITIAL_VALUE_PRODUTOS } from "../context/leaf/initialStates/initialStateLeaf";

export function UseLeaf() {
  const [cliente, setCliente] = useState<ICliente[]>([])
  const [pedido, setPedido] = useState<PedidoLeaf>(INITIAL_VALUE_PEDIDO)
  const [produto, setProduto] = useState<ProdutosLeaf>(INITIAL_VALUE_PRODUTOS)

  async function getClientesFromSelectBox() {
    try {
      const { data } = await ClienteService.getFromSelectBox()
      setCliente(data)
    } catch (error) {
      console.log(error)
    }
  }
 
  return { getClientesFromSelectBox, cliente, pedido, setPedido, produto, setProduto }
}
