function getPromise(timeout, value) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), timeout)
  })
}
function getUserPassword(probCorrectPass) {
  const passwords = ['correct', 'wrong'];
  const index =  Math.random() < probCorrectPass ? 0 : 1;
  //timeout - 1 sec
  return getPromise(1000, passwords[index]);
}
function login(password) {
  //returns promise in the state resolved only for passowrd 'correct' otherwise state rejected
  //timeout 2 sec
  if (password !== 'correct') {
    throw "wrong credentials"
  }
  return getPromise(2000);
}
function getUserData(username) {
  const users = {'Vasya': {name: "Vasya", age: 30},
  'Petya': {name: "Petya", age:40}}
  //returns promise in the state resolved if username exists with returning user data
  //otherwise state rejected with apropriate message
  if(!users[username]) {
    throw `user ${username} not found`
  }
  //timeout 1 sec
  return getPromise(1000, users[username])

  }
//  asyng это асинхронная функция когда используем ее всем надо писать await
async function funStackExample(username) {
  try {
      const password = await getUserPassword(0.5);
      await login(password);
      const userData = await getUserData(username);
      console.log(userData);
  } catch (error) {
      console.log(error, username);
  }
}


const promise1 = funStackExample('Vasya');
const promise2 = funStackExample('Hana');
console.log("waiting for the data coming from the server");
Promise.race([promise1, promise2,]).then(() => console.log("data processed"));