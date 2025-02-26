import { Dispatch } from 'redux';

export enum FundsActionEnum {
    SET_FUNDS = '@@funds/SET_FUNDS',
    CLEAR_FUNDS = '@@funds/CLEAR_FUNDS',
    DECREASE_FUNDS = '@@funds/DECREASE_FUNDS',
    INCREASE_FUNDS = '@@funds/INCREASE_FUNDS',
}

interface ISetFundsAction {
    type: FundsActionEnum.SET_FUNDS;
    payload: number;
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
    | ISetFundsAction
    | IClearFundsAction
    | IDecreaseFundsAction
    | IIncreaseFundsAction;

const setFundsAction = (amount: number): ISetFundsAction => ({
    type: FundsActionEnum.SET_FUNDS,
    payload: amount,
});
export const setFunds = () => (dispatch: Dispatch<FundsActions>) => {
    let randomFunds = new Date().getSeconds() * 100;
    randomFunds = randomFunds < 1000 ? 1000 : randomFunds;
    dispatch(setFundsAction(randomFunds));
};

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
