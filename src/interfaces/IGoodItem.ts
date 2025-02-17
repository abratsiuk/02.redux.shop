export interface IGoodItem {
    id: string;
    name: string;
    description: string;
    full_background: string;
    price: number;
    onClick?: () => void;
}
