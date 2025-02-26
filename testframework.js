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