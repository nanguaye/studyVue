// 引入其他组件
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from './store/index'
// 引入filter 进行全局注册
import Filter from './filters/filter'
// 引入components 进行全局注册
import Components from './components/allComponents'
router.redirect({//定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
  '*':"/index"//重定向任意未匹配路径到/index
});

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
sync(store, router)
router.start(App, '#app')
