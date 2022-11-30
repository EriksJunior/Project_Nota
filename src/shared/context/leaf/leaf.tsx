import { createContext } from "react";
import { UseLeaf } from "../../hooks/useLeaf";

interface AuxProps {
  children: JSX.Element[] | JSX.Element
}

const LeafContext = createContext({})

function LeafProvider({ children }: AuxProps) {
  const { produtoLeaf, setProdutoLeaf, pedido, setPedido, handleChange, handleChangeProductLeaf, responseWebmania, returnedProductsLeaf, handleSaveOrUpdate, addProduct, deleteProduct, cpfCnpjCliente, handleTotalValueProducts, sendLeaf, handleShow, handleClose, show, searchLeaf, handleChangeSeachLeaf, search, resultSearchLeaf, findLeafById, deleteLeafAndProducts, handleTotalValueGeneralLeafInformation } = UseLeaf()

  return (
    <LeafContext.Provider value={{ produtoLeaf, setProdutoLeaf, pedido, setPedido, handleChange, handleChangeProductLeaf, responseWebmania, returnedProductsLeaf, handleSaveOrUpdate, addProduct, deleteProduct, cpfCnpjCliente, handleTotalValueProducts, sendLeaf, handleShow, handleClose, show, searchLeaf, handleChangeSeachLeaf, search, resultSearchLeaf, findLeafById, deleteLeafAndProducts, handleTotalValueGeneralLeafInformation }}>
      {children}
    </LeafContext.Provider>
  )
}


export { LeafProvider, LeafContext }