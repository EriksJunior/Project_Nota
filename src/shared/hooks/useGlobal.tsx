import { useState, useEffect } from "react";
import { ICliente } from "../../interface/ICliente";
import { INITIAL_STATE_CLIENTE } from "../initialStates/client";

import ClienteService from "../../services/ClienteService";
import { IProducts } from "../../interface/IProducts";
import { INITIAL_STATE_PRODUCT } from "../initialStates/product";
import ProductService from "../../services/ProductService";


export function useGlobal(){
  const [client, setClient] = useState<ICliente | ICliente[]>(INITIAL_STATE_CLIENTE);
  const [clientSelectBox, setClientSelectBox] = useState<ICliente[]>([])
  const [produtos, setProdutos] = useState<IProducts>((INITIAL_STATE_PRODUCT));
  const [produtoSelectBox, setProdutoSelectBox] = useState<IProducts[]>([])


  useEffect(() =>{
    getClientesFromSelectBox()
    getProductsFromSelectBox()
  }, [])

  useEffect(() =>{
    getClientesFromSelectBox()
  }, [client])

  useEffect(() =>{
    getProductsFromSelectBox()
  }, [produtos])

  const getClientesFromSelectBox = async () => {
    try {
      const { data } = await ClienteService.getFromSelectBox()
      setClientSelectBox(data)
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

  return{client, setClient, getClientesFromSelectBox, clientSelectBox, produtos, setProdutos, getProductsFromSelectBox, produtoSelectBox}
}