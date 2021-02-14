export interface IProduct {
    id: number,
    name: string,
    description: string;
    rating: 0 | 1 | 2 | 3 | 4 | 5;
    image: string;
    promo: boolean;
    active: boolean
}

