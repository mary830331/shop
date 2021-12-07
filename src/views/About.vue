<template lang="pug">
#home
  b-container
    b-row
      b-colb-col.text-center(cols='12')
        h1 關於
        p
          | 網頁設計及維護：XXOOO
          br
          | 最近更新日期：{{ date }}
</template>

<script>
export default {
  data () {
    return {
      date: new Date().toLocaleDateString()
    }
  }
}
</script>
