import { api } from "../utils/configs/api";

class ImpostosService {
    async save(dataImpostos: any) {
        const { data } = await api.post('/impostos', dataImpostos)
        return data
    }

    async findAll(){
        const { data } = await api.get('/impostos')
        return data
    }

    async findById(id: string | undefined) {
        const { data } = await api.get(`/impostos/${id}`)
        return data
    }

    async getFromSelectBox() {
        const { data } = await api.get('/impostos')
        return data
    }
  }

  export default new ImpostosService()