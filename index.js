function myReduce(array, callback, initialValue) {
    //first parameter is an array for reducing
    //returns one value after reducing
    //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    let acc = initialValue == undefined ? array[0] : initialValue;
    const index = initialValue == undefined ? 1 : 0;
    for (let i = index; i < array.length; i++) {
      acc = callback(acc, array[i], i, array);
    }
    return acc;
  }
  function minMax(arr) {
    //arr is an array containing either strings or numbers
    // returns array with two elemnts: first is min value, second is max value
    //requirement: to use myReduce method described above (only one call)
    const res = myReduce(
      arr,
      (acc, curr) => [
        acc[0] > curr ? curr : acc[0],
        acc[1] < curr ? curr : acc[1],
      ],
      [arr[0], arr[0]]
    );
    return res;
  }
  const arr1 = ["hello", "kuku", "abc"];
  const arr2 = ["abc", "hello", "kuku"];
  const arr3 = [1, 2, 3];
  const arr4 = [3, 2, 1];
  console.log(
    test({
      script: 'minMax(["hello", "kuku", "abc"])',
      expected: ["abc", "kuku"],
    })
  );
  console.log(test({ script: "minMax([1, 2, 3])", expected: [1, 3] }));
  
  function test(testObj) {
    //testObj structure {script: <string containg script text>, expected: <any type>}
    //returns resultObj with structure {script: <string containg script text>,
    //  expectedJSON: <JSON string containing expected result>,
    //  actualJSON: <JSON string containing actual result>, result: <string containing either 'passed'
    //  or 'failed'}
    const expectedJSON = JSON.stringify(testObj.expected);
    let evalRes;
    try {
      evalRes = eval(testObj.script);
    } catch (error) {
      evalRes = error;
    }
    const actualJSON = JSON.stringify(evalRes);
    const result = expectedJSON === actualJSON ? "passed" : "failed";
    const testResult = createTestResult(
      testObj.script,
      expectedJSON,
      actualJSON,
      result
    );
    return testResult;
  }
  function createTestResult(script, expectedJSON, actualJSON, result) {
    return { script, expectedJSON, actualJSON, result };
  }
  function testframework(scripts, expectedResults) {
    //input
    //scripts - array of tested scripts
    //expectedResults - array of appropriate results
    //scrpits[i] and expectedResults[i] should be consistent
    /**************************************************************** */
    //output
    const bodyElem = document.querySelector("body");
    const resultObjects = getResultObjects(scripts, expectedResults);
    const summary = getSummaryObject(resultObjects);
    const resultItemsList = getResultItemsList(resultObjects);
    const summaryLine = getSummaryLine(summary);
    bodyElem.innerHTML = `${resultItemsList}${summaryLine}`;
  }
  function getResultObjects(scripts, expectedResults) {
    const res = scripts.map((script, index) =>
      test({ script, expected: expectedResults[index] })
    );
    return res;
  }
  function getSummaryObject(resultObjects) {
    const res = resultObjects.reduce(
      (acc, cur) => ({
        passed: cur.result === "passed" ? acc.passed + 1 : acc.passed,
        failed: cur.result === "failed" ? acc.failed + 1 : acc.failed,
      }),
      { passed: 0, failed: 0 }
    );
    return res;
  }
  function getResultItemsList(resultObjects) {
    const resItems = resultObjects.map(getResItem).join('');
    const resList = `<ol>${resItems}</ol>`;
    return resList;
  }
  function getResItem(resultObject) {
    const resItem = `<li class="item ${resultObject.result === "passed" ? "item_passed" : "item_failed"}"> ${getResText(resultObject)} </li>`;
    return resItem;
  }
  function getResText(resultObject) {
    const resStr = `${resultObject.script} ; expected is ${resultObject.expectedJSON}; actual is ${resultObject.actualJSON}`;
    return resStr;
  }
  function getSummaryLine(summary) {
    const summaryLine = `<div class="summary"><span class="item_passed">passed ${summary.passed}</span>
    <span class="item_failed" >failed ${summary.failed}</span></div>` ; 
    return summaryLine
    
  }
  
  testframework(["minMax([1,2,3])", "minMax(['a', 'b', 'c'])",
   " myReduce([1, 2, 3], (acc,cur)=>acc + cur)", "myReduce([1, 2, 3], (acc, cur)=>acc * cur, 1)",
   "myReduce([1, 2, 3], (acc, cur)=>acc * cur, 0)"
  ],
    [[1,4], ['a', 'c'], 6, 6, 6]
  )