import { RootState } from '../root-reducer';

export const selectFunds = (state: RootState): number => state.funds.amount;
