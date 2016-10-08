<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script type="text/babel">
  import store from './store/index'
  console.log(store)
  export default {
    store: store
  }
</script>
