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
    goods: Record<string, IGoodItem>,
    field: string
): IFieldInfo => {
    if (isRecordEmpty(goods)) return { items: [] };

    const result = Object.values(goods).reduce(
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
            if (field === 'offerTag') {
                fieldValue = item[field]?.text;
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
                acc.items.push({ name, count: 1 });
            }
            return acc;
        },
        { items: [] } as IFieldInfo
    );
    result.items.sort((a, b) => ((a.name || '') >= (b.name || '') ? 1 : -1));
    return result;
};

export const getFilterTypeArray = (obj: IFilter, field: string): string[] => {
    switch (field) {
        case 'mainType':
            return [...obj.mainType];
        case 'displayType':
            return [...obj.displayType];
        case 'rarity':
            return [...obj.rarity];
        case 'series':
            return [...obj.series];
        case 'banner':
            return [...obj.banner];
        case 'priority':
            return [...obj.priority];
        default:
            return [];
    }
};

export const checkIsRelevant = (good: IGoodItem, filter: IFilter): boolean => {
    console.log('checkIsRelevant');
    if (filter.search && good.name) {
        const worlds = filter.search.trim().split(' ');
        for (const w of worlds) {
            if (w.trim()) {
                if (!good.name.includes(w)) {
                    return false;
                }
            }
        }
    }
    const mainTypes = getFilterTypeArray(filter, 'mainType');
    if (mainTypes.length > 0) {
        if (!mainTypes.includes(good.mainType ?? '')) {
            return false;
        }
    }

    const displayTypes = getFilterTypeArray(filter, 'displayType');
    if (displayTypes.length > 0) {
        if (!displayTypes.includes(good.displayType ?? '')) {
            return false;
        }
    }
    const rarities = getFilterTypeArray(filter, 'rarity');
    if (rarities.length > 0) {
        if (!rarities.includes(good.rarity?.name ?? '')) {
            return false;
        }
    }
    const serieses = getFilterTypeArray(filter, 'series');
    if (serieses.length > 0) {
        if (!serieses.includes(good.series?.name ?? '')) {
            return false;
        }
    }
    const banners = getFilterTypeArray(filter, 'banner');
    if (banners.length > 0) {
        if (!banners.includes(good.banner?.name ?? '')) {
            return false;
        }
    }
    const priorities = getFilterTypeArray(filter, 'priority');
    if (priorities.length > 0) {
        if (!priorities.includes(good.priority?.toString() ?? '')) {
            return false;
        }
    }

    return true;
};
