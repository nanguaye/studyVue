<template>
  <div class="index-page">这是index模板页面</div>
  <a v-link="{name:'shop'}">前往 子页面 shop页面</a>
  <a v-link="{name:'hello'}">前往 子页面 hello页面</a>
  <div>
    <input type="text" style="border: 1px solid" v-model="phone" v-if="!fsend"><button @click="demo()">发送</button>
  </div>
  <div v-if="fsend">{{phone | phoneFilter}}</div>

  <div class="who">
    <div class="name">{{choseName}}</div>
    <button @click="begin()">开始</button>
    <button @click="stop()">暂停</button>
  </div>
  <div>{{price | price 'wrap'}}</div>
  <div>{{price | allPrice }}</div>
  <all-price></all-price>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .index-page {
    text-align: center;
    font-size: 30px;
    color: #42b983;
    margin: 10px 0;
  }

  .who {
    text-align center
    .name {
      font-size: 40px
    }
  }

</style>
<script type="text/babel">
  // 定义一个混合对象
  var myMixin = {
    methods: {
      hello: function () {
        console.log('hello from mixin!')
      }
    }
  }
  export default {
    // 这边把混合对象引进来后,合对象的所有选项将被“混入”组件自己的选项中。
    //当混合对象与组件包含同名选项时(比如上面例子中hello名字改成 demo)，这些选项将以适当的策略合并。例如，同名钩子函数被并入一个数组，因而都会被调用
    // 另外，混合的钩子将在组件自己的钩子之前调用。 结果: 点击发送后 先打印hello from mixin 然后 才是组件自己里面的方法调用
    mixins: [myMixin],
    ready() {
    },
    data(){
      return{
        phone : '',
        fsend: false,
        price: 24.5,
        choseName: '娜娜',
        nameData: [{name: '娜娜'},{name: '王珏'},{name: '胡斌'},
          {name: '小宇'},{name: '叶晨浩'},{name: '婷婷'},{name: '大哥'},{name: '魁哥'},{name: '小明'},{name: '国峰'}],
        i: 0,
        aa: '',
        isBegin: false
      }
    },
    filters: {
      phoneFilter: function (val) {
        return val.substring(0,3)+'****'+val.substring(7,11)
      },
      price: function (val,begin,end) {
        console.log(val, begin, end)
        if(begin === 'wrap') {
          return '¥' + val
        }

      }

    },
    methods: {
      demo () {
        this.fsend = true
      },
      choseFun() {
        this.choseName = this.nameData[this.i].name
        this.i++
        if (this.i === this.nameData.length ){
          this.i = 0
        }
      },
      begin() {
        if (!this.isBegin) {
          this.aa = setInterval(this.choseFun,50)
        }
        this.isBegin = true // 避免多次点击
      },
      stop() {
        console.log('暂停!!!')
        clearInterval(this.aa)
        this.isBegin = false
      }
    }

  }
</script>
