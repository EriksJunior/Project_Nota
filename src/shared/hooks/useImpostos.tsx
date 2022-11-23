import { useCallback , useState } from "react";

import ImpostosService from '../../services/ImpostosService';
import { IImpostos } from "../../interface/IImpostos";
import { INITIAL_STATE_IMPOSTOS } from "../context/impostos/InicialState";

export function UseImpostos() {
  const [impostos , setImpostos] = useState<IImpostos>(INITIAL_STATE_IMPOSTOS);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) =>{
    setImpostos({ ...impostos, [e.target.name]: e.target.value })
  }, [impostos]);

  const saveImpostos = async () => {
    console.log("teste")
    try {
      const result = await ImpostosService.save (impostos as IImpostos)
      setImpostos({ ...impostos, id: result.id })
      console.log(result)
    } catch (error: any) {
      console.log(error)
    }
  }

  const handleSaveOrUpdate = async () => {
    impostos?.id === "" ? saveImpostos() : ""
  }

  return { impostos , setImpostos , handleChange , handleSaveOrUpdate }
}