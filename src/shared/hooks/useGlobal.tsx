import { useState, useEffect } from "react";
import { ICliente } from "../../interface/ICliente";
import { INITIAL_STATE_CLIENTE } from "../initialStates/client";

import ClienteService from "../../services/ClienteService";
import { IProducts } from "../../interface/IProducts";
import { INITIAL_STATE_PRODUCT } from "../initialStates/product";


export function useGlobal(){
  const [client, setClient] = useState<ICliente | ICliente[]>(INITIAL_STATE_CLIENTE);
  const [clientSelectBox, setClientSelectBox] = useState<ICliente[]>([])
  const [produtos, setProdutos] = useState<IProducts>((INITIAL_STATE_PRODUCT));

  useEffect(() =>{
    getClientesFromSelectBox()
  }, [])

  const getClientesFromSelectBox = async () => {
    try {
      const { data } = await ClienteService.getFromSelectBox()
      setClientSelectBox(data)
    } catch (error) {
      console.log(error)
    }
  }

  return{client, setClient, getClientesFromSelectBox, clientSelectBox}
}