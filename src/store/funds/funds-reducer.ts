import { FundsActions, FundsActionEnum } from './funds-actions';

interface IFundsState {
    amount: number;
}
const initialState: IFundsState = {
    amount: 1000 + +`${new Date().getSeconds()}${new Date().getMinutes()}`,
};

export const fundsReducer = (
    state = initialState,
    action: FundsActions
): IFundsState => {
    switch (action.type) {
        case FundsActionEnum.SET_FUNDS:
            return { amount: action.payload };
        case FundsActionEnum.CLEAR_FUNDS:
            return { amount: 0 };
        case FundsActionEnum.DECREASE_FUNDS:
            return {
                amount:
                    state.amount > action.payload
                        ? state.amount - action.payload
                        : 0,
            };
        case FundsActionEnum.INCREASE_FUNDS:
            return { amount: state.amount + action.payload };
        default:
            return state;
    }
};
