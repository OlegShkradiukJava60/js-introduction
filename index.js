
function sleep(timeout) {
  const rejectData = 5
  return new Promise(resolve => {
    if (timeout < 0) {
      throw ("timeout cannot be negative");
    }
    setTimeout(() => resolve(), timeout)
  })
}
const timeout = 5000;
sleep(timeout).then(() => console.log(`result after ${timeout / 1000} seconds`))
  .catch(e => { console.log(e); return 5 })
  // .then(data => console.log(data))
  .finally(() => console.log("printing out in any case"))
console.log("Hello World")
