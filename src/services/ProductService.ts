import { api } from "../utils/configs/api";
import { IProducts } from '../interface/IProducts';

class ProductServices {
    async save(dataProducts: IProducts) {
        console.log(dataProducts);
        const { data } = await api.post('/products', dataProducts)
        return data
    }

    async search(q: string, page: number) {
        const { data } = await api.get(`products?q=${q}&page=${page}`)
        return data
    }

    async update(dataProducts: IProducts) {
        console.log(dataProducts)
        await api.put(`/products/${dataProducts.id}`, dataProducts)
    }
}

export default new ProductServices()