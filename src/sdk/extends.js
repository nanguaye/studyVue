/**
 * Created by nangua on 16/10/25.
 */
class Father {
  constructor(name) { //构造函数
    this.name = name + 1;
  }
  fatherDemo() {
    console.log(this.name + " is Class father");
  }
}
var Fat = new Father("叶晨浩");
Fat.fatherDemo();    //jarson is breathing

class Son extends Father{
  constructor(name, sonName, sonName2) { // 构造函数
    super(name);//调用父类构造函数
    this.sonName = sonName
    this.sonName2 = sonName2

  }
}

var So = new Son('a','b','c')
console.log('So', So)
export default Son
