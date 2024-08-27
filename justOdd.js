function justOdds(nums){
    const noEven = [];

    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 != 0) noEven.push(num[i]);
    };
    console.log(noEven);
};

justOdds([1, 2, 3, 4, 5, 6, 7, 8]);
