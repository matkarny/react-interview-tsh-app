import { useContext, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import AppService from 'services/AppService';
import { AppContext } from 'store/AppStore';
import ProductAction from 'action/productAction';
import notification from 'antd/lib/notification/index';
import { IProductsData } from 'interfaces/data';
import { IProductContext } from 'interfaces/store';

export const useFetchProducts = () => {
    const productsToFind = isMobile ? 4 : 8
    const { state, dispatch } = useContext<IProductContext>(AppContext);
    const { search, active, promo, page } = state
    useEffect(() => {
        const getProducts = async (limit: number, page: number, promo: boolean, active: boolean, search?: string) => {
            await AppService.getProducts(limit, page, promo, active, search).then((res: IProductsData) => {
                dispatch({ type: 'fetchProducts', payload: res })
            }
            ).catch(e => {
                notification.error({
                    message: 'Fetch products failed',
                    placement: 'bottomRight'
                })
                dispatch({ type: 'backToInit' })
            })
        }
            getProducts(productsToFind, page, promo, active, search)
        
    }, [search, active, promo, page, productsToFind])



    const setActiveState = () => dispatch({ type: ProductAction.setActiveState })
    const setPromoState = () => dispatch({ type: ProductAction.setPromoState })
    const setSearch = (search: string) => dispatch({ type: ProductAction.setSearch, payload: search })
    const setPage = (page: number) => dispatch({ type: ProductAction.setPage, payload: page })

    return { setActiveState, setPromoState, setPage, setSearch }
}

export default useFetchProducts