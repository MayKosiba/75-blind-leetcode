/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let output = [];
    loop:
    for(num1 in nums){
        for(num2 in nums){
            if(num1 !== num2){
                if(nums[num1] + nums[num2] === target){
                    output.push(num1);
                    output.push(num2);
                    break loop;
                }
            }
        }
    }
    return output;
};