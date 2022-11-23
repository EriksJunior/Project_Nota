import { api } from "../utils/configs/api";
import { IImpostos } from '../interface/IImpostos';

class ImpostosService {
    async save(dataImpostos: IImpostos) {
        const { data } = await api.post('/impostos', dataImpostos)
        return data
    }
  }

  export default new ImpostosService()