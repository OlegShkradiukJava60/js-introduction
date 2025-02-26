function test(testObj) {
    // testObj structure {script: <string containg script text>,expected: <any type> }
    // returns resultObj with structure{script: <string containg script text>, 
    // expectedJSON: <JSON string containing expected result>, actualJSON: <JSON string containing actual result>, result: <string containing either 'passed'
    // or 'failed' }

    const expectedJSON = JSON.stringify(testObj.expected);

    let evalRes;
    try {
        evalRes = eval(testObj.script);
    } catch (error) {
        evalRes = error;
    }
    const actualJSON = JSON.stringify(evalRes);

    const result = expectedJSON === actualJSON ? 'passed' : 'failed';
    const testResult = createTestResult(testObj.script, expectedJSON, actualJSON, result)
    return testResult;


}
console.log(test({script:`minMax(["hello", "kuku", "abc"])`, expected:["abc","kuku"]}))
console.log(test({script:`minMax([1, 2, 3])`, expected:[1,3]}))
function createTestResult(script, expectedJSON, actualJSON, result){
    return {script, expectedJSON, actualJSON, result}
}

function testframework(scripts, expectedResults){
    // TODO
    // input
    // scripts - array of tested scripts 
    // expectedResults - array of appropriate res
    // scripts[i] and expectedResults[i] 

    // output
    const bodyElement = document.querySelector('body');
    // bodyElement.innerHTML = <orderedList of test results with coloring legend: passed tests by green,
    //  failed tests by red. after list summary including number of passed tests and number of failed tests 
    // with appropriate coloring (green / red)> 
    // presenting list items on the browser
}