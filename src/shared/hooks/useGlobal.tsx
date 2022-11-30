import { useState, useEffect } from "react";
import { ICliente } from "../../interface/ICliente";
import { INITIAL_STATE_CLIENTE } from "../context/client/initialState";

import ClienteService from "../../services/ClienteService";


export function useGlobal(){
  const [client, setClient] = useState<ICliente | ICliente[]>(INITIAL_STATE_CLIENTE);
  const [clientSelectBox, setClientSelectBox] = useState<ICliente[]>([])

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