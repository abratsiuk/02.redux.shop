import { IGoodBase } from './IGoodBase';
export interface IGoodItem extends IGoodBase {
    offerId?: string;
    background?: string;
    colors?: {
        color1?: string | null;
        color2?: string | null;
        color3?: string | null;
        textBackgroundColor?: string | null;
    };
    rarity?: {
        id?: string;
        name?: string;
    };
    series: {
        id?: string;
        name?: string;
    } | null;
    offerTag?: {
        id?: string;
        text?: string;
    } | null;
    banner?: {
        id?: string;
        name?: string;
        intensity?: string;
    } | null;
    priority?: number;
}
