export interface IPaginationLinks {
    first: string;
    last: string;
    next: string;
    previous: string;
}

export interface IPaginationInfo {
    totalItems: number;
    itemCount: number;
    itemsPerPage: string,
    totalPages: number,
    currentPage: string
}