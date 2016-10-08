/**
 * Created by nangua on 16/10/8.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
// 告诉 vue “使用” vuex
Vue.use(Vuex)
const store = new Vuex.Store({
  modules
})
export default store
