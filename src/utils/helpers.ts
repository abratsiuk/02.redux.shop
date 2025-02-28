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
    const positions = Object.values(order.items).sort((a, b) =>
        a.index > b.index ? 1 : -1
    );
    const icons = positions
        .filter((p) => !!p.good.icon)
        .map((p) => ({ icon: p.good.icon as string, title: p.good.name }));
    return icons;
};
