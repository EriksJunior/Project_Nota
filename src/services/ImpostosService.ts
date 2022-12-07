import { api } from "../utils/configs/api";
import { IImpostos , Iicms } from '../interface/IImpostos';

class ImpostosService {
    async save(dataImpostos: any) {
        console.log(dataImpostos)
        const { data } = await api.post('/impostos', dataImpostos)
        return data

    }
  }

  export default new ImpostosService()