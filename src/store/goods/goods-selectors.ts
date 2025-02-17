export const selectGoodsInfo = (state) => ({
    status: state.countries.status,
    error: state.countries.error,
    qty: state.countries.list.length,
});

export const selectAllGoods = (state) => state.countries.list;
