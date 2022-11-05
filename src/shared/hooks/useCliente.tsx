import { useState, useCallback } from 'react';

import { INITIAL_STATE_CLIENTE, INITIAL_STATE_SEARCH } from '../components/Client/initialState';
import ClienteService from '../../services/ClienteService'
import { toast } from "react-toastify";

import { ICliente, ISearch } from '../../interface/ICliente';

export function UseCliente() {
  const [show, setShow] = useState(false);
  const [client, setClient] = useState<ICliente>(INITIAL_STATE_CLIENTE);
  const [search, setSearch] = useState<ISearch>(INITIAL_STATE_SEARCH)
  const [returnedClient, setReturnedClient] = useState<ICliente[]>()

  const handleClose = () => {
    clearAllInputs()
    setShow(false)
  };

  const handleShow = () => {
    clearAllInputs()
    setShow(true)
  };

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    setClient({ ...client, [e.target.name]: e.target.value })
  }, [client]);

  const save = async () => {
    try {
      const result = await ClienteService.save(client as ICliente)
      setClient({ ...client, id: result.id })
      toast("Salvo com sucesso! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error: any) {
      toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const update = async () => {
    try {
      await ClienteService.update(client as ICliente)

      toast("Atualizado com sucesso! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error: any) {
      toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const findById = async (id: string | undefined) => {
    try {
      const result = await ClienteService.findById(id)
      setClient(result)
    } catch (error: any) {
      return toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const searchClient = async () => {
    try {
      const result = await ClienteService.search(search.text, search.page)
      setReturnedClient(result.data)
    } catch (error: any) {
      return toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const handleSaveOrUpdate = async () => {
    client?.id === "" ? save() : update()
  }

  const clearAllInputs = () => {
    setClient(INITIAL_STATE_CLIENTE)
  }

  return { client, setClient, search, setSearch, searchClient, findById, returnedClient, clearAllInputs, handleShow, handleClose, handleChange, handleSaveOrUpdate, show }
}