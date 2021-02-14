import { IPaginationLinks, IPaginationInfo } from "./pagination";
import { IProduct } from "./product";

export interface IProductsData {
    items: IProduct[],
    meta: IPaginationInfo,
    links: IPaginationLinks
}

