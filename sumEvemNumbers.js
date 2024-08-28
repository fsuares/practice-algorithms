function sumEvenNumbers(nums){
    let result = 0;
    for(let i = 0; i <= nums.length; i++){
        if(nums[i] % 2 === 0) result += nums[i];
    };
    return result;
};
