import { useState, useCallback } from "react";
import { toast } from "react-toastify";

import ClienteService from "../../services/ClienteService";
import ProductService from "../../services/ProductService";
import LeafService from "../../services/LeafService";

import { ICliente } from "../../interface/ICliente";
import { IProducts } from "../../interface/IProducts";
import { ProdutosLeaf, PedidoLeaf, IResponseWebmaniaLeaf } from "../../interface/ILeaf"

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


  const handleChangeProductLeaf = useCallback((e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    setProdutoLeaf({ ...produtoLeaf, [e.currentTarget.name]: e.currentTarget.value })
  }, [produtoLeaf])

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

  async function saveLeaf() {
    try {
      const { id } = await LeafService.save(pedido)
      setPedido({ ...pedido, id: id })
      toast("Salvo com sucesso! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error: any) {
      toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  async function updateLeaf() {
    try {
      await LeafService.update(pedido);
      toast("Atualizado com sucesso! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error: any) {
      toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const handleSaveOrUpdate = async () => {
    pedido.id === "" ? saveLeaf() : updateLeaf()
  }

  return { getClientesFromSelectBox, cliente, getProductsFromSelectBox, produtoSelectBox, pedido, setPedido, produtoLeaf, setProdutoLeaf, handleChange, handleChangeProductLeaf, responseWebmania, handleSaveOrUpdate }
}
