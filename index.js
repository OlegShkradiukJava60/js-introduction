const arr = ['HELLO', 122, -10, 'Java', 'JavaScript', 500, 'Nodejs'];

const compNumStr = (e1, e2) => {
    const isNum1 = typeof e1 === "number";
    const isNum2 = typeof e2 === "number";

    if (isNum1 && isNum2) {
        return e2 - e1;
    }
    if (isNum1 || isNum2) {
        return isNum1 ? -1 : 1;
    }
    return e1.localeCompare(e2);
};

arr.sort(compNumStr);
console.log(arr);


const orderedList = (array) => {
    const items = array
        .map((item) => `<li class=" item ${typeof item === "number" ? " item_number" : " "}"> ${item}</li>`)
        .join(" ");
    return `<ol>${items}</ol>`;
};

const bodyElement = document.querySelector("body");
bodyElement.innerHTML = orderedList(["Hello", 300, "Java", "Nodejs", 100]);
