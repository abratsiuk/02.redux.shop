import { IFilter } from '../../interfaces/IFilter';

export enum FilterActionEnum {
    CLEAR_FILTER = '@@filter/CLEAR_FILTER',
    SET_FILTER = '@@filter/SET_FILTER',
    CHANGE_CHECKED = '@@filter/CHANGE_CHECKED',
}

interface IClearFilterAction {
    type: FilterActionEnum.CLEAR_FILTER;
}
interface ISetFilterAction {
    type: FilterActionEnum.SET_FILTER;
    payload: IFilter;
}

interface IChangeCheckedPayload {
    field: string;
    name: string;
    checked: boolean;
}
interface IChangeCheckedAction {
    type: FilterActionEnum.CHANGE_CHECKED;
    payload: IChangeCheckedPayload;
}

export type FilterActions =
    | IClearFilterAction
    | ISetFilterAction
    | IChangeCheckedAction;

export const clearFilter = (): IClearFilterAction => ({
    type: FilterActionEnum.CLEAR_FILTER,
});
export const setFilter = (filter: IFilter): ISetFilterAction => ({
    type: FilterActionEnum.SET_FILTER,
    payload: filter,
});
export const changeChecked = ({
    field,
    name,
    checked,
}: IChangeCheckedPayload): IChangeCheckedAction => ({
    type: FilterActionEnum.CHANGE_CHECKED,
    payload: { field, name, checked },
});
