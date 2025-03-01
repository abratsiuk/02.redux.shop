import { IOrder } from '../interfaces/IOrder';
import { IOrderIcon } from '../interfaces/IOrderIcon';
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
