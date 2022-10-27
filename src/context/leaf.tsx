import { createContext } from "react";
import Leaf from "./hooks/leafContext";

interface AuxProps {
  children: JSX.Element[] | JSX.Element
}

const LeafContext = createContext({})

function LeafProvider({ children }: AuxProps) {
  const { getClientesFromSelectBox, cliente, produto, setProduto, pedido, setPedido } = Leaf()

  return (
    <LeafContext.Provider value={{ cliente, getClientesFromSelectBox, produto, setProduto, pedido, setPedido }}>
      {children}
    </LeafContext.Provider>
  )
}


export { LeafProvider, LeafContext }