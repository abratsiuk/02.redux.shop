import { IOrder } from '../interfaces/IOrder';
import { IOrderIcon } from '../interfaces/IOrderIcon';
import { IGoodItem } from '../interfaces/IGoodItem';
import { IFieldInfo } from '../interfaces/IFieldInfo';
import { IFilter } from '../interfaces/IFilter';

export const isRecordEmpty = <T>(items: Record<string, T>): boolean => {
    for (const _ in items) {
        return false;
    }
    return true;
};

export const dateToShortString = (dateNumber: number): string => {
    return new Date(dateNumber).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

export const getOrderIcons = (order: IOrder): IOrderIcon[] => {
    const icons = order.items
        .filter((p) => !!p.icon)
        .map((p) => ({ icon: p.icon as string, title: p.name }));
    return icons;
};

export const getFieldsInfo = (
    filteredGoods: IGoodItem[],
    field:
        | 'mainType'
        | 'displayType'
        | 'rarity'
        | 'series'
        | 'banner'
        | 'priority',
    filter: IFilter
): IFieldInfo => {
    if (filteredGoods.length === 0) return { items: [] };

    const result = filteredGoods.reduce(
        (acc: IFieldInfo, item) => {
            let fieldValue: string | undefined | null = '';
            if (field === 'mainType' || field === 'displayType') {
                fieldValue = item[field];
            }
            if (
                field === 'rarity' ||
                field === 'series' ||
                field === 'banner'
            ) {
                fieldValue = item[field]?.name;
            }
            if (field === 'priority') {
                fieldValue = item[field]?.toString();
            }
            const name =
                fieldValue === undefined
                    ? 'undefined'
                    : fieldValue === null
                    ? 'null'
                    : fieldValue.trim() === ''
                    ? 'empty'
                    : fieldValue.trim();
            const existingItem = acc.items.find((i) => i.name === name);
            if (existingItem) {
                existingItem.count = existingItem.count + 1;
            } else {
                try {
                    acc.items.push({
                        name,
                        count: 1,
                        checked: filter
                            ? filter.type[field].includes(name)
                            : false,
                    });
                } catch (error) {
                    console.error(error);
                }
            }
            return acc;
        },
        { items: [] } as IFieldInfo
    );
    result.items.sort((a, b) => ((a.name || '') >= (b.name || '') ? 1 : -1));
    return result;
};

const isRelevantSearch = (search: string, name: string): boolean => {
    if (search && name) {
        const worlds = search.split(' ');
        for (const w of worlds) {
            if (w.trim()) {
                if (!name.includes(w)) {
                    return false;
                }
            }
        }
    }
    return true;
};
const isRelevantType = (
    filter: IFilter,
    field:
        | 'mainType'
        | 'displayType'
        | 'rarity'
        | 'series'
        | 'banner'
        | 'priority',
    value: string
): boolean => {
    if (filter.type[field].length === 0) return true;
    const typeValues = filter.type[field];
    return typeValues.includes(value ?? 'undefined');
};

export const checkIsRelevant = (good: IGoodItem, filter: IFilter): boolean => {
    if (!isRelevantSearch(filter.search, good.name ?? 'undefined'))
        return false;

    if (!isRelevantType(filter, 'mainType', good.mainType ?? 'undefined'))
        return false;
    if (!isRelevantType(filter, 'displayType', good.displayType ?? 'undefined'))
        return false;
    if (!isRelevantType(filter, 'rarity', good.rarity?.name ?? 'undefined'))
        return false;
    if (!isRelevantType(filter, 'series', good.series?.name ?? 'undefined'))
        return false;
    if (!isRelevantType(filter, 'banner', good.banner?.name ?? 'undefined'))
        return false;
    if (
        !isRelevantType(
            filter,
            'priority',
            good.priority?.toString() ?? 'undefined'
        )
    )
        return false;

    return true;
};
