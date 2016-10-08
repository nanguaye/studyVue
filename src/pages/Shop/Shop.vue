<template>
   <div style="text-align: center;font-size: 30px">这是shop页面{{demoName}}</div>
</template>
<script type="text/babel">
  export default {
    vuex: {
      getters: {
        demoName: state => state.demo.demoName
      },
    },
    ready() {
      console.log('ready-demoName', this.demoName)
    },
    data() {
      return {}
    }
  }
</script>

