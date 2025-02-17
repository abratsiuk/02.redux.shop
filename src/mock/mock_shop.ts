import data from './mock_shop.json';
import { IGoodItem } from '../interfaces/IGoodItem';

export const goods: IGoodItem[] = data.shop
    .map(
        (item): IGoodItem => ({
            id: item.offerId,
            name: item.displayName,
            description: item.displayDescription,
            full_background:
                item.displayAssets && item.displayAssets.length > 0
                    ? item.displayAssets[0].full_background ?? ''
                    : '',
            price: item.price ? item.price.regularPrice : 0,
        })
    )
    .filter((item) => item.full_background && item.id);
