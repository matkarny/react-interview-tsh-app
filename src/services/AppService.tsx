import client from 'client/client'

class AppService {
    getProducts = async (limit: number, page: number, promo: boolean, active: boolean, search?: string) => {
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