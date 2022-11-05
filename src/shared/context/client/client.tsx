import { createContext } from "react";
import { UseCliente } from "../../hooks/useCliente";

interface AuxProps {
  children: JSX.Element[] | JSX.Element
}

const ClientContext = createContext({})

function ClientProvider({ children }: AuxProps) {
  const { client, setClient, handleChange, clearAllInputs, findById, handleSaveOrUpdate, handleClose, handleShow, returnedClient, search, searchClient, setSearch, show } = UseCliente()

  return (
    <ClientContext.Provider value={{ client, setClient, handleChange, clearAllInputs, findById, handleSaveOrUpdate, handleClose, handleShow, returnedClient, search, searchClient, setSearch, show }}>
      {children}
    </ClientContext.Provider>
  )
}


export { ClientProvider, ClientContext }