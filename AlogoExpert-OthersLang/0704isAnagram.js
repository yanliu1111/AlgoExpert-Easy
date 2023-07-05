// anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

//time O(n) space O(n)

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let freqMap = {};

  for (let letter of s) {
    freqMap[letter] = (freqMap[letter] || 0) + 1;
  }

  for (let tLetter of t) {
    if (!freqMap[tLetter] || freqMap[tLetter] === 0) {
      return false;
    } else {
      freqMap[tLetter]--;
    }
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
