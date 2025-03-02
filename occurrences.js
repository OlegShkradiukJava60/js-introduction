
export function occurrences(strings) {
    //takes array of repeated strings /// принимает массив повторяющихся строк
    //returns array of sorted strings with information about how many times the original string occurs in original array
    // --- возвращает массив отсортированных строк с информацией о том, сколько раз исходная строкаc встречается в исходном массиве

    const resObj = {}; //key string from strings array, value - counter of occurrences //  ключевая строка из массива строк, значение - счетчик вхождений
    fillObj(strings, resObj);
    const resArray = getResArray(resObj);
    resArray.sort();
    return resArray;
}

function fillObj(strings, resObj) {
    strings.forEach(str => {
        if (resObj[str] == undefined) {
            resObj[str] = 0;
        }
        resObj[str]++;
    });
}
function getResArray(resObj) {
    const res = [];
    for (const key in resObj) {
        res.push(`${key}=>${resObj[key]}`)
    }
    return res;
}