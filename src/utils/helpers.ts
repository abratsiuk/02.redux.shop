import { IOrder } from '../interfaces/IOrder';
import { IOrderIcon } from '../interfaces/IOrderIcon';
import { IGoodItem } from '../interfaces/IGoodItem';
import { IFieldInfo } from '../interfaces/IFieldInfo';

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
