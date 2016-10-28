<template>
   <div style="text-align: center;font-size: 30px">这是shop页面{{demoName}}</div>
   <div v-my-directive:click="name" a="哈哈" b="嘿嘿" style="width: 100px;height: 50px;background-color: red">{{name}}</div>
  <!--<button @click="demo()" style="margin-top: 20px">改变name</button>-->
  <!--<input v-example="name" style="border: 1px solid;margin-top: 20px">-->
</template>
<script type="text/babel">
  export default {
    vuex: {
      getters: {
        demoName: state => {
//          console.log('vuex-getter')
          return state.demo.demoName
        }
      },
    },
    ready() {
    },
    data() {
      return {
        name: 1
      }
    },
    methods: {
      demo() {
        this.name++
      }
    },
    directives: {
      'my-directive': {
        twoWay: true,
        params: ['a','b'],
        bind: function () {
          // 定义个fun
          this.ClickFun = function () {
//            this.el.value = this.el.value ++
//            this.set(this.el.value)
            this.vm.name++
            console.log('增加click事件!!!!!', this.vm.name)
          }.bind(this)
          // 为指令绑定的这个元素添加操作事件 PS: addEventListener 事件 (type,fun) type 是指具体的操作事件 比如click 等等
          // this.arg 在指这个指令my-directive 冒号后面的
          this.el.addEventListener('touchend', this.ClickFun)
          // 做绑定的准备工作
          // 比如添加事件监听器，或是其他只需要执行一次的复杂操作
          console.log('准备工作------bind',this.params.a, this.params.b)
        },
        update: function (newValue, oldValue) {
          // 根据获得的新值执行对应的更新
          // 对于初始值也会被调用一次 新值就是初始化定义的值,旧值就是undefined
          // 准备工作
          console.log('值更新------update', newValue, oldValue)
        },
        unbind: function () {
          // 做清理工作
          // 比如移除在 bind() 中添加的事件监听器  当指令绑定的那个元素(文中是div) 删除了 那么会触发unbind
          console.log('清理工作------unbind')
        }
      },
      'example': {
        twoWay: true,
        bind: function () {
          this.handler = function () {
            console.log('input事件触发')
            // 将数据写回 vm
            // 如果指令这样绑定 v-example="a.b.c"
            // 它将用给定值设置 `vm.a.b.c`
            this.set(this.el.value)
          }.bind(this)
          this.el.addEventListener('input', this.handler)
        },
        unbind: function () {
          this.el.removeEventListener('input', this.handler)
        }
      }
    }
  }
</script>

