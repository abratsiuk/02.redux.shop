export interface IFilter {
    search: string;
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
