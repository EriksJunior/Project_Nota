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

  async addProduct(product: ProdutosLeaf) {
    await api.post('/nota-item', product)
  }
}

export default new LeafService()