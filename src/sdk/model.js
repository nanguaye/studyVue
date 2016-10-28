/**
 * Created by nangua on 16/10/20.
 */
//导出常量
class Model {
  constructor(name) { //构造函数  class 类里面 这个constructor 构造函数 可以理解成初始化一些属性 值
    this.myName = name
    this.initNum = 100
  }
  get(url, data) {
    return this.send('get',url ,data)
  }
  post() {
    return this.send('post',url ,data)
  }
  send (method,url,body){
    return new Promise((resolve, reject) => {
      if(method === 'get') {
        setTimeout(()=>{
          resolve('GET')
        }, 500)
      }
      if(method === 'post') {
        resolve('POST')
      }
    })
  }
}
export default new Model('ych')
