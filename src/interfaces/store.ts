import { IPaginationInfo } from "./pagination";
import { IProduct } from "./product";

export interface IProductStateContext {
    loading: boolean
    products: IProduct[] | null
    paginationInfo: IPaginationInfo | null,
    promo: boolean,
    active: boolean,
    search: string,
    page: number

}

export type IProductContext = {
    state: IProductStateContext,
    dispatch: React.Dispatch<any>
}