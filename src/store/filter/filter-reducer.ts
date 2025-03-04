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
            return initialState;
        case FilterActionEnum.SET_FILTER:
            return action.payload;
        case FilterActionEnum.CHANGE_CHECKED:
            console.log('CHANGE_CHECKED');

            let newValues: string[] = [];
            if (action.payload.checked) {
                newValues = [
                    ...state.type[action.payload.field],
                    action.payload.name,
                ];
            } else {
                newValues = state.type[action.payload.field].filter(
                    (i) => i !== action.payload.name
                );
            }
            const newType = {
                ...state.type,
                [action.payload.field]: newValues,
            };
            return { ...state, type: newType };

        default:
            return state;
    }
};
