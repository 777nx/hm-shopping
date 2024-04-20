// 约定一个通用的键名
const INFO_KEY = 'hm_shopping_info'
const HISTORY_KEY = 'hm_history_list'
const CART_COUNT = 'hm_cart_count'

// 获取个人信息
export const getInfo = () => {
  const defaultObj = { token: '', userId: '' }
  const result = localStorage.getItem(INFO_KEY)
  return result ? JSON.parse(result) : defaultObj
}

// 设置个人信息
export const setInfo = (obj) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}

// 移除个人信息
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}

// 获取搜索历史
export const getHistoryList = () => {
  const result = localStorage.getItem(HISTORY_KEY)
  return result ? JSON.parse(result) : []
}

// 设置搜索历史
export const setHistoryList = (arr) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(arr))
}

// 获取购物车商品数量
export const getCartCount = () => {
  const result = localStorage.getItem(CART_COUNT)
  return result ? JSON.parse(result) : 0
}

// 设置购物车商品数量
export const setCartCount = (num) => {
  localStorage.setItem(CART_COUNT, JSON.stringify(num))
}
