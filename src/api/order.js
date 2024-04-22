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

// 提交订单
// mode: cart => obj{ cartIds remark }
// mode: buyNow => obj{ goodsId goodsNum goodsSkuId remark }
export const submitOrder = (mode, obj) => {
  return request.post('/checkout/submit', {
    mode,
    delivery: 10, // 物流方式， 默认： 10
    couponId: 0, // 优惠券id，默认：0
    isUsePoints: -1, // 是否使用积分 1-使用, 0-不使用
    payType: 10, // 支付方式，10：余额支付
    ...obj
  })
}

// 订单列表
export const getMyOrderList = (dataType, page) => {
  return request.get('/order/list', {
    params: {
      dataType,
      page
    }
  })
}
