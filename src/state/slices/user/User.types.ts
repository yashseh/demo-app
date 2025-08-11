export interface IUserInvestments {
    id: string;
    name: string;
    email: string;
}

export interface IUserBasketsResponse {
    status: string;
    code: number;
    count: number;
    data: IUserBasket[];
}

export interface IUserBasket {
    id: string;
    name: string;
    risk: string;
    label: string;
    oneDayChangePct: number;
    currentValue: number;
    description: string;
    holdings: IUserBasketHolding[];
}

export interface IUserBasketHolding {
    symbol: string;
    name: string;
    weight: number;
    price: number;
    changePct: number;
}
