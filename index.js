import myBind from './myBind.js';

class Deferred {
  constructor() {
    this.chain = [];
    this.value = undefined;
  }

  // добавялем фунцкию // add function
  then(callback) {
    this.chain.push(callback);
    return this;
  }

  // start chain
  resolve(value) {
    this.value = value; // first value

    this.chain.forEach((callback) => {
      this.runCallback.bind(this)(callback);
    });
  }

  runCallback(callback) {
    this.value = callback(this.value);  // induce callback and upgrate value
  }
}

// examples

const o = new Deferred();

o.then(function (res) {
  console.log("1", res); // hello world
  return "a"
})
o.then(function (res) {
  console.log("2", res); // a
  return "b"
})
o.then(function (res) {
  console.log("3", res); // b
  return "c"
})


o.resolve("hello world"); // start chain



//  MyBind


function personInfo(age, country) {
  console.log(
    `Hello, my name is ${this.name}. I'm ${age} years old and live in ${country}.`
  );
}

const person = {
  name: "Oleg"
};
const personInfoOleg = personInfo.myBind(person, 28);

personInfoOleg("Israel");
