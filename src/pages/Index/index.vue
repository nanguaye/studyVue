<template>
  {{name}}
  <div class="index-page">这是index模板页面</div>
  <a v-link="{name:'shop'}">前往 子页面 shop页面</a>
  <a v-link="{name:'hello'}">前往 子页面 hello页面</a>
  <div>
    <input type="text" style="border: 1px solid" v-model="phone" v-if="!fsend"><button @click="demo()">发送</button>
  </div>
  <div v-if="fsend">{{phone | phoneFilter}}</div>
</template>
<style>
  .index-page {
    text-align: center;
    font-size: 30px;
    color: #42b983;
    margin: 10px 0;
  }
</style>
<script type="text/babel">

  export default {
    ready() {
    },
    data(){
      return{
        phone : '',
        fsend: false,
        name: '我日'
      }
    },
    filters: {
      phoneFilter: function (val) {
        return val.substring(0,3)+'****'+val.substring(7,11)
      }
    },
    methods: {
      demo () {
        this.fsend = true
      }
    }

  }
</script>
