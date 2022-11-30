import { createContext } from "react";
import { useGlobal } from "../../hooks/useGlobal";


interface AuxProps {
  children: JSX.Element[] | JSX.Element
}

const GlobalContext = createContext({})

function GlobalProvider({ children }: AuxProps) {
  const { client, setClient, getClientesFromSelectBox, clientSelectBox } = useGlobal()

  return (
    <GlobalContext.Provider value={{client, setClient, getClientesFromSelectBox, clientSelectBox}}>
      {children}
    </GlobalContext.Provider>
  )
} 

export {GlobalProvider, GlobalContext}