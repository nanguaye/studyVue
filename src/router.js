/**
 * Created by nangua on 16/9/13.
 */
// 这里配置router的一些最基本的!
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routers from './routers'
var router = new VueRouter();
router.map(routers)

export default router

