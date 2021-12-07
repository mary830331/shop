<template lang="pug">
#products
  b-container
    b-row
      b-col(cols='12')
        h1.text-center 所有商品
      b-col(cols='12' md='6' lg='3' v-for='product in products' :key='product.id')
        ProductCard(:product='product')
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>
