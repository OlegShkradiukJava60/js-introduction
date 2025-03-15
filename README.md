# HW#21
## Write class Deffered for printing out the following 
const d = new Deferred()<br>
d.then(function(res){ console.log("1 ", res); return "a"; });<br>
d.then(function(res){ console.log("2 ", res); return "b"; });<br>
d.then(function(res){ console.log("3 ", res); return "c"; });<br>
d.resolve('hello');<br><br>

1  hello<br>
2  a<br>
3  b<br>
## Write method myBind  with the same behavior as the standard "bind" method
### You may use any standard methods except "bind"