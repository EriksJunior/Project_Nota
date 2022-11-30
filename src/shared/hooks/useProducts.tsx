import { useCallback, useState } from 'react';

import { INITIAL_STATE_PRODUCT, INITIAL_STATE_SEARCH } from '../initialStates/product';
import ProductServices from '../../services/ProductService';
import { IProducts, ISearch } from '../../interface/IProducts';

import { toast } from "react-toastify";


export function UseProducts() {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState<ISearch>(INITIAL_STATE_SEARCH)
  const [returnedProduct, setReturnedProduct] = useState<IProducts[]>()
  const [produtos, setProdutos] = useState<IProducts>((INITIAL_STATE_PRODUCT));
  const [alterTab , setAlterTab] = useState<string>("Pesquisar")

  const handleClose = () =>{
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
        valor: produtos.valor.replace(".", "").replace(",", "."),
        valorVenda: produtos.valorVenda.toString().replace(".", "").replace(".", "").replace(",", ".")
        })

      toast ("Produto salvo com sucesso! ✅" ,
       {position: toast.POSITION.TOP_RIGHT} );
    } catch (error: any) {
      toast.error(error ,
        {position: toast.POSITION.TOP_RIGHT})
    }
  }

  const update = async () => {
    try {
      await ProductServices.update(produtos as IProducts)
      toast("Produto atualizado com sucesso!✅" , 
      {position: toast.POSITION.TOP_RIGHT },)
    } catch (error: any) {
      toast.error( error , 
        {position: toast.POSITION.TOP_RIGHT})
    }


  }

  const deleteProduct = async (id: string | undefined) => {
    try {
      await ProductServices.delete(id)
      await searchProduct()

      toast("Produto deletado com sucesso!" , 
      {position: toast.POSITION.TOP_RIGHT})
    } catch (error: any) {
      toast.error(error , 
        {position: toast.POSITION.TOP_RIGHT})
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

  return { produtos, setProdutos, deleteProduct, alterTab , setAlterTab , clearInputs , search, setSearch, searchProduct, returnedProduct, handleShow, handleClose, handleChange, findById, handleSaveOrUpdate, show }
}
