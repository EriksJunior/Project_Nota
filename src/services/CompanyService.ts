import { api } from '../utils/configs/api';
import { ICompany } from '../interface/ICompany';

class CompanyService {
    async save(dataCompany: ICompany){
        const { data } = await api.post('/company', dataCompany)
        return data
    }
}

export default new CompanyService()