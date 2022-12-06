import { createContext } from "react";
import { UseImpostos } from "../../hooks/useImpostos";

interface AuxProps {
  children: JSX.Element[] | JSX.Element
}

const ImpostosContext = createContext({})

function ImpostosProvider({ children }: AuxProps) {
  const { impostos , setImpostos , handleChange , handleChangeIcms , handleChangeIpi , handleChangePis , handleChangeCofins , handleChangeIssqn , handleSaveOrUpdate , clearInputs } = UseImpostos()

  return (
    <ImpostosContext.Provider value={{ impostos , setImpostos , handleChange , handleChangeIcms , handleChangeIpi , handleChangePis , handleChangeCofins , handleChangeIssqn , handleSaveOrUpdate , clearInputs }}>
      {children}
    </ImpostosContext.Provider>
  )
}

export { ImpostosProvider , ImpostosContext }