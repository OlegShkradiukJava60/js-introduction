// Функция myReduce - собственная реализация метода reduce
// The myReduce function - a custom implementation of the reduce method
function myReduce(array, callback, initialValue) {
    let acc = initialValue === undefined ? array[0] : initialValue;
    const index = initialValue === undefined ? 1 : 0;

    for (let i = index; i < array.length; i++) {
        acc = callback(acc, array[i], i, array);
    }
    return acc;
}

// Функция minMax - находит минимум и максимум в массиве
// The minMax function - finds the minimum and maximum values in an array
function minMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return [undefined, undefined];

    return myReduce(
        arr,
        (acc, curr) => [Math.min(acc[0], curr), Math.max(acc[1], curr)],
        [arr[0], arr[0]]
    );
}

// Функция createTestResult - создает объект с результатом теста
// The createTestResult function - creates an object with the test result
function createTestResult(script, expectedJSON, actualJSON, result) {
    return { script, expectedJSON, actualJSON, result };
}

// Функция test - выполняет тест
// The test function - runs a test
function test(testObj) {
    const expectedJSON = JSON.stringify(testObj.expected);
    let evalRes;
    try {
        evalRes = eval(testObj.script);
    } catch (error) {
        evalRes = error.toString();
    }
    const actualJSON = JSON.stringify(evalRes);
    const result = expectedJSON === actualJSON ? "passed" : "failed";

    return createTestResult(testObj.script, expectedJSON, actualJSON, result);
}

// Функция testframework - запускает тесты и выводит результаты в body
// The testframework function - runs tests and displays results inside the body element
function testframework(scripts, expectedResults) {
    const bodyElem = document.querySelector("body");

    const results = scripts.map((script, index) =>
        test({ script, expected: expectedResults[index] })
    );

    const { passed, failed } = results.reduce(
        (acc, result) => ({
            passed: result.result === "passed" ? acc.passed + 1 : acc.passed,
            failed: result.result === "failed" ? acc.failed + 1 : acc.failed,
        }),
        { passed: 0, failed: 0 }
    );

    bodyElem.innerHTML = orderedList(results, passed, failed);
}

// The orderedList function - creates an HTML ordered list with test results and summary
function orderedList(results, passed, failed) {
    return `
      <div class="container">
        <h1>Results</h1>
        <ol>
          ${results
            .map(
                (result) => `
            <li class="${result.result === "passed" ? "item_passed" : "item_failed"
                    }">
              ${result.script}: ${result.result}
            </li>
          `
            )
            .join("")}
        </ol>
        <div class="final">
          <p class="final_text">
            <span class="item_passed">${passed} passed</span>, 
            <span class="item_failed">${failed} failed</span>
          </p>
        </div>
      </div>
    `;
}

//Example tests
const scripts = [
    `myReduce([3, 1, 7, 5, 9, 10], (acc, val) => [Math.min(acc[0], val), Math.max(acc[1], val)], [Infinity, -Infinity])`,
    `myReduce([5], (acc, val) => [Math.min(acc[0], val), Math.max(acc[1], val)], [Infinity, -Infinity])`,
    `myReduce([], (acc, val) => [Math.min(acc[0], val), Math.max(acc[1], val)], [Infinity, -Infinity])`,
    `minMax([3, 1, 7, 5, 9, 10])`,
    `minMax([])`
];

//

const expectedResults = [
    [1, 10],
    [5, 5],
    [Infinity, -Infinity],
    [1, 9],
    [Infinity, -Infinity]
];

// Запускаем тесты / Run tests
testframework(scripts, expectedResults);
