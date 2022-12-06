import React, { useCallback, useState } from "react";

import ImpostosService from '../../services/ImpostosService';
import { Iicms, IPis , IIpi , ICofins , IIssqn , IImpostos } from "../../interface/IImpostos";
import { INITIAL_STATE_IMPOSTOS } from "../initialStates/impostos";
import { toast } from "react-toastify";

export function UseImpostos() {
  const [impostos, setImpostos] = useState<IImpostos>(INITIAL_STATE_IMPOSTOS);
  const [ icms , setIcms] = useState<Iicms>(INITIAL_STATE_IMPOSTOS.icms);
  const [ ipi , setIpi] = useState<IIpi>(INITIAL_STATE_IMPOSTOS.ipi);
  const [ pis , setPis] = useState<IPis>(INITIAL_STATE_IMPOSTOS.pis);
  const [ cofins , setCofins] = useState<ICofins>(INITIAL_STATE_IMPOSTOS.cofins);
  const [ issqn , setIssqn] = useState<IIssqn>(INITIAL_STATE_IMPOSTOS.issqn);


  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    // console.log(impostos)
    setImpostos({ ...impostos, [e.target.name]: e.target.value })
  }, [impostos]);

  const handleChangeIcms = useCallback((e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    setIcms({ ...icms , [e.target.name]: e.target.value})
  }, [icms]);

  const handleChangeIpi = useCallback((e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    setIpi({ ...ipi, [e.target.name]: e.target.value })
  }, [ipi]);

  const handleChangePis = useCallback((e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    setPis({ ...pis , [e.target.name]: e.target.value })
  }, [pis]);

  const handleChangeCofins = useCallback((e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    setCofins({ ...cofins , [e.target.name]: e.target.value })
  }, [cofins]);

  const handleChangeIssqn = useCallback((e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    setIssqn({ ...issqn , [e.target.name]: e.target.value })
  }, [issqn]);

  const saveImpostos = async () => {
    try {
      const result = await ImpostosService.save(impostos as IImpostos)
      setImpostos({ ...impostos , ...icms, id: result.id })
      toast("Salvo com sucesso!",
      { position: toast.POSITION.TOP_RIGHT }
      );
      console.log(impostos)
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

  return { impostos, setImpostos, handleChange, handleChangeIcms , handleChangePis , handleChangeIpi , handleChangeCofins , handleChangeIssqn , handleSaveOrUpdate , clearInputs }
}