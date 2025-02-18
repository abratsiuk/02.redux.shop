import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../store/root-reducer';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
