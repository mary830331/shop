<template lang="pug">
b-card.card-product(:title='product.name' :img-src='product.image')
  b-card-text {{ product.price }}
  b-button(variant='primary' @click="addCart") 加入購物車
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default () {
        return {
          id: 0,
          name: '',
          price: 0,
          image: ''
        }
      }
    }
  },
  methods: {
    addCart () {
      this.$store.commit('addCart', this.product.id)
    }
  }
}
</script>
