var sumOddLengthSubarrays = function(arr, sum=0) {
    const n = arr.length;
     
     //Generate the prefix sum array
     const prefix = Array(n+1).fill(0);
     for (let i = 0; i < n; i++)
         prefix[i+1] = prefix[i]+arr[i];
     
     //Loop through all odd-length sequences and add sums to answer, then return
     for (let i = 0; i < n; i++)
         for (let j = i+1; j < n+1; j+=2)
             sum += (prefix[j]-prefix[i]);
     return sum;
 };

 const sumOddLengthSubarrays = arr => {
    let oddLength = 1
    let sum = 0
    
    while(oddLength <= arr.length) {
        let currentSum = 0
        
        for(let i=0; i<oddLength; i++) {
            currentSum += arr[i]
        }
        
        sum += currentSum
        
        for(let i=oddLength; i<arr.length; i++) {
            currentSum = currentSum + arr[i] - arr[i-oddLength]
            sum += currentSum
        }
        
        oddLength += 2
    }
    
    return sum
};