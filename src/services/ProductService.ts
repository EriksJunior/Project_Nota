import { api } from "../utils/configs/api";
import { IProducts } from '../interface/IProducts';
class ProductServices {
    async save(dataProducts: IProducts) {
        const { data } = await api.post('/products', dataProducts)
        return data
    }

    async update(dataProducts: IProducts) {
        console.log(dataProducts)
        await api.put(`/products/${dataProducts.id}`, dataProducts)
    }

    async delete(id: string | undefined) {
        await api.delete(`/products/${id}`)
    }

    async getFromSelectBox() {
        const { data } = await api.get('/products')
        return data
    }

    async findById(id: string | undefined) {
        const { data } = await api.get(`/products/${id}`)
        return data
    }

    async search(q: string, page: number) {
        const { data } = await api.get(`/products?q=${q}&page=${page}`)
        return data
    }
}

export default new ProductServices()