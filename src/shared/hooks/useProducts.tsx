import { useCallback, useState } from 'react';

import { INITIAL_STATE_PRODUCT, INITIAL_STATE_SEARCH } from '../components/Products/InicialStateProd';
import ProductServices from '../../services/ProductService';
import { IProducts, ISearch } from '../../interface/IProducts';



export function UseProducts() {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState<ISearch>(INITIAL_STATE_SEARCH)
  const [returnedProduct, setReturnedProduct] = useState<IProducts[]>()
  const [produtos, setProdutos] = useState<IProducts>((INITIAL_STATE_PRODUCT));

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setProdutos({ ...produtos, [e.target.name]: e.target.value })
  }, [produtos]);

  const saveProducts = async () => {
    try {
      const result = await ProductServices.save(produtos as IProducts)
      setProdutos({ ...produtos, id: result.id })
    } catch (error: any) {
      return (error)
    }
  }

  const update = async () => {
    try {
      await ProductServices.update(produtos as IProducts)
      console.log(update)
    } catch (error: any) {
      return error
    }


  }

  const deleteProduct = async (id: string | undefined) => {
    try {
      await ProductServices.delete(id)
      await searchProduct()
    } catch (error: any) {
      return console.log(error)
    }
  }

  const searchProduct = async () => {
    try {
      const result = await ProductServices.search(search.text, search.page)
      setReturnedProduct(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  const findById = async (id: string | undefined) => {
    try {
      const result = await ProductServices.findById(id)
      setProdutos(result)
    } catch (error: any) {
      return (error)
    }
  }

  const handleSaveOrUpdate = async () => {
    produtos?.id === "" ? saveProducts() : update()
  }

  return { produtos, setProdutos, deleteProduct, search, setSearch, searchProduct, returnedProduct, handleShow, handleClose, handleChange, findById, handleSaveOrUpdate, show }
}
