export enum FundsActionEnum {
    CLEAR_FUNDS = '@@funds/CLEAR_FUNDS',
    DECREASE_FUNDS = '@@funds/DECREASE_FUNDS',
    INCREASE_FUNDS = '@@funds/INCREASE_FUNDS',
}

interface IClearFundsAction {
    type: FundsActionEnum.CLEAR_FUNDS;
}
interface IDecreaseFundsAction {
    type: FundsActionEnum.DECREASE_FUNDS;
    payload: number;
}
interface IIncreaseFundsAction {
    type: FundsActionEnum.INCREASE_FUNDS;
    payload: number;
}
export type FundsActions =
    | IClearFundsAction
    | IDecreaseFundsAction
    | IIncreaseFundsAction;

export const clearFunds = (): IClearFundsAction => ({
    type: FundsActionEnum.CLEAR_FUNDS,
});
export const decreaseFunds = (amount: number): IDecreaseFundsAction => ({
    type: FundsActionEnum.DECREASE_FUNDS,
    payload: amount,
});
export const increaseFunds = (amount: number): IIncreaseFundsAction => ({
    type: FundsActionEnum.INCREASE_FUNDS,
    payload: amount,
});
