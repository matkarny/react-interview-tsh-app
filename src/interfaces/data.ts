import { IProduct } from "./product";

export interface IProductsData {
    data: {
        items: IProduct[]
    }
    meta: {
        totalItems: number;
        itemCount: number;
        itemsPerPage: string,
        totalPages: number,
        currentPage: string

    }
    links: {
        first: string;
        last: string;
        next: string;
        previous: string;
    }
}