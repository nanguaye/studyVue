<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script type="text/babel">
  import { getDemoData } from '../../store/demo/actions'
  export default {
    vuex: {
      actions:{
        getDemoData
      }
    },
    route:{
      activate () {
        return new Promise((resolve) => {
          this.getDemoData().then(() => {
            resolve()
          })
        })
      }
    },
    ready() {
    }
  }
</script>

