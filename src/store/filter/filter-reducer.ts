import { FilterActions, FilterActionEnum } from './filter-actions';
import { IFilter } from '../../interfaces/IFilter';

interface IFilterState extends IFilter {}

const initialState: IFilter = {
    search: '',
    page: 1,
    type: {
        mainType: [],
        displayType: [],
        rarity: [],
        series: [],
        banner: [],
        priority: [],
    },
};

export const filterReducer = (
    state = initialState,
    action: FilterActions
): IFilterState => {
    switch (action.type) {
        case FilterActionEnum.CLEAR_FILTER:
            return {
                ...state,
                type: {
                    mainType: [],
                    displayType: [],
                    rarity: [],
                    series: [],
                    banner: [],
                    priority: [],
                },
            };
        case FilterActionEnum.SET_FILTER:
            return action.payload;
        case FilterActionEnum.CHANGE_CHECKED:
            //no changes -> no activity
            if (
                !action.payload.checked &&
                state.type[action.payload.field].length === 0
            ) {
                return state;
            }

            return {
                ...state,
                type: {
                    ...state.type,
                    [action.payload.field]: action.payload.checked
                        ? [
                              ...state.type[action.payload.field],
                              action.payload.name,
                          ]
                        : state.type[action.payload.field].filter(
                              (i) => i !== action.payload.name
                          ),
                },
            };
        case FilterActionEnum.SET_SEARCH:
            return {
                ...state,
                search: action.payload,
            };
        default:
            return state;
    }
};
