function calculateAverage(nums){
    if(nums.length == 0) return 0;
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum+=nums[i];
    };

    return sum / nums.length;
};
