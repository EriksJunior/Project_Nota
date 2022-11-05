import { api } from '../utils/configs/api';
import { ICliente } from '../interface/ICliente';
class ClienteService {
  async save(dataCliente: ICliente) {
    const { data } = await api.post('/customers', dataCliente)
    return data
  }

  async update(dataCliente: ICliente) {
    await api.put(`/customers/${dataCliente.id}`, dataCliente)
  }

  async delete(id: string | undefined) {
    await api.delete(`/customers/${id}`)
  }

  async getFromSelectBox() {
    const { data } = await api.get('/customers/combobox')
    return data
  }

  async findById(id: string | undefined) {
    const { data } = await api.get(`/customers/${id}`)
    return data
  }

  async search(q: string, page: number) {
    const { data } = await api.get(`customers?q=${q}&page=${page}`)
    return data
  }
}

export default new ClienteService()