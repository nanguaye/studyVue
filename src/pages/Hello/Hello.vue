<template>
  <div class="text-center">
    <h1 class="msg-color">{{ msg }}</h1>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .text-center {
    text-align: center;
    .msg-color {
      color: #42b983;
    }
  }
</style>
<script>
export default {
  data () {
    return {
      msg: '欢迎!'
    }
  }
}
</script>
