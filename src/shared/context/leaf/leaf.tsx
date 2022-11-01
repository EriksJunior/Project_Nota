import { createContext } from "react";
import { UseLeaf } from "../../hooks/useLeaf";

interface AuxProps {
  children: JSX.Element[] | JSX.Element
}

const LeafContext = createContext({})

function LeafProvider({ children }: AuxProps) {
  const { getClientesFromSelectBox, cliente, produto, setProduto, pedido, setPedido } = UseLeaf()

  return (
    <LeafContext.Provider value={{ cliente, getClientesFromSelectBox, produto, setProduto, pedido, setPedido }}>
      {children}
    </LeafContext.Provider>
  )
}


export { LeafProvider, LeafContext }