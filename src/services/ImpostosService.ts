import { api } from "../utils/configs/api";
import { IImpostos , Iicms } from '../interface/IImpostos';

class ImpostosService {
    async save(dataImpostos: any) {
        const { data } = await api.post('/impostos', dataImpostos)
        return data
    }

    async findAll(id: string | undefined){
        const { data } = await api.get(`/impostos/${id}`)
        return data
    }
  }

  export default new ImpostosService()