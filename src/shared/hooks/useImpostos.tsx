import { useCallback, useState } from "react";

import ImpostosService from '../../services/ImpostosService';
import { IImpostos } from "../../interface/IImpostos";
import { INITIAL_STATE_IMPOSTOS } from "../initialStates/impostos";

export function UseImpostos() {
  const [impostos, setImpostos] = useState<IImpostos>(INITIAL_STATE_IMPOSTOS);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    console.log(impostos)
    setImpostos({ ...impostos, [e.target.name]: e.target.value })

  }, [impostos]);





  const saveImpostos = async () => {
    try {
      const result = await ImpostosService.save(impostos as IImpostos)
      setImpostos({ ...impostos, id: result.id })
      console.log(result)
    } catch (error: any) {
      console.log(error)

    }
  }

  const handleSaveOrUpdate = async () => {
    impostos?.id === "" ? saveImpostos() : "teste"
  }

  return { impostos, setImpostos, handleChange, handleSaveOrUpdate }
}