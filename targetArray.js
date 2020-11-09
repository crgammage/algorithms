var createTargetArray = function(nums, index) {
    let res = []; 
    for (let i = 0; i < index.length; i++){
        let indexV = index[i];
        let v = nums[i];
        res.splice(indexV,0, v);
    }
    return res;
};