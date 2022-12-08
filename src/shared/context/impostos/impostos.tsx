import { createContext } from "react";
import { UseImpostos } from "../../hooks/useImpostos";

interface AuxProps {
  children: JSX.Element[] | JSX.Element
}

const ImpostosContext = createContext({})

function ImpostosProvider({ children }: AuxProps) {
  const { impostos , setImpostos, icms , setIcms , ipi , setIpi , pis , setPis , cofins , setCofins , issqn , setIssqn , handleChange , handleChangeIcms , handleChangeIpi , handleChangePis , handleChangeCofins , handleChangeIssqn , handleSaveOrUpdate , findAll , refFromTable , clearInputs } = UseImpostos()

  return (
    <ImpostosContext.Provider value={{ impostos , setImpostos , icms , setIcms , ipi , setIpi , pis , setPis , cofins , setCofins , issqn , setIssqn , handleChange , handleChangeIcms , handleChangeIpi , handleChangePis , handleChangeCofins , handleChangeIssqn , handleSaveOrUpdate , findAll , refFromTable , clearInputs }}>
      {children}
    </ImpostosContext.Provider>
  )
}

export { ImpostosProvider , ImpostosContext }