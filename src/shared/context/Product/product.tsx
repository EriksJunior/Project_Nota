import { createContext } from "react";
import { UseProducts } from "../../hooks/useProducts";

interface AuxProps {
  children: JSX.Element[] | JSX.Element
}

const ProductContext = createContext({})

function ProductProvider({ children }: AuxProps) {
  const { produtos , deleteProduct , setProdutos, handleChange, findById, handleSaveOrUpdate, handleClose, handleShow, returnedProduct, search, searchProduct, setSearch, show } = UseProducts()

  return (
    <ProductContext.Provider value={{ produtos , deleteProduct , setProdutos, handleChange, findById, handleSaveOrUpdate, handleClose, handleShow, returnedProduct, search, searchProduct, setSearch, show }}>
      {children}
    </ProductContext.Provider>
  )
}


export { ProductProvider, ProductContext }