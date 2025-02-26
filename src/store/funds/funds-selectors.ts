import { RootState } from '../root-reducer';

export const selectFounds = (state: RootState): number => state.funds.amount;
