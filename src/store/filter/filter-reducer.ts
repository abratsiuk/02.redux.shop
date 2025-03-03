import { FilterActions, FilterActionEnum } from './filter-actions';
import { IFilter } from '../../interfaces/IFilter';

interface IFilterState extends IFilter {}
const initialState: IFilter = {
    search: '',
    page: 1,
    mainType: [],
    displayType: [],
    rarity: [],
    series: [],
    banner: [],
    priority: [],
};

export const filterReducer = (
    state = initialState,
    action: FilterActions
): IFilterState => {
    switch (action.type) {
        case FilterActionEnum.CLEAR_FILTER:
            return initialState;
        case FilterActionEnum.CHANGE_FILTER:
            return action.payload;
        default:
            return state;
    }
};
