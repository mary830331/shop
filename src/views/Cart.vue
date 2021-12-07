<template lang="pug">
#cart
  b-container
    b-row
      b-col(cols='12')
        h1.text-center 購物車
      b-col(cols='12')
        b-table(:items='cart' :fields='fields' striped hover)
          template(#cell(image)='data')
            img(:src='data.value' width='50')
          template(#cell(action)='data')
            b-btn(variant='danger' @click='delCart(data.item.id)')
</template>

<script>
export default {
  data () {
    return {
      fields: [
        { key: 'id', label: '商品編號', sortable: true },
        { key: 'name', label: '名稱', sortable: true },
        { key: 'image', label: '圖片' },
        { key: 'price', label: '價格', sortable: true },
        { key: 'count', label: '數量', sortable: true },
        { key: 'action', label: '動作' }
      ]
    }
  },
  computed: {
    cart () {
      return this.$store.state.cart
    }
  },
  methods: {
    delCart (id) {
      this.$store.commit('delCart', id)
      this.$swal({
        icon: 'success',
        title: '成功',
        text: '成功刪除'
      })
    }
  }
}
</script>
