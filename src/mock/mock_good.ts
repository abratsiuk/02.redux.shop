import { IGoodItem } from '../interfaces/IGoodItem';
import { goodsMock } from './mock_shop';

export const good: IGoodItem = { ...goodsMock[0] };
