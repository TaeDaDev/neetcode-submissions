class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let result = 0;
        let total = 0;
        for (let i = 0; i < nums.length; i++){
            if (nums[i] === 1) {
                result++
                total = Math.max(total, result)
            } else {
                result = 0
            }

        }
        return total;
    }
}