import { api } from "../utils/configs/api";
import { PedidoLeaf, ProdutosLeaf } from "../interface/ILeaf";
class LeafService {
  async save(nota: PedidoLeaf) {
    const { data } = await api.post('/nota', nota)
    return data
  }

  async update(nota: PedidoLeaf) {
    await api.put(`/nota/${nota.id}`, nota)
  }

  async sendLeaf(id: string) {
    const { data } = await api.get(`/nota/send/${id}`)
    return data
  }

  async findLeafById(id: string) {
    const { data } = await api.get(`/nota/${id}`)
    return data
  }

  async addProduct(product: ProdutosLeaf) {
    await api.post('/nota-item', product)
  }

  async findLeafProductsByIdNota(id: string) {
    const { data } = await api.get(`/nota-item/${id}`)
    return data
  }

  async deleteProduct(id: string) {
    await api.delete(`/nota-item/${id}`)
  }
}

export default new LeafService()