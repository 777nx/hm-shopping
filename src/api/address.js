import request from '@/utils/request'

// 获取收货地址列表
export const getAddressList = () => {
  return request.get('/address/list')
}

// 添加收货地址
export const addAddress = (form) => {
  return request.post('/address/add', form)
}

// 删除收货地址
export const delAddress = (addressId) => {
  return request.post('/address/remove', {
    addressId
  })
}
