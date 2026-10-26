class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        let objS = {};
        let objT = {};

        for (let i = 0; i < s.length; i++) {
            objS[s[i]] = (objS[s[i]] || 0) + 1;
            objT[t[i]] = (objT[t[i]] || 0) + 1;
        }

        for (let char in objS) {
            if (objS[char] !== objT[char]) {
                return false;
            }
        }

        return true;
    }
}
