/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyPriceIndex = 0;
    let sellPriceIndex = buyPriceIndex + 1;
    let max = 0;
    for(let i = 0; i < prices.length-1; i++){
        if(prices[i] < prices[buyPriceIndex]){
            for(let k = i+1; k < prices.length;k++){
                if(prices[k] - prices[i] > prices[sellPriceIndex] - prices[buyPriceIndex]){
                    sellPriceIndex = k;
                    buyPriceIndex = i;
                }
            }
        }
        if(prices[i+1] > prices[sellPriceIndex]){
            sellPriceIndex = i+1;
        }
    }
    
    if(buyPriceIndex < sellPriceIndex){
        if(prices[buyPriceIndex] < prices[sellPriceIndex]){
            max = prices[sellPriceIndex] - prices[buyPriceIndex];
        }
    }
    return max;
    
};