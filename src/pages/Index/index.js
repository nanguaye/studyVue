/**
 * Created by nangua on 16/9/13.
 */
import App from './app.vue'
import Index from './index.vue'

export function indexRoutes (subRoutes) {
  return {
    '/index': {
      name: 'index',
      component: App,
      subRoutes: {
        '/': {
          component: Index
        },
        ...subRoutes  // es6的一种写法..具体怎么自己搜...
      }
    }
  }
}
