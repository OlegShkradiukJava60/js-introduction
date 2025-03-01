
function test(testObj) {
    const expectedJSON = JSON.stringify(testObj.expected);
    let evalRes;

    try {
        evalRes = eval(testObj.script);
    } catch (error) {
        evalRes = error.toString();
    }

    const actualJSON = JSON.stringify(evalRes);
    const result = expectedJSON === actualJSON ? 'right' : 'failed';

    return createTestResult(testObj.script, expectedJSON, actualJSON, result);
}

function createTestResult(script, expectedJSON, actualJSON, result) {
    return { script, expectedJSON, actualJSON, result };
}

function testframework(scripts, expectedResults) {
    const bodyElement = document.querySelector('body');
    let right = 0;
    let failed = 0;
    let outputHTML = "<ol>";

    for (let i = 0; i < scripts.length; i++) {
        let testObj = { script: scripts[i], expected: expectedResults[i] };
        let result = test(testObj);

        let color = result.result === "right" ? "green" : "red";
        if (result.result === "right") {
            right++;
        } else {
            failed++;
        }

        outputHTML += `<li style="color: ${color};">${result.script} - ${result.result}</li>`;
    }

    outputHTML += "</ol>";
    outputHTML += `<p style="color: green;">right: ${right}</p>`;
    outputHTML += `<p style="color: red;">Failed: ${failed}</p>`;

    bodyElement.innerHTML = outputHTML;
}


function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}


let scripts = [
    'minMax([8, 4, 2, 6, 0, 9])',
    'minMax(["cherry", "kiwi", "mango"])',
    'minMax(["zolo", "Echo", "999", "Square"])',
    'minMax([2, 4, 6, 8, 10])'
];

let expectedResults = [
    [0, 9], // min = 0, max = 9
    ["cherry", "mango"], // min = cherry, max = mango
    [" ", "zolo"], // пробел - самый маленький, zolo - самый большой
    [2, 10] // min = 2, max = 10
];


testframework(scripts, expectedResults);

scripts = [
    'minMax([8, 4, 2, 6, 0, 9])',
    'minMax(["cherry", "kiwi", "mango"])',
    'minMax(["zolo", "Echo", "999", "Square", "EVENING", " "]',
    'minMax([2, 4, 6, 8, 10])'
]

expectedResults = [
    [8, 4, 2, 6, 0, 9],
    ["cherry", "kiwi", "mango"],
    ["zolo", "Echo", "999", "Square", "EVENING", " "],
    [2, 4, 6, 8, 10],
]

function testframework(scripts, expectedResults) {
    let testObj = {
        script: scripts[i],
        expected: expectedResults[i],
    };

    let result = test(testObj);
    let resultingString = efertr ${ result.script };
} 
