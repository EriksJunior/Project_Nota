import { api } from "../utils/configs/api";
import { IProducts } from '../interface/IProducts';

 class ProductServices {
    async save(dataProducts: IProducts ) {
        console.log(dataProducts);
        const { data } = await api.post('/products' , dataProducts )
        return data
    }
    
    async search(q: string, page: number) {
        const { data } = await api.get(`customers?q=${q}&page=${page}`)
        return data
      }
 }

 export default new ProductServices()