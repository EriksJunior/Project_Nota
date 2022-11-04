import { createContext } from "react";
import { UseCliente } from "../../hooks/useCliente";

interface AuxProps {
  children: JSX.Element[] | JSX.Element
}

const ClientContext = createContext({})

function ClientProvider({ children }: AuxProps) {
  const { client, setClient, handleChange } = UseCliente()

  return (
    <ClientContext.Provider value={{ client, setClient, handleChange }}>
      {children}
    </ClientContext.Provider>
  )
}


export { ClientProvider, ClientContext }