export function isAnagram(string, anagram) {
    if (string.length !== anagram.length) return false;

    const Count = {};

    for (let i = 0; i < string.length; i++) {
        Count[string[i]] = (Count[string[i]] || 0) + 1;
        Count[anagram[i]] = (Count[anagram[i]] || 0) - 1;
    }

    return Object.values(Count).every(count => count === 0);
}

// TODO
// Takes two parameters: string and anagram
// Returns true if parameter "anagram" contains the same letters
// as the given string with the same count of occurrences
// Otherwise, returns false

// TODO
// Принимает два параметра: строку и анаграмму
// Возвращает true, если параметр «анаграмма» содержит одинаковые буквы
// как заданная строка с тем же количеством вхождений
// В противном случае возвращает false
