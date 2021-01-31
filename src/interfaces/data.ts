import { IPaginationLinks } from "./pagination";
import { IProduct } from "./product";

export interface IProductsData {
    items: IProduct[]
    meta: {
        totalItems: number;
        itemCount: number;
        itemsPerPage: string,
        totalPages: number,
        currentPage: string

    }
    links: IPaginationLinks
}