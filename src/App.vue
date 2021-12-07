<template lang="pug">
#app
  b-navbar(toggleable='lg' type="dark" variant="info")
    b-container
      b-navbar-brand(to='/') 購物商城
      b-navbar-toggle(target='nav-collapse')
      b-collapse#nav-collapse(is-nav)
        b-navbar-nav
          b-nav-item(to='/products')
            font-awesome-icon(:icon="['fas', 'shopping-bag']")
            | &nbsp;商品
          b-nav-item(to='/cart')
            font-awesome-icon(:icon="['fas', 'shopping-cart']")
            | 購物車
          b-nav-item(to='/about')
            font-awesome-icon(:icon="['fas', 'info-circle']")
            | &nbsp;關於
  router-view
</template>
