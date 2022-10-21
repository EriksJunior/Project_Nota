import { api } from '../utils/configs/api';
import { ICliente } from '../interface/ICliente';
export class Cliente {
  async save(dataCliente: ICliente) {
    const { data } = await api.post('/customers', dataCliente)
    return data
  }

  async update(dataCliente: ICliente) {
    await api.put(`/customers/${dataCliente.id}`, dataCliente)
  }

  async delete(id: string) {
    await api.delete(`/customers/${id}`)
  }

  async getFromSelectBox() {
    const { data } = await api.get('/customers/combobox')
    return data
  }

  async search(q: string, page: number) {
    const { data } = await api.get(`customers?q=${q}&page=${page}`)
    return data
  }
}