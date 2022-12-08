import { useCallback, useContext, useState } from 'react';

import { INITIAL_STATE_PRODUCT, INITIAL_STATE_SEARCH } from '../initialStates/product';
import ProductServices from '../../services/ProductService';
import { IProducts, ISearch } from '../../interface/IProducts';

import { toast } from "react-toastify";
import { GlobalContext } from '../context/global/global';



export function UseProducts() {
  const { produtos, setProdutos, getProductsFromSelectBox } = useContext(GlobalContext) as { produtos: IProducts, setProdutos: (value: IProducts) => void, getProductsFromSelectBox: () => void }

  const [show, setShow] = useState(false);
  const [search, setSearch] = useState<ISearch>(INITIAL_STATE_SEARCH)
  const [returnedProduct, setReturnedProduct] = useState<IProducts[]>()
  const [alterTab, setAlterTab] = useState<string>("Pesquisar")

  const handleClose = () => {
    setShow(false)
    setAlterTab("Pesquisar")
    clearInputs()
  };
  const handleShow = () => {
    setShow(true)
    setAlterTab("Pesquisar")
    clearInputs()
  };


  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setProdutos({ ...produtos, [e.target.name]: e.target.value })
  }, [produtos]);

  const saveProducts = async () => {
    try {
      const result = await ProductServices.save(produtos as IProducts)
      setProdutos({
        ...produtos,
        id: result.id,
        valor: produtos.valor.toString().replace(".", "").replace(".", "").replace(",", "."),
        valorVenda: produtos.valorVenda.toString().replace(".", "").replace(".", "").replace(",", ".")
      })
      
      toast("Produto salvo com sucesso! ✅",
        { position: toast.POSITION.TOP_RIGHT });
    } catch (error: any) {
      toast.error(error?.response?.data?.erros,
        { position: toast.POSITION.TOP_RIGHT })
    }
  }

  const update = async () => {
    try {
      const formatValueTotal = formatValue()
      await ProductServices.update({...produtos , valor: formatValueTotal.valor, valorVenda: formatValueTotal.valorVenda});
      toast("Produto atualizado com sucesso!✅",
        { position: toast.POSITION.TOP_RIGHT })
    } catch (error: any) {
      toast.error(error,
        { position: toast.POSITION.TOP_RIGHT })
    }
  }

  const formatValue = () => {
    let valor = produtos.valor.toString().replace(".", "").replace(",", ".")
    let valorVenda = produtos.valorVenda.toString().replace(".","").replace(",",".")
    return{valor , valorVenda}
  }

  const deleteProduct = async (id: string) => {
    try {
      await ProductServices.delete(id)
      await searchProduct()
      getProductsFromSelectBox()
      toast("Produto deletado com sucesso!",
        { position: toast.POSITION.TOP_RIGHT })
    } catch (error: any) {
      toast.error(error,
        { position: toast.POSITION.TOP_RIGHT })
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
      setAlterTab("Cadastro")
    } catch (error: any) {
      return (error)
    }
  }

  const handleSaveOrUpdate = async () => {
    produtos?.id === "" ? saveProducts() : update()
  }

  const clearInputs = () => {
    setProdutos(INITIAL_STATE_PRODUCT)
  }

  return { deleteProduct, alterTab, setAlterTab, clearInputs, search, setSearch, searchProduct, returnedProduct, handleShow, handleClose, handleChange, findById, handleSaveOrUpdate, show }
}
