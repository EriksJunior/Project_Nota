import { useCallback, useState } from "react";

import ImpostosService from '../../services/ImpostosService';
import { IImpostos } from "../../interface/IImpostos";
import { INITIAL_STATE_IMPOSTOS } from "../initialStates/impostos";
import { toast } from "react-toastify";

export function UseImpostos() {
  const [impostos, setImpostos] = useState<IImpostos>(INITIAL_STATE_IMPOSTOS);
  const [ icms , setIcms] = useState<IImpostos>(INITIAL_STATE_IMPOSTOS);
  const [ ipi , setIpi] = useState<IImpostos>(INITIAL_STATE_IMPOSTOS);
  const [ pis , setPis] = useState<IImpostos>(INITIAL_STATE_IMPOSTOS);
  const [ cofins , setCofins] = useState<IImpostos>(INITIAL_STATE_IMPOSTOS);
  const [ issqn , setIssqn] = useState<IImpostos>(INITIAL_STATE_IMPOSTOS);


  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    // console.log(impostos)
    setImpostos({ ...impostos, [e.target.name]: e.target.value })

  }, [impostos]);

  const handleChangeIcms = useCallback((e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    setIcms({ ...icms , [e.target.name]: e.target.value})
    console.log(icms)

  }, [impostos]);

  const handleChangeIpi = useCallback((e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    console.log(ipi)
    setIpi({ ...impostos, [e.target.name]: e.target.value })

  }, [impostos]);


  const saveImpostos = async () => {
    try {
      const result = await ImpostosService.save(impostos as IImpostos)
      setImpostos({ ...impostos , ...icms, id: result.id })
      toast("Salvo com sucesso!",
      { position: toast.POSITION.TOP_RIGHT }
      );
      console.log(result)
    } catch (error: any) {
      toast.error(error , 
        { position: toast.POSITION.TOP_RIGHT }
        )
    }
  }

  const handleSaveOrUpdate = async () => {
    impostos?.id === "" ? saveImpostos() : "teste"
  }

  const clearInputs = () => {
    setImpostos(INITIAL_STATE_IMPOSTOS)
  }

  return { impostos, setImpostos, handleChange, handleChangeIcms , handleChangeIpi , handleSaveOrUpdate , clearInputs }
}