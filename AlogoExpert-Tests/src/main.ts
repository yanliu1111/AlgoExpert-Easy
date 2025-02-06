//leetcode242 有效的字母异位词
function isAnagram(s: string, t: string): boolean {
  if (s === t) return false; // Treat identical strings as NOT anagrams
  if (s.length !== t.length) return false;
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    // map.set(key, value) map.get(key)  map.has(key)  map.delete(key)  map.size
    // map.has(s[i]) ? map.get(s[i]) + 1 : 1 means if map has s[i], then get the value of s[i] and add 1, otherwise, set 1 for example, s = "anagram", s[0] = "a", map = new Map(), map.set("a", 1), then map = Map(1) {"a" => 1}, map.get("a") = 1, map.has("a") = true
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1);
  }
  for (let i = 0; i < t.length; i++) {
    if (map.has(t[i])) {
      map.set(t[i], map.get(t[i]) - 1);
      if (map.get(t[i]) === 0) {
        map.delete(t[i]);
      }
    } else {
      return false;
    }
  }
  return map.size === 0;
}
//other method dont use map
function isAnagram1(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const map = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    map[s.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < t.length; i++) {
    map[t.charCodeAt(i) - 97]--;
    if (map[t.charCodeAt(i) - 97] < 0) return false;
  }
  return true;
}

// test in leetcode
console.log(isAnagram('aya', 'aay'));
console.log(isAnagram1('aya', 'aay'));
