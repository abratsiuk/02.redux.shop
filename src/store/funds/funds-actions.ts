export enum FundsActionEnum {
    SET_FUNDS = '@@funds/SET_FUNDS',
    CLEAR_FUNDS = '@@funds/CLEAR_FUNDS',
    DECREASE_FUNDS = '@@funds/DECREASE_FUNDS',
    INCREASE_FUNDS = '@@funds/INCREASE_FUNDS',
}

interface ISetFunds {
    type: FundsActionEnum.SET_FUNDS;
    payload: number;
}
interface IClearFunds {
    type: FundsActionEnum.CLEAR_FUNDS;
}
interface IDecreaseFunds {
    type: FundsActionEnum.DECREASE_FUNDS;
    payload: number;
}
interface IIncreaseFunds {
    type: FundsActionEnum.INCREASE_FUNDS;
    payload: number;
}
export type FundsActions =
    | ISetFunds
    | IClearFunds
    | IDecreaseFunds
    | IIncreaseFunds;
