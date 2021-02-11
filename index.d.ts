
declare class Firstrade {
    login(credential: Firstrade.Credential): Promise<Firstrade.StorageSnapshot>
    getBalance(credential: Firstrade.Credential): Promise<Firstrade.Balance>
    getTradeHistory(credential: Firstrade.Credential): Promise<Firstrade.TradeRecord[]>
    getPosition(credential: Firstrade.Credential): Promise<Firstrade.PositionRecord[]>
}
declare namespace Firstrade {
    type StorageSnapshot = {
        cookies: Object[];
        origins: Object[];
    };
    type Credential = {
        username: string;
        password: string;
        pin: string;
    } | StorageSnapshot;
    type Balance = {
        totalValue: number;
        buyingpower: number;
        cashBuyingpower: number;
        settledFunds: number;
        nonMarginFunds: number;
        totalAccountValue: number;
        totalNetchangeValue: number;
        totalNetchangePercentValue: number;
        cashMoneyLock: number;
        cashBalance: number;
        moneyMarketFund: number;
    }
    type TradeRecord = {
        date: Date
        transaction: string | "DEPOSIT"
        quantity: string
        description: string
        symbol: string
        acctType: string
        price: number
        amount: number
    }
    type PositionRecord = {
        symbol: string
        quantity: number
        last: number
        "change($)": number
        "change(%)": number
        "market value": number
        "unit cost": number
        "total cost": number
        "gain/loss($)": number
        "gain/loss(%)": number
    }
}

export = Firstrade;