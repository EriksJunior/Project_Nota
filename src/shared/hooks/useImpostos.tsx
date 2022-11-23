import React, { useCallback , useState } from "react";

import ImpostosService from '../../services/ImpostosService';
import { IImpostos } from "../../interface/IImpostos";
import { INITIAL_STATE_IMPOSTOS } from "../context/impostos/InicialState";

export function UseImpostos() {
  const [impostos , setImpostos] = useState<IImpostos>();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) =>{
    // setImpostos({ ...impostos, [e.target.name]: e.target.value })
  }, [impostos]);

  const saveImpostos = async () => {
    try {
      const result = await ImpostosService.save (impostos as IImpostos)
      setImpostos({ ...impostos, id: result.id })
    } catch (error: any) {
      console.log(error)
    }
  }

  return { impostos , setImpostos , handleChange , saveImpostos }
}