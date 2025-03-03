import { FilterActions, FilterActionEnum } from './filter-actions';
import { IFilter } from '../../interfaces/IFilter';
import { getFilterTypeArray } from '../../utils/helpers';

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
        case FilterActionEnum.SET_FILTER:
            return action.payload;
        case FilterActionEnum.CHANGE_CHECKED:
            console.log('CHANGE_CHECKED');
            let filterType = getFilterTypeArray(state, action.payload.field);
            if (action.payload.checked) {
                filterType = [...filterType, action.payload.name];
            } else {
                filterType = filterType.filter(
                    (i) => i !== action.payload.name
                );
            }

            return { ...state, [action.payload.field]: [...filterType] };
        default:
            return state;
    }
};
