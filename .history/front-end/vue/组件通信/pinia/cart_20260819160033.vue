import { defineStore } from 'pinia' import { ref, computed } from 'vue' //
第一个参数是 store 的唯一 id export const useCartStore = defineStore('cart', ()
=> { // State: 购物车商品列表 const items = ref([]) // Getter: 自动计算总数量
const totalCount = computed(() => items.value.length) // Action:
添加商品（支持异步） const addItem = (product) => { items.value.push(product) }
// Action: 清空购物车 const clearCart = () => { items.value = [] } // 必须
return 暴露出去 return { items, totalCount, addItem, clearCart } })
