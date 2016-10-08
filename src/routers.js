/**
 * Created by nangua on 16/9/13.
 */
import { indexRoutes } from './pages/Index/index'
import { helloRoutes } from './pages/Hello/index'

//引入shop
import { initShopRoutes as shopRoutes} from './pages/Shop/index'
let indexRoute = indexRoutes(shopRoutes())
let helloRoute = helloRoutes()
export default Object.assign(indexRoute, helloRoute)
