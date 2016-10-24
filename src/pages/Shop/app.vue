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
      data () {
        return new Promise((resolve) => {
          this.getDemoData().then(() => {
            resolve()
          })
        })
      },
      waitForData: true
    },
    ready() {
    }
  }
</script>

