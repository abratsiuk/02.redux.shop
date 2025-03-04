export interface IFilter {
    search: string;
    page: number;
    type: Record<
        | 'mainType'
        | 'displayType'
        | 'rarity'
        | 'series'
        | 'banner'
        | 'priority',
        string[]
    >;
}
