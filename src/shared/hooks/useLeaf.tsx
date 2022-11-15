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
  const [returnedProductsLeaf, setReturnedProductsLeaf] = useState<ProdutosLeaf[]>([])
  const [responseWebmania, setResponseWebmania] = useState<IResponseWebmaniaLeaf>(INITIAL_VALUE_RESPONSE_WEBMANIA)


  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    setPedido({ ...pedido, [e.currentTarget.name]: e.currentTarget.value })
  }, [pedido])


  const handleChangeProductLeaf = useCallback((e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    setProdutoLeaf({ ...produtoLeaf, [e.currentTarget.name]: e.currentTarget.value })
  }, [produtoLeaf])

  const getClientesFromSelectBox = async () => {
    try {
      const { data } = await ClienteService.getFromSelectBox()
      setCliente(data)
    } catch (error) {
      console.log(error)
    }
  }

  const getProductsFromSelectBox = async () => {
    try {
      const { data } = await ProductService.getFromSelectBox()
      setProdutoSelectBox(data)
    } catch (error) {
      console.log(error)
    }
  }

  const saveLeaf = async () => {
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

  const updateLeaf = async () => {
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

  const addProduct = async () => {
    try {
      await LeafService.addProduct({
        ...produtoLeaf,
        idNota: pedido.id,
        subtotal: produtoLeaf.subtotal.replace(".", "").replace(",", "."),
        total: produtoLeaf.total.replace(".", "").replace(",", "."),
        desconto: produtoLeaf.desconto.replace(".", "").replace(",", ".")
      })

      await findLeafProductsByIdNota()

      toast("Produto adicionado! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error: any) {
      toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const findLeafProductsByIdNota = async () => {
    try {
      const result = await LeafService.findLeafProductsByIdNota(pedido.id)
      console.log(result)
      setReturnedProductsLeaf(result.noteItem)
    } catch (error: any) {
      toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  return { getClientesFromSelectBox, cliente, getProductsFromSelectBox, produtoSelectBox, pedido, setPedido, produtoLeaf, setProdutoLeaf, handleChange, handleChangeProductLeaf, responseWebmania, returnedProductsLeaf, handleSaveOrUpdate, addProduct }
}
