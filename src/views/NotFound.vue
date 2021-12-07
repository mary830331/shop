<template lang='pug'>
#notfound.text-center
  h1.text-center 找不到
  b-btn(size='lg' variant='primary') 回首頁
</template>

<script>
export default {
  methods: {
    gohome () {
      this.$router.push('/')
    }
  }
}
</script>
