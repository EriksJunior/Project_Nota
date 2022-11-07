import { useCallback, useState } from 'react';

import { INITIAL_STATE_PRODUCT, INITIAL_STATE_SEARCH } from '../components/Products/InicialStateProd';
import ProductServices from '../../services/ProductService';
import { IProducts , ISearch } from '../../interface/IProducts';



export function UseProducts() {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState<ISearch>(INITIAL_STATE_SEARCH)
  const [returnedProduct, setReturnedProduct] = useState<IProducts[]>()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [produtos, setProdutos] = useState<IProducts>();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setProdutos({ ...produtos, [e.target.name]: e.target.value })
  }, [produtos]);

  const saveProducts = async () => {
    try{
    const result = await ProductServices.save(produtos as IProducts)
    setProdutos({ ...produtos , id: result.id })
    } catch(error: any){
      return (error)
    }
  }

  const updateProducts = async () => {
    await ProductServices.update(produtos as IProducts)
  }

  const searchProduct = async () => {
    try {
      const result = await ProductServices.search(search.text, search.page)
      setReturnedProduct(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSaveOrUpdate = async () => {
    produtos?.id === "" ? saveProducts() : updateProducts()
  }

  return{ produtos, search, setSearch, searchProduct, returnedProduct, handleShow, handleClose, handleChange , handleSaveOrUpdate , show}
}
