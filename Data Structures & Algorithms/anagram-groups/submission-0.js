class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

for (let i = 0; i < strs.length; i++) {

let word = strs[i];

let sorted = word.split("").sort().join("");

if (!map.has(sorted)) {
map.set(sorted, []);
}

map.get(sorted).push(word);
}

return Array.from(map.values());
    }
}
