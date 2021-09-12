/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for(let i = 0; i < nums.length; i++){
        for(let k = 0; k < nums.length; k++){
            if(nums[i] == nums[k] && k != i){
                return true;
            }
        }
    }
    return false;
};