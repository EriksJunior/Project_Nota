import { createContext } from "react";
import { UseLeaf } from "../../hooks/useLeaf";

interface AuxProps {
  children: JSX.Element[] | JSX.Element
}

const LeafContext = createContext({})

function LeafProvider({ children }: AuxProps) {
  const { getClientesFromSelectBox, cliente, getProductsFromSelectBox, produtoSelectBox, produtoLeaf, setProdutoLeaf, pedido, setPedido, handleChange, handleChangeProductLeaf, responseWebmania, returnedProductsLeaf, handleSaveOrUpdate, addProduct, deleteProduct, onChangeCliente, cpfCnpjCliente, handleTotalValueProducts, sendLeaf, handleShow, handleClose, show, searchLeaf, handleChangeSeachLeaf, search, resultSearchLeaf, findLeafById, deleteLeafAndProducts } = UseLeaf()

  return (
    <LeafContext.Provider value={{ cliente, getClientesFromSelectBox, getProductsFromSelectBox, produtoSelectBox, produtoLeaf, setProdutoLeaf, pedido, setPedido, handleChange, handleChangeProductLeaf, responseWebmania, returnedProductsLeaf, handleSaveOrUpdate, addProduct, deleteProduct, onChangeCliente, cpfCnpjCliente, handleTotalValueProducts, sendLeaf, handleShow, handleClose, show, searchLeaf, handleChangeSeachLeaf, search, resultSearchLeaf, findLeafById, deleteLeafAndProducts }}>
      {children}
    </LeafContext.Provider>
  )
}


export { LeafProvider, LeafContext }