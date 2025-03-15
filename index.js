
import { testframework } from './testframework.js';
class X {
  constructor(arr) {
    this.arr = arr;
  }
  logElements() {
    this.arr.forEach(e => console.log(e))
  }


  sumElements() {
    return this.arr.reduce((acc, cur) => acc + cur);
  }

  action(fun) {
    return fun.call(this);
  }
  joinElements() {
    return this.arr.join();
  }
  actionBind(fun) {
    return fun();
  }
}


const objX = new X([1, 2, 3, 20, 40]);
// objX.logElements();
// console.log (objX.sumElements());
// objX.action(objX.logElements)
// console.log(objX.action(objX.sumElements));
// console.log(objX.action(objX.joinElemenys))
console.log(objX.actionBind(objX.sumElements.bind(objX)))
