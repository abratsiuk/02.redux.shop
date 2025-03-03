import { RootState } from '../root-reducer';
import { IFilter } from '../../interfaces/IFilter';

export const selectFilter = (state: RootState): IFilter => state.filter;
