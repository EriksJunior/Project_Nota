import { useState, useEffect } from "react";
import { ICliente } from "../../interface/ICliente";
import { INITIAL_STATE_CLIENTE } from "../initialStates/client";

import ClienteService from "../../services/ClienteService";
import { IProducts } from "../../interface/IProducts";
import { INITIAL_STATE_PRODUCT } from "../initialStates/product";
import ProductService from "../../services/ProductService";
import { INITIAL_STATE_REF } from "../initialStates/impostos";
import { IRefFromTable } from "../../interface/IImpostos";
import ImpostosService from "../../services/ImpostosService";


export function useGlobal(){
  const [client, setClient] = useState<ICliente | ICliente[]>(INITIAL_STATE_CLIENTE);
  const [clientSelectBox, setClientSelectBox] = useState<ICliente[]>([])
  const [produtos, setProdutos] = useState<IProducts>((INITIAL_STATE_PRODUCT));
  const [produtoSelectBox, setProdutoSelectBox] = useState<IProducts[]>([])
  const [refFromTable, setRefFromTable] = useState<IRefFromTable[]>([INITIAL_STATE_REF]);
  const [refSelectBox, setrefSelectBox] = useState<IRefFromTable[]>([])
  const [loading, setLoading] = useState(false);


  useEffect(() =>{
    getClientesFromSelectBox()
    getProductsFromSelectBox()
    getRefFromSelectBox()
  }, [])

  useEffect(() =>{
    getClientesFromSelectBox()
  }, [client])

  useEffect(() =>{
    getProductsFromSelectBox()
  }, [produtos])

  useEffect(() =>{
    getRefFromSelectBox()
  }, [refFromTable])

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

  const getRefFromSelectBox = async () => {
    try {
      const { data } = await ImpostosService.getFromSelectBox()
      setrefSelectBox(data)
    } catch (error) {
      console.log(error)
    }
  }

  return{client, setClient, getClientesFromSelectBox, clientSelectBox, produtos, setProdutos, getProductsFromSelectBox, produtoSelectBox,refFromTable, setRefFromTable , refSelectBox, setrefSelectBox , loading, setLoading}
}