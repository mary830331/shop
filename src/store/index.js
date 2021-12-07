import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      { id: 1, name: '大正紅茶拿鐵', price: '$55', image: 'https://d1ralsognjng37.cloudfront.net/a9ea14e1-e054-4656-9459-32e63c2026be.jpeg' },
      { id: 2, name: '伯爵紅茶拿鐵', price: '$55', image: 'https://d1ralsognjng37.cloudfront.net/e6138766-c349-4bdb-87b0-4769ad1c3e4a.jpeg' },
      { id: 3, name: '珍珠伯爵紅茶拿鐵', price: '$65', image: 'https://d1ralsognjng37.cloudfront.net/c6a5e915-d93e-4c76-9578-f484b69c10cd.jpeg' },
      { id: 4, name: '柳丁綠茶', price: '$70', image: 'https://d1ralsognjng37.cloudfront.net/685acb83-1fd8-4acd-8aba-6d8c67a45403.jpeg' },
      { id: 5, name: '手感芋圓鮮奶', price: '$80', image: 'https://d1ralsognjng37.cloudfront.net/20a54867-253d-4849-8d15-79a573e7879b.jpeg' },
      { id: 6, name: '娜杯紅茶', price: '$40', image: 'https://d1ralsognjng37.cloudfront.net/9f104ff0-94e7-423a-a81a-c69ea490113a.jpeg' },
      { id: 7, name: '娜杯紅茶拿鐵', price: '$55', image: 'https://d1ralsognjng37.cloudfront.net/555a9ed3-d25a-4335-afff-64fd9a62088a.jpeg' },
      { id: 8, name: '伯爵可可拿鐵', price: '$65', image: 'https://d1ralsognjng37.cloudfront.net/4041db4f-9c96-4db4-a3c2-b3e089045212.jpeg' },
      { id: 9, name: '布朗紅茶拿鐵', price: '$65', image: 'https://d1ralsognjng37.cloudfront.net/34d29c62-1268-4700-9095-43d576694a02.jpeg' },
      { id: 10, name: '珍珠手炒黑糖鮮奶', price: '$80', image: 'https://d1ralsognjng37.cloudfront.net/4db44a4f-0618-47b6-a764-5344a56db9a0.jpeg' },
      { id: 11, name: '雙Q琥珀烏龍拿鐵', price: '$90', image: 'https://d1ralsognjng37.cloudfront.net/c2afa71c-34bc-4bfa-99a4-f8e8ddc39d5a.jpeg' },
      { id: 12, name: '芋圓茉香綠茶拿鐵', price: '$75', image: 'https://d1ralsognjng37.cloudfront.net/5a954461-1ab5-46e5-9ef9-7cedef7e1819.jpeg' }
    ],
    cart: []
  },
  mutations: {
    addCart (state, data) {
      const idx = state.cart.findIndex(product => {
        return product.id === data
      })
      if (idx > -1) {
        state.cart[idx].count++
      } else {
        const pidx = state.products.findIndex(product => {
          return product.id === data
        })
        state.cart.push({ ...state.products[pidx], count: 1 })
      }
    },
    delCart (state, data) {
      const idx = state.cart.findIndex(product => {
        return product.id === data
      })
      state.cart.splice(idx, 1)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState({
      key: 'shop-practice',
      path: 'cart'
    })
  ]
})
