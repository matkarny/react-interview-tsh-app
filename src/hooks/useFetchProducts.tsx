
import { IPaginationLinks } from 'interfaces/pagination';
import { IProduct } from 'interfaces/product';
import React, { useState, useEffect } from 'react';
import AppService from 'services/AppService';
import notification from 'antd/lib/notification/index';
import { IProductsData } from 'interfaces/data';

export const useFetchProducts = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [products, setProducts] = useState<IProduct[] | null>(null)
    const [paginationLinks, setPaginationLinks] = useState<IPaginationLinks | null>(null)

    const getProducts = async (limit: number, page: number, promo: boolean, active: boolean, search?: string) => {
        setLoading(true)
        await AppService.getProducts(limit, page, promo, active, search).then((res: IProductsData )=> {
            const { items, links } = res
            setProducts(items)
            setPaginationLinks(links)
        }
        ).catch(e => {
            notification.error({
                message: 'Fetch products failed',
                placement: 'bottomRight'
            })
        }).finally(() => {
            setLoading(false)
        })
    }

    return { loading, products, paginationLinks, getProducts }
}