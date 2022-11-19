import { createContext } from "react";
import { UseLeaf } from "../../hooks/useLeaf";

interface AuxProps {
  children: JSX.Element[] | JSX.Element
}

const LeafContext = createContext({})

function LeafProvider({ children }: AuxProps) {
  const { getClientesFromSelectBox, cliente, getProductsFromSelectBox, produtoSelectBox, produtoLeaf, setProdutoLeaf, pedido, setPedido, handleChange, handleChangeProductLeaf, responseWebmania, returnedProductsLeaf, handleSaveOrUpdate, addProduct, deleteProduct, onChangeCliente, cpfCnpjCliente, handleTotalValueProducts, sendLeaf } = UseLeaf()

  return (
    <LeafContext.Provider value={{ cliente, getClientesFromSelectBox, getProductsFromSelectBox, produtoSelectBox, produtoLeaf, setProdutoLeaf, pedido, setPedido, handleChange, handleChangeProductLeaf, responseWebmania, returnedProductsLeaf, handleSaveOrUpdate, addProduct, deleteProduct, onChangeCliente, cpfCnpjCliente, handleTotalValueProducts, sendLeaf }}>
      {children}
    </LeafContext.Provider>
  )
}


export { LeafProvider, LeafContext }