export const selectGoodsInfo = (state) => ({
    status: state.goods.status,
    error: state.goods.error,
    qty: state.goods.list.length,
});

export const selectAllGoods = (state) => state.goods.list;
