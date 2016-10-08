/**
 * Created by nangua on 16/9/13.
 */
// shop index
import  App from './app.vue'
import Shop from './Shop.vue'
export function initShopRoutes() {
  return {
    '/shop':{
      name:'shop',
      component: App,
      subRoutes: {
        '/':{
          component:Shop
        }
      }
    }
  }
}
