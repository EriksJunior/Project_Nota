import { createContext } from "react";
import { UseImpostos } from "../../hooks/useImpostos";

interface AuxProps {
  children: JSX.Element[] | JSX.Element
}

const ImpostosContext = createContext({})

function ImpostosProvider({ children }: AuxProps) {
  const { impostos , setImpostos , handleChange , handleSaveOrUpdate } = UseImpostos()

  return (
    <ImpostosContext.Provider value={{ impostos , setImpostos , handleChange , handleSaveOrUpdate }}>
      {children}
    </ImpostosContext.Provider>
  )
}

export { ImpostosProvider , ImpostosContext }