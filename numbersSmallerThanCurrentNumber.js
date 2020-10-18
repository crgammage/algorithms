var smallerNumbersThanCurrent = function(nums) {
    let answer = []
    for (let i = 0; i < nums.length; i++) {
        let count = 0
        let j = 0
        while (j < nums.length) {
            if (nums[i] > nums[j]) {
                count++
                j++
            } else {
                j++
            }
        }
        answer.push(count)
    }
    return answer
};