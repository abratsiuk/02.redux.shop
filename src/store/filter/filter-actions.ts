import { IFilter } from '../../interfaces/IFilter';

export enum FilterActionEnum {
    CLEAR_FILTER = '@@filter/CLEAR_FILTER',
    CHANGE_FILTER = '@@filter/CHANGE_FILTER',
}

interface IClearFilterAction {
    type: FilterActionEnum.CLEAR_FILTER;
}
interface IChangeFilterAction {
    type: FilterActionEnum.CHANGE_FILTER;
    payload: IFilter;
}

export type FilterActions = IClearFilterAction | IChangeFilterAction;

export const clearFilter = (): IClearFilterAction => ({
    type: FilterActionEnum.CLEAR_FILTER,
});
export const changeFilter = (filter: IFilter): IChangeFilterAction => ({
    type: FilterActionEnum.CHANGE_FILTER,
    payload: filter,
});
