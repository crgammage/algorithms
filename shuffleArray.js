
var shuffle = function(nums, n) {
    let array = []
    for(let i = 0; i < n; i++){
        array.push(nums[i]);
        array.push(nums[i+n]);   
    }
    return array
};