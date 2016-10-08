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
      canActivate (transition) {
        setTimeout(()=>{
          console.log('canActivate')
          transition.next()})
      },
      canDeactivate() {
        console.log('canDeactivate')
      },
      activate (transition) {
        transition.next()
//        return new Promise((resolve) => {
//          setTimeout(()=> {
//            console.log('activate')
//            this.getDemoData()
//            resolve()
//          },2000)
//        })
      },
      data(transition) {
        setTimeout(()=>{
          this.getDemoData()
          transition.next()
        },1000)
      },
      waitForData: true
    },
    ready() {
//      setTimeout(()=>{
//        this.getDemoData()
//        console.log('2秒后执行好getDemoData')
//      },2000)
    }
  }
</script>

