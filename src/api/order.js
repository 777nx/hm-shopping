import request from '@/utils/request'

// 订单结算确认
// mode: cart => obj{ cartIds }
// mode: buyNow => obj{ goodsId goodsNum goodsSkuId }
export const checkOrder = (mode, obj) => {
  return request.get('/checkout/order', {
    params: {
      mode, // 结算模式（buyNow立即购买 cart购物车）
      delivery: 10, // 10快递配送 20上门自提
      couponId: 0, // 优惠券ID
      isUsePoints: 0, // 是否使用积分抵扣（1使用 0不使用）
      ...obj
    }
  })
}
