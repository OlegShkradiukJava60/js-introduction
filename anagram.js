export function isAnagram(string, anagram) {
    //takes two parameters: string  and anagram
    //returns true if parameter anagram contains the same letters as
    //the given string with the same counters of occurrences
    //otherwise false
    let result = false;
    if (string.length === anagram.length) {
      const letterOccurrences = getLetterOccurrences(string);
      result = isAnagramOccurrences(letterOccurrences, anagram);
    }
  
    return result;
  }
  function getLetterOccurrences(string) {
    const res = Array.from(string).reduce((acc, cur) => {
      acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
      return acc;
    }, {});
    return res;
  }
  function isAnagramOccurrences(letterOccurrences, anagram) {
    const res = Array.from(anagram).every(
      (letter) => --letterOccurrences[letter] >= 0
    );
    return res;
  }