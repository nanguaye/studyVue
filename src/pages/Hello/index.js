/**
 * Created by nangua on 16/9/13.
 */
//hello index
import Hello from './Hello.vue'

export  function helloRoutes () {
  return {
    '/hello':{
      name:'hello',
      component: Hello
    }
  }
}
