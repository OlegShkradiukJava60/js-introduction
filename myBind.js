
export default class myBind{
    
}


Function.prototype.myBind = function (context, ...args) {
    return (...newArgs) => this.apply(context, [...args, ...newArgs]);
  };
  
  