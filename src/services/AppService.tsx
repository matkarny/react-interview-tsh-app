import axios, { AxiosResponse } from 'axios'
import { IProductsData } from 'interfaces/data'

const client = axios.create({ baseURL: process.env.REACT_APP_API_URL })


class AppService {
    getProducts = async (limit: number, page: number, promo: boolean, active: boolean, search?: string): Promise<AxiosResponse<IProductsData>> => {
        const response = await client.get('/product', {
            params: {
                search,
                limit,
                page,
                promo,
                active
            }
        })
        return response?.data
    }
}

export default new AppService();